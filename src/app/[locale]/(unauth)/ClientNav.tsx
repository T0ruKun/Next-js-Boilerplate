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
    <nav className="sticky top-0 z-50 flex size-full h-fit flex-col border-b bg-white">
      <div className="flex w-full flex-row">
        <button
          type="button"
          onClick={() => dispatch(toggleSideNav())}
          className="flex w-full max-w-20 justify-center px-0.5  hover:bg-gray-200"
        >
          <IoIosMenu className="my-auto" />
        </button>
        <div className="relative grow px-2">
          <input
            type="text"
            placeholder="Search..."
            className="my-2 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-blue-500"
            style={{ minWidth: '80px' }}
          />
          <IoSearchCircle className="bnb absolute right-5 top-1/2 size-8 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex flex-row space-x-px">
          <button
            type="button"
            className="flex flex-row px-0.5 hover:bg-gray-200 md:px-2"
          >
            <MdAddComment className="my-auto text-xl" />
            <span className="my-auto text-nowrap pl-1 text-xs">ตั้งกระทู้</span>
          </button>
          <button
            type="button"
            className="flex flex-row px-0.5 hover:bg-gray-200 md:px-4"
          >
            <FaPeopleGroup className="my-auto text-xl" />
            <span className="my-auto text-nowrap pl-1 text-xs">คอมมูนิตี้</span>
          </button>
          <button
            type="button"
            className="flex flex-row px-0.5 hover:bg-gray-200 md:px-4"
          >
            <span className="my-auto text-nowrap text-xs">เข้าสู่ระบบ / สมัครสมาชิก</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
