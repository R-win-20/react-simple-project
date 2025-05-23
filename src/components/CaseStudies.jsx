import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudies = () => {
  var settings = {
    dots: false,
    lazyLoad: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Case Study 1 - Faster Care Disability */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">F</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Faster Care Disability Services
            </h3>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-3">
              NDIS Registered Provider
            </span>
            <p className="text-gray-600 mb-4">
              Faster Care Disability Services sought to enhance participant
              engagement and streamline service delivery in the dynamic NDIS
              marketplace.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Outcomes Delivered:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>95% participant satisfaction rate</li>
                <li>40% reduction in service coordination time</li>
                <li>Expanded service coverage to 3 new regions</li>
                <li>200% increase in service referrals</li>
              </ul>
            </div>
            <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
              View Our Success Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Case Study 2 - Tender Care Disability Services  */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-teal-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">T</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Tender Care Disability Services
            </h3>
            <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mb-3">
              NDIS Registered Provider
            </span>
            <p className="text-gray-600 mb-4">
              Tender Care aimed to strengthen its compassionate care approach
              through enhanced digital presence while maintaining personalized
              participant support.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Our Achievements:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>92% participant retention rate</li>
                <li>50% faster service onboarding process</li>
                <li>Recognized as Top 10 NDIS Provider in our region</li>
                <li>Tripled community outreach engagements</li>
              </ul>
            </div>
            <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors flex items-center">
              Discover Our Approach
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Case Study 3 - Eddin Fashion Beauty */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-purple-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">E</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Eddin Fashion Beauty</h3>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-3">
              Online Shop
            </span>
            <p className="text-gray-600 mb-4">
              Eddin Fashion Beauty needed to boost online sales for their
              women's clothing and dry food products.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>200% increase in online sales</li>
                <li>50% higher average order value</li>
                <li>Improved customer retention through email marketing</li>
                <li>200% increase in service referrals</li>
              </ul>
            </div>
            <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>

        {/* Case Study 4 - Femmes Dynamiques */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-cyan-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">F</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Femmes Dynamiques</h3>
            <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full mb-3">
              Charity Organization
            </span>
            <p className="text-gray-600 mb-4">
              Femmes Dynamiques needed a digital platform to connect with donors
              and showcase their impact while maintaining low operational costs.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>45% increase in online donations</li>
                <li>300+ new volunteers registered in first 3 months</li>
                <li>
                  Streamlined operations reduced administrative costs by 30%
                </li>
              </ul>
            </div>
            <button className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>

        {/* Case Study 5 - Ability Perfect Care */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">A</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Ability Perfect Care</h3>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-3">
              NDIS Registered Provider
            </span>
            <p className="text-gray-600 mb-4">
              Ability Perfect Care struggled with manual scheduling and
              compliance documentation for their growing client base.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Reduced scheduling conflicts by 75%</li>
                <li>Improved compliance documentation efficiency by 60%</li>
                <li>Enabled service expansion to 3 new regions</li>
              </ul>
            </div>
            <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>

        {/* Case Study 6 - Inner Child Therapy */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-black flex items-center justify-center">
            <span className="text-white text-4xl font-bold">I</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Inner Child Therapy</h3>
            <span className="inline-block bg-purple-100 text-black text-xs px-2 py-1 rounded-full mb-3">
              Therapy Consulting
            </span>
            <p className="text-gray-600 mb-4">
              Eddin Fashion Beauty needed to boost online sales for their
              women's clothing and dry food products.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>200% increase in online sales</li>
                <li>50% higher average order value</li>
                <li>Improved customer retention through email marketing</li>
                <li>200% increase in service referrals</li>
              </ul>
            </div>
            <button className="text-black font-medium hover:text-black transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>

        {/* Case Study 7 - Inner Child Therapy */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-blue-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">X</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Xproject StarkWood</h3>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mb-3">
              Cloud Compuniting Business
            </span>
            <p className="text-gray-600 mb-4">
              Eddin Fashion Beauty needed to boost online sales for their
              women's clothing and dry food products.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>200% increase in online sales</li>
                <li>50% higher average order value</li>
                <li>Improved customer retention through email marketing</li>
                <li>200% increase in service referrals</li>
              </ul>
            </div>
            <button className="text-blue-600 font-medium hover:black transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>

        {/* Case Study 8 - Faster Care Disability */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-green-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">FC</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Faster Care Disability</h3>
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
              NDIS Business
            </span>
            <p className="text-gray-600 mb-4">
              Needed real-time scheduling and routing optimization for their
              mobile care teams.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Results Achieved:
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>200% increase in online sales</li>
                <li>50% higher average order value</li>
                <li>Improved customer retention through email marketing</li>
              </ul>
            </div>
            <button className="text-green-600 font-medium hover:text-green-800 transition-colors">
              Read Full Case Study →
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CaseStudies;
