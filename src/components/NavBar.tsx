'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
   const { data: session } = useSession(); 
    const userName = session?.user?.name || session?.user?.email || 'Guest';

     const router = useRouter();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
         
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-bold text-gray-800">ticktock</span>
            <a href="#" className="text-md text-black hover:text-black">
              Timesheets
            </a>
          </div>

          
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 text-md  text-gray-600 hover:text-black focus:outline-none"
            >
              <span>{userName}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>

           
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <button
                 onClick={() => router.push('/')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
