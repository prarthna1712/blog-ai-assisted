"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="/" className="text-gray-300 text-xl font-bold">
                Logo
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:scale-125 transition-transform duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-gray-300 hover:scale-125 transition-transform duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
              >
                Blog
              </a>

              <a
                href="/about"
                className="text-gray-300 hover:scale-125 transition-transform duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>

              <a
                href="/contact"
                className="text-gray-300 hover:scale-125 transition-transform duration-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <Button
                className="mx-1 hover:scale-125 transition-transform duration-300"
                variant="outline"
              >
                Login{" "}
              </Button>
              <Button
                className="mx-1 hover:scale-125 transition-transform duration-300"
                variant="outline"
              >
                Sign up
              </Button>
              <ModeToggle />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            <Sheet>
              <span className="mx-2">
                <ModeToggle />
              </span>
              <SheetTrigger>
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-3 border-b-2">
                    P's Blog
                  </SheetTitle>

                  <div className="sm:hidden " id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      <a
                        href="/ "
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Home
                      </a>

                      <a
                        href="/about"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        About
                      </a>

                      <a
                        href="/contact"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Contact
                      </a>
                      <Button className="mx-1" variant="outline">
                        Login{" "}
                      </Button>
                      <Button className="mx-1" variant="outline">
                        Sign up
                      </Button>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
