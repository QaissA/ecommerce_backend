import { PrismaClient, Role, OrderStatus, PaymentMethod, PaymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const electronicsCategory = await prisma.category.create({
    data: {
      name: 'Electronics',
      subCategories: {
        create: [{ name: 'Smartphones' }, { name: 'Laptops' }],
      },
    },
  });

  const clothingCategory = await prisma.category.create({
    data: {
      name: 'Clothing',
      subCategories: {
        create: [{ name: 'Men' }, { name: 'Women' }],
      },
    },
  });

  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'securepassword1',
      role: Role.CUSTOMER,
      adress: '123 Main St',
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'securepassword2',
      role: Role.ADMIN,
    },
  });

  // Create products
  const smartphone = await prisma.product.create({
    data: {
      name: 'Smartphone XYZ',
      description: 'Latest smartphone with advanced features.',
      price: 699.99,
      stockQuantity: 100,
      categoryId: electronicsCategory.id,
      images: {
        create: [{ url: 'https://example.com/smartphone.jpg' }],
      },
    },
  });

  const laptop = await prisma.product.create({
    data: {
      name: 'Laptop ABC',
      description: 'High-performance laptop for work and play.',
      price: 999.99,
      stockQuantity: 50,
      categoryId: electronicsCategory.id,
      images: {
        create: [{ url: 'https://example.com/laptop.jpg' }],
      },
    },
  });

  // Create orders
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      status: OrderStatus.PENDING,
      totalPrice: 1699.98, // example price
      orderItems: {
        create: [
          { productId: smartphone.id, quantity: 1, unitPrice: smartphone.price },
          { productId: laptop.id, quantity: 1, unitPrice: laptop.price },
        ],
      },
      payment: {
        create: {
          paymentMethod: PaymentMethod.CREDIT_CARD,
          status: PaymentStatus.PENDING,
          amount: 1699.98,
        },
      },
    },
  });

  // Create reviews
  await prisma.review.create({
    data: {
      userId: user1.id,
      productId: smartphone.id,
      rating: 5,
      comment: 'Excellent smartphone with great performance!',
    },
  });

  await prisma.review.create({
    data: {
      userId: user1.id,
      productId: laptop.id,
      rating: 4,
      comment: 'Good laptop, but battery life could be better.',
    },
  });

  // Create cart with items
  const cart1 = await prisma.cart.create({
    data: {
      userId: user1.id,
      items: {
        create: [
          { productId: smartphone.id, quantity: 2 },
          { productId: laptop.id, quantity: 1 },
        ],
      },
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
