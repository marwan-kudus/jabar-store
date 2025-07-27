'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  User,
  Mail,
  Calendar,
  Shield,
  ShoppingBag,
  Heart,
  Settings,
} from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const menuItems = [
    {
      icon: <ShoppingBag className='h-6 w-6' />,
      title: 'Pesanan Saya',
      description: 'Lihat riwayat dan status pesanan',
      href: '/dashboard/orders',
    },
    {
      icon: <Heart className='h-6 w-6' />,
      title: 'Wishlist',
      description: 'Produk yang Anda sukai',
      href: '/dashboard/wishlist',
    },
    {
      icon: <Settings className='h-6 w-6' />,
      title: 'Pengaturan',
      description: 'Kelola profil dan preferensi',
      href: '/dashboard/settings',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <div className='flex items-center space-x-4'>
            <div className='bg-blue-100 p-3 rounded-full'>
              <User className='h-8 w-8 text-blue-600' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Selamat datang, {session.user.name || 'User'}!
              </h1>
              <p className='text-gray-600'>
                Kelola akun dan pesanan Anda di sini
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* User Info */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Informasi Akun
              </h2>

              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <User className='h-5 w-5 text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-500'>Nama</p>
                    <p className='font-medium text-gray-900'>
                      {session.user.name || 'Belum diatur'}
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Mail className='h-5 w-5 text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-500'>Email</p>
                    <p className='font-medium text-gray-900'>
                      {session.user.email}
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Shield className='h-5 w-5 text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-500'>Role</p>
                    <p className='font-medium text-gray-900'>
                      {session.user.role === 'ADMIN' ? 'Administrator' : 'User'}
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <Calendar className='h-5 w-5 text-gray-400' />
                  <div>
                    <p className='text-sm text-gray-500'>Member sejak</p>
                    <p className='font-medium text-gray-900'>
                      {new Date().toLocaleDateString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                Menu Dashboard
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer'
                  >
                    <div className='flex items-start space-x-3'>
                      <div className='text-blue-600'>{item.icon}</div>
                      <div>
                        <h3 className='font-medium text-gray-900 mb-1'>
                          {item.title}
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>0</div>
                <div className='text-sm text-gray-600'>Total Pesanan</div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <div className='text-3xl font-bold text-green-600 mb-2'>0</div>
                <div className='text-sm text-gray-600'>Pesanan Selesai</div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <div className='text-3xl font-bold text-purple-600 mb-2'>0</div>
                <div className='text-sm text-gray-600'>Produk Favorit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
