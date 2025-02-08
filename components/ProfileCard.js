"use client";

import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const ProfileCard = () => {
  const roles = ["Web Developer", "Graphic Designer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) =>
        prevRole === roles[0] ? roles[1] : roles[0]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-300"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>
      </div>

      {/* Avatar (Moved Up) */}
      <div className="flex justify-center -mt-16">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full border-4 border-gray-700"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold">Wahyu Puji Sasongko</h1>
        <p className="text-gray-400 transition-opacity duration-500">
          {currentRole}
        </p>
      </div>

      {/* Location & Status */}
      <div className="flex items-center justify-center space-x-2 mt-3">
        <FaMapMarkerAlt />
        <span>Yogyakarta, ID</span>
      </div>
      <div className="flex justify-center mt-2">
        <span className="bg-green-800 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
          AVAILABLE FOR WORK
        </span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 text-xl mt-4">
        <a
          href="https://www.instagram.com/wps_1717/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/wahyu-puji-sasongko-435a24207/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sasongkodev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://ngobrolit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
