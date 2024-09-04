'use client';

import Link from 'next/link';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaSquareYoutube } from 'react-icons/fa6';

import { useAppSelector } from '@/Store/hook';

export default function ClientSideNav() {
  const isSideNavVisible = useAppSelector(state => state.ui.isSideNavVisible);

  return (
    <div className={`fixed left-0 top-0 z-40 h-full w-64 bg-white shadow-md transition-all duration-300 ease-in-out ${isSideNavVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mt-14">
        <ul className="w-full space-y-2 border-b">
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">หน้าแรก</span>
            </Link>
          </li>
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">My Feed</span>
            </Link>
          </li>
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">Pantip Pick</span>
            </Link>
          </li>
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">Pantip Hitz</span>
            </Link>
          </li>
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">Explore</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <ul className="w-full space-y-2 border-b">
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">แลกพอยต์</span>
            </Link>
          </li>
          <li className="flex h-10">
            <Link href="/" className="flex size-full justify-between rounded px-4 align-middle hover:bg-gray-100 active:bg-gray-100">
              <span className="my-auto">กิจกรรมพันทิป</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <ul className="w-full space-y-2 border-b">
          <li className="flex flex-col">
            <Link href="/" className="flex size-full px-4 hover:underline ">
              <span className="my-auto">กฎ กติกาและมารยาท</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">คำแนะนำการโพสต์</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">สิทธิ์การใช้งานของสมาชิก</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">ติดต่อทีมงาน Pantip</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">ติดต่อลงโฆษณา</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">ร่วมงานกับ Pantip</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">Download App Pantip</span>
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" className="flex px-4 hover:underline">
              <span className="my-auto">Pantip Certified Developer</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 hidden w-full border-t md:inline-grid">
        <div className="h-10 w-full text-nowrap p-3 text-sm">
          <span>© 2024 Internet Marketing co., ltd</span>
        </div>
        <div className="flex border-t py-4 shadow-md">
          <span className="my-auto px-4">ติดตาม</span>
          <ul className="flex flex-row items-center">
            <li className="my-auto flex flex-row space-x-2">
              <FaFacebookSquare className="my-auto size-6 cursor-pointer" />
              <FaTwitterSquare className="my-auto size-6 cursor-pointer" />
              <FaSquareYoutube className="my-auto size-6 cursor-pointer" />
              <FaInstagramSquare className="my-auto size-6 cursor-pointer" />
              <AiFillTikTok className="my-auto size-7 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
