import React from "react";

function Footer() {
  return (
    <div className="pt-20">
      <footer className="bg-gray-800 text-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
            <p>Address: 123 Dog Street, Pet Town, Sydney</p>
            <p>Phone: 045 7263 171</p>
            <p>Email: info@dogdaycare.com.au</p>
          </div>

          {/* Operating Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Operating Hours</h3>
            <p>Open 7 days a week</p>
            <p>7 AM to 7 PM</p>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline block"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline block"
            >
              Facebook
            </a>
          </div>

          {/* Newsletter Sign-Up Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Join Our Mailing List
            </h3>
            <p>Sign up for tips and updates.</p>
            <form className="mt-3 flex">
              <input
                type="email"
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          © 2024 Dog Daycare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
