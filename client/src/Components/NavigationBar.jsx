import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { GiCorn } from 'react-icons/gi';
import { GiNotebook, GiSpellBook, GiOpenBook } from 'react-icons/gi';
import { Menu, X } from 'lucide-react';

const navItems = [
  { icon: MdSpaceDashboard, link: "/", name: "Home" },
  { icon: GiSpellBook, link: "/project/myresume", name: "Project: MyResume"},
  { icon: GiCorn, link: "/project/maizegaze", name: "Project: MaizeGaze" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleNav} className="text-2xl p-2 bg-transparent border-none hover:bg-gray-200 focus:outline-none">
            <Menu />
        </button>

        {/* Logo or Title */}
        <Link to="/" className="text-xl font-bold">
          Jiwon's Portfolio
        </Link>

        <div className="text-2xl">
          <Link to="/profile">
            <i className="fas fa-user-circle"></i>
          </Link>
        </div>
      </div>

      {/* Sidebar Navigation */}
      {isOpen && (
        <nav className="bg-gray-100 w-64 h-full fixed left-0 top-0 p-4 shadow-lg">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleNav} className="text-2xl p-2 bg-transparent border-none hover:bg-gray-200 focus:outline-none">
                <X />
            </button>
          </div>
          <ul className="mt-4">
            {navItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link to={item.link} className="flex items-center space-x-2">
                  <item.icon className="text-2xl" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavigationBar;
