import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Buat admin user
  const adminPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Administrator',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Buat sample user
  const userPassword = await bcrypt.hash('user123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'John Doe',
      password: userPassword,
      role: 'USER',
    },
  });

  // Buat sample products
  const products = [
    {
      name: 'iPhone 15 Pro',
      description:
        'Smartphone terbaru dari Apple dengan chip A17 Pro dan kamera 48MP',
      price: 18999000,
      category: 'Electronics',
      stock: 50,
      image: '/images/iphone-15-pro.jpg',
    },
    {
      name: 'MacBook Air M2',
      description:
        'Laptop ultra-thin dengan chip M2 dan layar Retina 13.6 inch',
      price: 21999000,
      category: 'Electronics',
      stock: 30,
      image: '/images/macbook-air-m2.jpg',
    },
    {
      name: 'AirPods Pro 2',
      description: 'Earbuds wireless dengan Active Noise Cancellation',
      price: 3999000,
      category: 'Electronics',
      stock: 100,
      image: '/images/airpods-pro-2.jpg',
    },
    {
      name: 'Nike Air Max 270',
      description:
        'Sepatu olahraga dengan teknologi Air Max untuk kenyamanan maksimal',
      price: 1899000,
      category: 'Fashion',
      stock: 75,
      image: '/images/nike-air-max-270.jpg',
    },
    {
      name: 'Adidas Ultraboost 22',
      description:
        'Running shoes dengan teknologi Boost untuk performa terbaik',
      price: 2299000,
      category: 'Fashion',
      stock: 60,
      image: '/images/adidas-ultraboost-22.jpg',
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Flagship Android dengan S Pen dan kamera 200MP',
      price: 19999000,
      category: 'Electronics',
      stock: 40,
      image: '/images/samsung-s24-ultra.jpg',
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }

  console.log('Database seeded successfully!');
  console.log('Admin user: admin@example.com / admin123');
  console.log('Sample user: user@example.com / user123');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
