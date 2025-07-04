'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm py-3 z-50 shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Left-aligned logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white">💬</span>
              </div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-bold text-xl">
                SellFast
              </span>
            </Link>
          </div>

          {/* Center-aligned navigation (desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Pricing
              </Link>
              {/* <Link
                href="#testimonials"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Testimonials
              </Link> */}
              <Link
                href="#contact"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right-aligned buttons (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-700 hover:text-emerald-600 cursor-pointer "
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all min-w-[100px] cursor-pointer">
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 w-full bg-white z-40 shadow-lg md:hidden animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="py-3 text-base font-medium text-slate-700 hover:text-emerald-600 transition-colors border-b border-slate-100"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="py-3 text-base font-medium text-slate-700 hover:text-emerald-600 transition-colors border-b border-slate-100"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              {/* <Link
                href="#testimonials"
                className="py-3 text-base font-medium text-slate-700 hover:text-emerald-600 transition-colors border-b border-slate-100"
                onClick={toggleMenu}
              >
                Testimonials
              </Link> */}
              <Link
                href="#contact"
                className="py-3 text-base font-medium text-slate-700 hover:text-emerald-600 transition-colors border-b border-slate-100"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-5"
                >
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-5">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
