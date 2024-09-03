'use client';

import { useCallback, useEffect, useRef } from 'react';

import { scrapeAndStoreContent } from '@/libs/scraper/pantip';
import type { Content } from '@/Store/contentSlice';
import { addItems, setLoading } from '@/Store/contentSlice';
import { useAppDispatch, useAppSelector } from '@/Store/hook';

const ContentBlock = ({ content }: { content: Content }) => (
  <div className="m-2 rounded bg-gray-100 p-4">
    <h2 className="text-wrap text-sm font-bold md:text-lg">{content.title}</h2>
    <a href={content.link} className="text-wrap text-sm text-blue-500 underline md:text-lg">
      {content.link}
    </a>
    <p className="text-sm text-gray-500">
      By
      {content.author}
    </p>
    <p className="text-xs text-gray-400">
      Updated at
      {content.updatedAt}
    </p>
    <div className="mt-2">
      {content.tags.map((tag, index) => (
        <span
          key={index}
          className="mr-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function IndexClient() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector(state => state.content);
  const observer = useRef<IntersectionObserver | null>(null);
  const pageRef = useRef(1);

  const loadMoreItems = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const pantipUrl = `https://pantip.com/`;
      const scrapedContent = await scrapeAndStoreContent(pantipUrl);

      if (scrapedContent && scrapedContent.length > 0) {
        const formattedContent: Content[] = scrapedContent.map(item => ({
          id: item.id || Date.now() + Math.random(),
          title: item.title,
          link: item.link,
          author: item.author,
          tags: item.tags,
          updatedAt: item.updatedAt,
        }));
        dispatch(addItems(formattedContent));
        pageRef.current += 1;
      }
    } catch (error) {
      console.error('Failed to load more items:', error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        loadMoreItems();
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, loadMoreItems]);

  useEffect(() => {
    if (items.length === 0) {
      loadMoreItems();
    }
  }, [items.length, loadMoreItems]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-4 text-2xl font-bold">Infinite Pantip Contents</h1>
      {items.map((item, index) => (
        <div key={item.id} ref={index === items.length - 1 ? lastElementRef : null}>
          <ContentBlock content={item} />
        </div>
      ))}
      {loading && <p className="text-center">Loading Contents...</p>}
    </div>
  );
}
