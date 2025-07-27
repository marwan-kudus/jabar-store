import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full text-center'>
        <div className='bg-white rounded-lg shadow-md p-8'>
          <div className='flex justify-center mb-4'>
            <AlertTriangle className='h-16 w-16 text-red-500' />
          </div>

          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Akses Ditolak
          </h1>

          <p className='text-gray-600 mb-6'>
            Anda tidak memiliki izin untuk mengakses halaman ini. Silakan
            hubungi administrator jika Anda merasa ini adalah kesalahan.
          </p>

          <div className='space-y-3'>
            <Link
              href='/'
              className='block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
            >
              Kembali ke Beranda
            </Link>

            <Link
              href='/dashboard'
              className='block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors'
            >
              Ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
