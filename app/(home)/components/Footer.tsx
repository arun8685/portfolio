"use client";
import React from "react";
import Navbar from "./Navbar";

export default function Footer() {
  const [selectedRole, setSelectedRole] = React.useState<keyof typeof resumeLinks>("Data Analyst");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value as keyof typeof resumeLinks);
  };

  const resumeLinks = {
    "Data Scientist": "https://drive.google.com/uc?export=download&id=1DDLFoKQqqwjWoipe4bW-pZBAIeCNt3j8",
    "Data Analyst": "https://drive.google.com/uc?export=download&id=1DDLFoKQqqwjWoipe4bW-pZBAIeCNt3j8",
    "Software Engineer": "https://drive.google.com/uc?export=download&id=1bqEUBfNVLI6mweg6DMTOyaYQt--qUr0H",
    "Web Developer": "https://drive.google.com/uc?export=download&id=1bqEUBfNVLI6mweg6DMTOyaYQt--qUr0H",
    // Add other roles and their respective resume links here
  };

  return (
    <div className="border-t mt-10 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Flex container for side-by-side alignment */}
        <div className="flex justify-between gap-16 mb-8">
          {/* Navbar Component */}
          <div className="flex flex-col gap-5">
            <Navbar className="flex flex-col gap-5" />
          </div>
          {/* Contact Details */}
          <div className="space-y-4 text-sm">
            <p>Data Analyst</p>
            <p>Email: <a href={`mailto:arunsharma572arun@gmail.com`} className="text-blue-500">arunsharma572arun@gmail.com</a></p>
            <p>Phone: <a href={`tel:+919306013310`} className="text-blue-500">+91 9306013310</a></p>
            <p>Home Town: Jind, Haryana</p>
            <p>Website: <a href="https://www.linkedin.com/in/arun3310/" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.arunsharma.me</a></p>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mb-8 text-center flex flex-col items-center gap-4">
          <label htmlFor="role-select" className="block text-sm">Select a Role to Download Resume:</label>
          <div className="flex items-center gap-4">
            <select
              id="role-select"
              value={selectedRole}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            >
              {Object.keys(resumeLinks).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <a
              href={resumeLinks[selectedRole]}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center"
            >
              &darr; Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 py-8 px-4 space-y-4 text-sm text-center">
        Copyright © 2025 - All Rights Reserved - <a href="https://www.linkedin.com/in/arun3310/" className="text-blue-500">www.arunsharma.me</a>
      </div>
    </div>
  );
}
