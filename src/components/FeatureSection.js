import React from "react";

const features = [
  {
    title: "Wide Range of Products",
    description: "Access thousands of high-quality products.",
    icon: "🛍️",
  },
  {
    title: "Global Fulfillment",
    description: "We ship to over 100 countries worldwide.",
    icon: "🌍",
  },
  {
    title: "Low Production Costs",
    description: "Affordable prices with competitive rates.",
    icon: "💰",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
