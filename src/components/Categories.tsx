import React from 'react';
import { Smartphone, Laptop, Home, ShoppingBag, Watch, Camera } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone },
  { name: 'Computers', icon: Laptop },
  { name: 'Home & Living', icon: Home },
  { name: 'Fashion', icon: ShoppingBag },
  { name: 'Accessories', icon: Watch },
  { name: 'Photography', icon: Camera },
];

export default function Categories() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="group relative flex flex-col items-center"
                >
                  <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-200">
                    <Icon className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {category.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}