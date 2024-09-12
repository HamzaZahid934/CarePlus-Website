import React from 'react';

const AboutSection = () => {
    return (
        <section className="about py-16">
            <div className="container mx-auto px-4 pr-32 pl-32">
                <div className="section-wrap flex flex-col md:flex-row items-center gap-16">

                    {/* Left Section - Image */}
                    <div className="flex flex-shrink-0 flex-row items-center">
                        <img
                            src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66347089172bb59ef60deb52_about.jpg"
                            loading="lazy"
                            alt="About Image"
                            className=" w-full max-w-xl rounded-lg shadow-lg ml-10"
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 46vw"
                            srcSet="https://assets-global.website-files.com/65f19ff47c0ac41abb16b0fa/66347089172bb59ef60deb52_about-p-500.jpg 500w, 
                      https://assets-global.website-files.com/65f19ff47c0ac41abb16b0fa/66347089172bb59ef60deb52_about-p-800.jpg 800w, 
                      https://assets-global.website-files.com/65f19ff47c0ac41abb16b0fa/66347089172bb59ef60deb52_about-p-1080.jpg 1080w, 
                      https://assets-global.website-files.com/65f19ff47c0ac41abb16b0fa/66347089172bb59ef60deb52_about.jpg 1236w"
                        />
                    </div>

                    {/* Right Section - Text and Content */}
                    <div className="section-data flex-col pt-20 ">
                        <h2 className="text-3xl font-bold mb-4">About CarePlus.</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our journey began with a simple idea to create a place where pet owners could find everything they need
                            to care for their furry companions, all in one convenient location. Since then, we've grown into a trusted destination.
                        </p>

                        {/* List Section */}
                        <div className="about-data flex-wrap pr-24">
                            <ul className="about-list list-none space-y-2">
                                <li className="about-item text-lg font-medium text-gray-800">Product Quality</li>
                                <li className="about-item text-lg font-medium text-gray-800">Market Expansion</li>
                                <li className="about-item text-lg font-medium text-gray-800">Community Engagement</li>
                                <li className="about-item text-lg font-medium text-gray-800">Brand Awareness</li>
                                <li className="about-item text-lg font-medium text-gray-800">Ethical Sourcing</li>
                            </ul>
                        </div>

                        {/* Buttons Section */}
                        <div className="button-wrap mt-6">
                            <a href="/about-us" className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-md">
                                About us
                                <div className="btn-icon ml-3">
                                    <img
                                        src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66338f4096e79e2af30a2f50_button-arrow.svg"
                                        alt="Arrow"
                                        className="w-4"
                                    />
                                    <img
                                        src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/66338f85f8b2c3b9757f9662_ic-white-arrow.svg"
                                        alt="Hover Arrow"
                                        className="hidden w-4"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* Statistics Section */}
                        <div className="about-bottom mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="about-info flex flex-col md:flex-row items-center justify-between w-full">
                                <div className="about-block flex items-center">
                                    <div className="about-info-text text-2xl font-bold">$2M</div>
                                    <div className="ml-2 text-gray-700">Pet products sold worldwide.</div>
                                </div>
                                <div className="about-line hidden md:block mx-6 w-px h-12 bg-gray-300"></div>
                                <div className="about-block right flex items-center">
                                    <div className="about-info-text text-2xl font-bold">4.8</div>
                                    <div className="ml-2 text-gray-700">Our score rating</div>
                                </div>
                            </div>

                            <a href="/products" className="about-button inline-block">
                                <img
                                    src="https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631c7f4ab4c6d990b7f8ca2_form-arrow.svg"
                                    alt="Arrow"
                                    className="w-6"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
