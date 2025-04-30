// scripts/seedMenuItems.js
import mongoose from 'mongoose';
import MenuItem from '../models/MenuItem.js';  // Adjust path if you place it elsewhere

const seedMenu = async () => {
  // 1️⃣ Connect to your database (change URI if needed)
  await mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // 2️⃣ Define your items
  const menuItems = [
    // Pizzas
    {
      name:        'Pizza Margherita',
      description: 'Classic pizza with tomato sauce and fresh mozzarella.',
      price:       12.99,
      category:    'Pizza',
      image:       '/images/menu/pizza-margherita.jpg',
    },
    {
      name:        'Pepperoni Pizza',
      description: 'Loaded with pepperoni slices and extra cheese.',
      price:       14.99,
      category:    'Pizza',
      image:       '/images/menu/pizza-pepperoni.jpg',
    },
    {
      name:        'BBQ Chicken Pizza',
      description: 'Grilled chicken, BBQ sauce, red onions & cilantro.',
      price:       15.49,
      category:    'Pizza',
      image:       '/images/menu/pizza-bbq-chicken.jpg',
    },

    // Burgers
    {
      name:        'Classic Cheeseburger',
      description: 'Beef patty with cheddar, lettuce, tomato & pickles.',
      price:       9.99,
      category:    'Burgers',
      image:       '/images/menu/burger-cheese.jpg',
    },
    {
      name:        'Bacon Double Burger',
      description: 'Two beef patties, crispy bacon, American cheese.',
      price:       12.49,
      category:    'Burgers',
      image:       '/images/menu/burger-bacon.jpg',
    },

    // Seafood
    {
      name:        'Grilled Salmon',
      description: 'Salmon fillet grilled to perfection with lemon butter.',
      price:       19.99,
      category:    'Seafood',
      image:       '/images/menu/seafood-salmon.jpg',
    },
    {
      name:        'Shrimp Scampi',
      description: 'Shrimp sautéed in garlic, white wine & herbs.',
      price:       18.49,
      category:    'Seafood',
      image:       '/images/menu/seafood-shrimp.jpg',
    },

    // Desserts
    {
      name:        'Chocolate Lava Cake',
      description: 'Warm cake with a gooey molten chocolate center.',
      price:       6.99,
      category:    'Desserts',
      image:       '/images/menu/dessert-lava-cake.jpg',
    },
    {
      name:        'New York Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust.',
      price:       7.49,
      category:    'Desserts',
      image:       '/images/menu/dessert-cheesecake.jpg',
    },

    // Beverages
    {
      name:        'Fresh Lemonade',
      description: 'House-made lemonade with a hint of mint.',
      price:       3.99,
      category:    'Beverages',
      image:       '/images/menu/beverage-lemonade.jpg',
    },
    {
      name:        'Iced Coffee',
      description: 'Cold brew coffee served over ice.',
      price:       4.49,
      category:    'Beverages',
      image:       '/images/menu/beverage-iced-coffee.jpg',
    },
  ];

  // 3️⃣ Insert into DB
  try {
    //await MenuItem.deleteMany();          // clear existing items (optional)
    await MenuItem.insertMany(menuItems);  // seed new items
    console.log('✅ Menu items seeded successfully!');
  } catch (err) {
    console.error('❌ Seeding error:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedMenu();
