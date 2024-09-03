'use client';

import { IoIosMenu } from 'react-icons/io';
import { IoMail, IoNotifications, IoSearch } from 'react-icons/io5';

import { useAppDispatch } from '@/Store/hook';
import { toggleSideNav } from '@/Store/uiSlice';

export default function ClientNav() {
  const dispatch = useAppDispatch();

  return (
    <nav className="sticky top-0 z-50 flex size-full flex-col bg-white shadow-md">
      <div className="flex w-full flex-row">
        <button
          type="button"
          onClick={() => dispatch(toggleSideNav())}
          className="flex w-full max-w-28 justify-center rounded px-3 hover:bg-gray-100"
        >
          <IoIosMenu className="my-auto" />
        </button>
        <div className="relative grow">
          <input
            type="text"
            placeholder="Search..."
            className="my-2 w-full rounded-md border border-gray-300 pl-3 pr-10 focus:border-blue-500"
            style={{ minWidth: '80px' }}
          />
          <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="my-auto ml-2 flex space-x-px">
          <button
            type="button"
            className="flex flex-row rounded-full px-1 hover:bg-gray-100"
            aria-label="Notifications"
          >
            <IoNotifications className="text-xl" />
            <span className="text-nowrap pl-1 text-xs">ตั้งกระทู้</span>
          </button>
          <button
            type="button"
            className="flex flex-row rounded-full px-1 hover:bg-gray-100"
            aria-label="Messages"
          >
            <IoMail className="text-xl" />
            <span className="text-nowrap pl-1 text-xs">คอมมูนิตี้</span>
          </button>
          <button
            type="button"
            className="flex flex-row rounded-full px-1 hover:bg-gray-100"
            aria-label="Settings"
          >
            <span className="text-nowrap text-xs">เข้าสู่ระบบ / สมัครสมาชิก</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
