'use client';

import { FaPeopleGroup } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { IoSearchCircle } from 'react-icons/io5';
import { MdAddComment } from 'react-icons/md';

import { useAppDispatch } from '@/Store/hook';
import { toggleSideNav } from '@/Store/uiSlice';

export default function ClientNav() {
  const dispatch = useAppDispatch();

  return (
    <nav className="sticky top-0 z-50 inline-flex min-h-[40px] w-full border-b bg-white">
      <div className="flex w-full flex-row justify-between">
        {/* Left Side: Button to toggle side navigation */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => dispatch(toggleSideNav())}
            className="flex size-full min-w-12 max-w-[80px] justify-center px-0.5 hover:bg-gray-200"
          >
            <IoIosMenu className="my-auto" />
          </button>
        </div>

        {/* Center: Search Input Field */}
        <div className="relative hidden grow px-2 sm:inline-block">
          <input
            type="text"
            placeholder="Search..."
            className="my-2 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-blue-500"
            style={{ minWidth: '80px' }}
          />
          <IoSearchCircle className="bnb-color absolute right-5 top-1/2 hidden size-8 -translate-y-1/2 text-gray-400 sm:flex" />
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-row items-center space-x-1">
          {/* Add Comment Button */}
          <button
            type="button"
            className="flex size-full flex-row items-center px-0.5 hover:bg-gray-200 md:px-3"
          >
            <MdAddComment className="text-xl" />
            <span className="text-nowrap pl-1 text-xs">ตั้งกระทู้</span>
          </button>

          {/* Community Button */}
          <button
            type="button"
            className="flex size-full flex-row items-center px-0.5 hover:bg-gray-200 md:px-3"
          >
            <FaPeopleGroup className="text-xl" />
            <span className="text-nowrap pl-1 text-xs">คอมมูนิตี้</span>
          </button>

          {/* Login/Register Button */}
          <button
            type="button"
            className="flex size-full flex-row items-center px-0.5 hover:bg-gray-200 md:px-3"
          >
            <span className="text-nowrap text-xs">เข้าสู่ระบบ / สมัครสมาชิก</span>
          </button>
        </div>
      </div>
    </nav>

  );
}
