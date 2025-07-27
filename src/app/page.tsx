import Link from 'next/link';
import { ShoppingBag, Star, Truck, Shield, Headphones } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Truck className='h-8 w-8 text-blue-600' />,
      title: 'Pengiriman Gratis',
      description: 'Gratis ongkir untuk pembelian di atas Rp 100.000',
    },
    {
      icon: <Shield className='h-8 w-8 text-blue-600' />,
      title: 'Pembayaran Aman',
      description: 'Transaksi aman dengan enkripsi SSL',
    },
    {
      icon: <Headphones className='h-8 w-8 text-blue-600' />,
      title: 'Customer Service 24/7',
      description: 'Tim support siap membantu Anda kapan saja',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Smartphone Premium',
      price: 'Rp 8.999.000',
      image: '/api/placeholder/300/300',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Laptop Gaming',
      price: 'Rp 15.999.000',
      image: '/api/placeholder/300/300',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Headphone Wireless',
      price: 'Rp 1.299.000',
      image: '/api/placeholder/300/300',
      rating: 4.7,
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Belanja Online Terpercaya
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100'>
              Temukan produk berkualitas dengan harga terbaik
            </p>
            <div className='space-x-4'>
              <Link
                href='/auth/signup'
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors'
              >
                <ShoppingBag className='mr-2 h-5 w-5' />
                Mulai Belanja
              </Link>
              <Link
                href='/auth/signin'
                className='inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Mengapa Memilih Kami?
            </h2>
            <p className='text-lg text-gray-600'>
              Kami berkomitmen memberikan pengalaman belanja terbaik
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='text-center p-6 bg-white rounded-lg shadow-md'
              >
                <div className='flex justify-center mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Produk Terpopuler
            </h2>
            <p className='text-lg text-gray-600'>
              Produk pilihan dengan rating terbaik
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {products.map((product) => (
              <div
                key={product.id}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='h-64 bg-gray-200 flex items-center justify-center'>
                  <span className='text-gray-500'>Product Image</span>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {product.name}
                  </h3>
                  <div className='flex items-center mb-2'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='ml-2 text-sm text-gray-600'>
                      ({product.rating})
                    </span>
                  </div>
                  <p className='text-2xl font-bold text-blue-600 mb-4'>
                    {product.price}
                  </p>
                  <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'>
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-blue-600 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Siap Memulai Belanja?</h2>
          <p className='text-xl mb-8 text-blue-100'>
            Daftar sekarang dan dapatkan diskon 10% untuk pembelian pertama
          </p>
          <Link
            href='/auth/signup'
            className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors'
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
