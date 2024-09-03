'use sever';

import axios from 'axios';
import * as cheerio from 'cheerio';

type Content = {
  id: number | null;
  title: string;
  link: string;
  author: string;
  tags: string[];
  updatedAt: string;
};

export async function scrapeAndStoreContent(contentUrl: string) {
  if (!contentUrl) {
    return;
  }

  try {
    const response = await axios.get(contentUrl);
    const $ = cheerio.load(response.data);
    const contentArray: Content[] = [];

    $('.pt-list-item').each((_, element) => {
      const item = $(element);

      const titleElement = item.find('.pt-list-item__title a');
      const link = titleElement.attr('href') || '';
      const title = titleElement.text().trim();
      const authorElement = item.find('.pt-list-item__info h5 a');
      const author = authorElement.text().trim();
      const tagsElements = item.find('.pt-list-item__tag a');
      const tags = tagsElements.map((_, tag) => $(tag).text().trim()).get();
      const updatedAtElement = item.find('.pt-list-item__info span');
      const updatedAt = updatedAtElement.attr('title') || '';

      // Safely extract the ID and handle cases where it might be undefined
      const idAttribute = item.attr('id');
      const id = idAttribute ? Number.parseInt(idAttribute.split(':').pop() || '0', 10) : null;

      // Create a content object
      const content = {
        id,
        title,
        link,
        author,
        tags,
        updatedAt,
      };

      contentArray.push(content);
      // eslint-disable-next-line no-console
      console.log(content.title);
    });

    return contentArray;
  } catch (error: any) {
    throw new Error(`Failed to extract content: ${error.message}`);
  }
}
