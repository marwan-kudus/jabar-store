'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ShoppingCart, User, LogOut, Home } from 'lucide-react';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className='bg-white shadow-lg border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <ShoppingCart className='h-8 w-8 text-blue-600' />
              <span className='text-xl font-bold text-gray-900'>
                Jabar Store
              </span>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
            >
              <Home className='h-4 w-4' />
              <span>Home</span>
            </Link>

            {status === 'loading' ? (
              <div className='animate-pulse bg-gray-200 h-8 w-20 rounded'></div>
            ) : session ? (
              <div className='flex items-center space-x-4'>
                <Link
                  href='/dashboard'
                  className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  <User className='h-4 w-4' />
                  <span>Dashboard</span>
                </Link>

                <div className='flex items-center space-x-2 text-sm text-gray-600'>
                  <span>Halo, {session.user.name || session.user.email}</span>
                </div>

                <button
                  onClick={() => signOut()}
                  className='flex items-center space-x-1 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors'
                >
                  <LogOut className='h-4 w-4' />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className='flex items-center space-x-2'>
                <Link
                  href='/auth/signin'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Login
                </Link>
                <Link
                  href='/auth/signup'
                  className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors'
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
