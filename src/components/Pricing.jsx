import React from "react";

function Pricing() {
  return (
    <div>
      <div className="pricing-packages-container py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Pricing & Packages</h1>
          <p className="text-2xl font-semibold mb-6">
            Affordable Care for Your Dog
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Daycare Packages</h2>
              <p className="text-lg">$30/day</p>
              <p className="text-lg">$140/week</p>
              <p className="text-lg">$500/month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Boarding</h2>
              <p className="text-lg">$50/night</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Training</h2>
              <p className="text-lg">Starting at $60/session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
