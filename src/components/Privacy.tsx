import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-6">Your privacy and security are our top priority.</p>
      <p className="text-gray-600 mb-6">Last Updated: Sep 23, 2025</p>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Introduction</h2>
        <p className="text-gray-700">
          This Privacy Policy explains how Hexa Sort collects, uses, and protects your personal
          information. By using our services, you agree to the terms outlined in this Privacy Policy.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Data Collection</h2>
        <p className="text-gray-700">
          We collect the following information:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Personal Information</strong>: Information you voluntarily provide (e.g., email address).</li>
          <li><strong>Technical Data</strong>: Basic technical information such as browser type, access times, and usage data obtained through analytics tools.</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Data Usage</h2>
        <p className="text-gray-700">
          The limited information we collect is used solely for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Maintaining and improving basic website functionality</li>
          <li>Providing necessary technical support</li>
          <li>Ensuring service security</li>
          <li>Optimizing user experience</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Data Security</h2>
        <p className="text-gray-700">
          We implement reasonable security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">User Rights</h2>
        <p className="text-gray-700">
          You have the right to view, correct, and delete your personal information. To exercise these rights, please contact our support team.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <a href="mailto:support@causalzap.com" className="text-blue-600 hover:underline">
        support@causalzap.com
        </a>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
