// src/terms/page.tsx
import React from "react";


export default function TermsOfServicePage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Terms of Service</h1>
        <p className="text-lg text-gray-700 mb-6">
          Please read carefully before using this website
        </p>
  
        <div className="space-y-6">
          {/* Introduction Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Introduction</h2>
            <p>
              Welcome to Hexa Sort Guide Site, a fan-made website dedicated to providing walkthroughs
              and guides for the Hexa Sort game. By accessing or using our website, you agree to be
              bound by these Terms of Service.
            </p>
          </section>
  
          {/* Disclaimer Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Disclaimer</h2>
            <p>
              Hexa Sort Guide Site is not affiliated with, endorsed by, or in any way officially
              connected with the official Hexa Sort game or its developer Rollic Games. All game
              content, images, and trademarks are property of their respective owners.
            </p>
          </section>
  
          {/* User Conduct Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">User Conduct</h2>
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Use our website in any way that violates any applicable laws</li>
              <li>Attempt to interfere with the proper functioning of the website</li>
              <li>Engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the website</li>
              <li>Use the website for any unlawful or prohibited purpose by these Terms of Service</li>
            </ul>
          </section>
  
          {/* Content Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Content</h2>
            <p>
              All content on this website is for informational and educational purposes only. We strive
              to provide accurate and helpful guides, but we cannot guarantee the accuracy or completeness
              of any information on our site.
            </p>
          </section>
  
          {/* Changes to Terms Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will always post the most current
              version on our website. By continuing to use the website after changes have been made, you
              agree to be bound by the revised terms.
            </p>
          </section>
  
          {/* Contact Us Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <a href="mailto:support@causalzap.com" className="text-blue-600 hover:underline">
              support@causalzap.com
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }
  