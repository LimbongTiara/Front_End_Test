import { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk nama brand di Navbar
  const [brandName, setBrandName] = useState('My Project');

  const menuItems = ['Home', 'Features', 'About'];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white px-8 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        {/* Brand Name & Tombol Toggle Nama */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold tracking-wide text-indigo-400">
            {brandName}
          </h1>

          {/* Tombol Toggle di Navbar */}
          <button
            onClick={() => setBrandName(brandName === 'My Project' ? 'Tiara Project 🍃' : 'My Project')}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1 rounded-full transition active:scale-95 cursor-pointer"
          >
            {brandName === 'My Project' ? 'Layar 1' : 'Layar 2'}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveMenu(item)}
                className={`transition cursor-pointer px-3 py-1.5 rounded-lg ${
                  activeMenu === item
                    ? 'text-white bg-indigo-600'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-slate-800 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  setActiveMenu(item);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeMenu === item
                    ? 'text-white bg-indigo-600'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}