import React from 'react';

const categories = [
    { title: 'Pet Food', subtitle: 'Healthy food', link: 'https://careplus-template.webflow.io/category/pet-food' },
    { title: 'Dog Treats', subtitle: 'Tasty Canine Delights', link: 'https://careplus-template.webflow.io/category/dog-treats' },
    { title: 'Litter Care', subtitle: 'Fresh Environment', link: 'https://careplus-template.webflow.io/category/litter-care' },
    { title: 'Crates & Beds', subtitle: 'Cozy Essentials', link: 'https://careplus-template.webflow.io/category/crates-beds' },
    { title: 'Raw Dog Food', subtitle: 'Senior Dog Formula', link: 'https://careplus-template.webflow.io/category/raw-dog-food' },
    { title: 'Outdoor Gear', subtitle: 'Pet-Friendly Bug', link: 'https://careplus-template.webflow.io/category/outdoor-gear' },
    { title: 'Puppy Food', subtitle: 'Nutrition Formula', link: 'https://careplus-template.webflow.io/category/puppy-food' },
    { title: 'Diet Dog Food', subtitle: 'Pure Dog Fare', link: 'https://careplus-template.webflow.io/category/diet-dog-food' }
];

const CategoryGrid = () => {
    return (
        <section className="category py-12 ">
            <div className="container mx-auto max-w-7xl">
                <h2 className="section-heading text-3xl font-semibold text-left mb-8 text-gray-700">Browse by Category</h2>
                <div className="category-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href={category.link}
                            className="category-info w-inline-block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
                        >
                            <div>
                                <h5 className="category-heading text-lg font-medium text-gray-800 bg-white">{category.title}</h5>
                                <div className="text-sm text-gray-500 bg-white">{category.subtitle}</div>
                            </div>
                            <div className="category-icon ml-4 bg-white">
                                <img
                                    src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66347ee30d661c296387ec63_category-arrow.svg"
                                    alt="Arrow"
                                    className="w-6 h-6 bg-white"
                                    style={{ filter: 'invert(0%)' }}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
