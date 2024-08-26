import React from "react";

const Header = () => {
  return (
    <header className="flex items-center z-10 bg-white w-full border-gray-400 justify-between h-16 py-6 px-4 md:px-6 border-b">
      <a className="flex items-center gap-2" href="#">
        <span className="text-2xl font-bold">Efix</span>
      </a>
      <button
        className="p-1 sm:hidden border rounded z-50 bg-white top-4 right-4"
        id="menuBtn"
      >
        <svg
          id="harmBurger"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <span id="closeIcon" className="hidden">
          Close
        </span>
      </button>
      <div
        id="mobileNav"
        className="hidden sm:flex sm:flex-row sm:static sm:justify-between sm:items-center flex-col fixed top-0 left-0 bottom-0 h-full z-10 w-3/4 bg-white p-8"
      >
        <nav className="flex sm:flex-row flex-col items-center gap-6">
          <a
            className="text-muted-foreground hover:text-foreground hover:text-blue-700"
            href="index.html"
          >
            Home
          </a>
          <a
            className="text-muted-foreground hover:text-foreground hover:text-blue-700"
            href="#"
          >
            About
          </a>
          <a
            className="text-muted-foreground hover:text-foreground hover:text-blue-700"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-muted-foreground hover:text-foreground hover:text-blue-700"
            href="#"
          >
            Contact
          </a>
        </nav>
        <div
          className="flex flex-col sm:flex-row sm:w-auto items-center gap-4 w-full sm:mt-0 mt-auto"
          id="signInContainer"
        >
          <a
            href="/signin"
            className="inline-flex h-9 items-center border justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 sm:w-36 w-full focus:ring-ring focus:ring-offset-2"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors sm:w-36 w-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Sign Up
          </a>
        </div>
      </div>
      <button
        className="h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors sm:w-36 w-full max-w-28 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hidden"
        id="signOutBtn"
      >
        Sign Out
      </button>
    </header>
  );
};

export default Header;
