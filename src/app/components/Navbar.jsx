'use client';

import { Bell, BookOpen, ChevronDown, Menu, Moon, Search, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Browse Tutors', href: '/tutors' },
  { name: 'Add Tutor', href: '/add-tutor' },
  { name: 'My Tutors', href: '/my-tutors' },
  { name: 'My Booked Sessions', href: '/booked-sessions' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const [theme, setTheme] = useState('light');

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200 shadow-sm transition-all duration-300">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200/50">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-base-content tracking-tight font-montserrat">
                MediQueue
              </span>
            </Link>
            <div className='w-4 md:w-10'></div>

            {/* Nav Items */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium relative group transition-colors rounded-lg hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30"
                  >
                    <span className={isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-base-content/80 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}>
                      {item.name}
                    </span>

                    <span className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ${isActive ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'}`} />
                  </Link>
                )
              })}
            </nav>

            {/* Search + Actions */}
            <div className="hidden lg:flex items-center flex-1 ml-6 mr-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40" />
                <input
                  type="text"
                  placeholder="Search tutors by subject or name..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-base-200/50 border border-base-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 placeholder-base-content/40 transition-all text-base-content"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {/* DeskTop Theme Button */}
              <label className="btn btn-ghost btn-circle swap swap-rotate w-9 h-9 min-h-0 bg-base-200/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-base-300 text-base-content flex items-center justify-center transition-colors">
                <input
                  type="checkbox"
                  onChange={handleThemeToggle}
                  checked={theme === 'dark'}
                />
                {/* Light Mode এ Moon দেখাবে */}
                <Moon className="swap-off w-4 h-4" />
                {/* Dark Mode এ Sun দেখাবে */}
                <Sun className="swap-on w-4 h-4" />
              </label>

              <button className="relative w-9 h-9 rounded-full bg-base-200/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center justify-center transition-colors border border-base-300 text-base-content">
                <Bell className="w-4 h-4" />
                <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-base-100" />
              </button>

              {/* User */}
              <button className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-full bg-base-200/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-base-300 transition-colors">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">M</div>
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-semibold text-base-content leading-none">Masud</p>
                  <p className="text-[11px] text-base-content/60 leading-none mt-0.5">Student</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-base-content/40" />
              </button>
            </div>

            {/* Mobile Actions & hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Theme Button */}
              <label className="btn btn-ghost btn-circle swap swap-rotate text-base-content btn-sm flex items-center justify-center">
                <input
                  type="checkbox"
                  onChange={handleThemeToggle}
                  checked={theme === 'dark'}
                />
                <Moon className="swap-off w-5 h-5 block" />
                <Sun className="swap-on w-5 h-5 block" />
              </label>
              <button className="p-2 rounded-lg hover:bg-base-200 text-base-content" onClick={() => setMobileOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-9999 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className={`absolute top-0 left-0 w-70 h-full bg-base-100 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>

          <div className="flex items-center justify-between p-4 border-b border-base-200">
            <span className="text-xl font-bold text-base-content tracking-tight">MediQueue</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-base-content/50 hover:bg-base-200 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-3 border-b border-base-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40" />
              <input
                type="text"
                placeholder="Search tutors..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 text-base-content placeholder-base-content/40"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3.5 px-4 text-base font-semibold rounded-2xl transition-all ${isActive ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-base-content hover:bg-base-200'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="p-4 border-t border-base-200 bg-base-200/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shrink-0">M</div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-base-content truncate">Masud</p>
              <p className="text-xs text-base-content/50 truncate">Student</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar