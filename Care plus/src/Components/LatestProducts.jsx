import React from 'react';

const products = [
    {
        name: 'Adventure Harness',
        price: '$145.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/6633542ba50adae5bba0e5d8_product-main-05.jpg',
        productLink: '/product/adventure-harness',
    },
    {
        name: 'Woof Worthy Shampoo',
        price: '$110.00 USD',
        comparePrice: '$126.00 USD',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/663354df9a64697aa73b4f7a_product-main-06.jpg',
        productLink: '/product/woof-worthy-shampoo',
    },
    {
        name: 'Pet Pedicure Nail Clippers',
        price: '$86.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/663352e7a4a108f54e947620_product-main-07.jpg',
        productLink: '/product/pet-pedicure-nail-clippers',
    },
    {
        name: 'Treat Trove Treats',
        price: '$134.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/6633555a38d1088b60cbeae2_product-main-08.jpg',
        productLink: '/product/treat-trove-treats',
    },
    {
        name: 'Chow Time Dog Food',
        price: '$120.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/66335374668c24eaddd12525_product-main-09.jpg',
        productLink: '/product/chow-time-dog-food',
    },
    {
        name: 'Snack Attack Treats',
        price: '$135.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/66335374f78dca12d63921dc_product-main-10.jpg',
        productLink: '/product/snack-attack-treats',
    },
    {
        name: 'Yum Yum Dog Biscuits',
        price: '$140.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/66335436bbed6f5efa47d62d_product-main-11.jpg',
        productLink: '/product/yum-yum-dog-biscuits',
    },
    {
        name: 'Meow Mix Dog Food',
        price: '$100.00 USD',
        comparePrice: '',
        imageUrl: 'https://cdn.prod.website-files.com/6630d25f16e3c1e0bd8d0f52/663352e7b1c3795f3901869a_product-main-12.jpg',
        productLink: '/product/meow-mix-dog-food',
    },
];

const LatestProducts = () => {
    return (
        <section className="products py-12">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Heading */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-semibold text-gray-700">Latest Products</h2>
                    <a
                        href="/products"
                        className="hidden md:flex items-center text-gray-700 hover:text-gray-900"
                    >
                        <span className="mr-2">View All</span>
                        <img
                            src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66338f4096e79e2af30a2f50_button-arrow.svg"
                            alt="Arrow"
                            className="w-4 h-4"
                        />
                    </a>
                </div>

                {/* Products Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <a
                            key={index}
                            href={product.productLink}
                            className="products-block bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col"
                        >
                            <div className="product-img mb-4">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </div>
                            <div className="flex-grow bg-white">
                                <h5 className="product-name text-lg font-medium text-gray-800 mb-2 bg-white">
                                    {product.name}
                                </h5>

                                <div className="product-price text-gray-700 bg-white">
                                    <div className="text-xl font-semibold bg-white">{product.price}</div>
                                    {product.comparePrice && (
                                        <div className="compare-price text-sm line-through text-gray-500 bg-white">
                                            {product.comparePrice}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View All Button for Mobile */}
                <div className="mt-8 md:hidden text-center">
                    <a
                        href="/products"
                        className="inline-flex items-center text-gray-700 hover:text-gray-900"
                    >
                        <span className="mr-2">View All</span>
                        <img
                            src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66338f4096e79e2af30a2f50_button-arrow.svg"
                            alt="Arrow"
                            className="w-4 h-4"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
