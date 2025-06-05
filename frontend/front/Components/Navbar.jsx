// frontend/front/src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, User } from "lucide-react";
import ThemeToggle from "../Components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg py-2 shadow-md glass"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 py-2 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to = '/'
            className="nav-name text-2xl font-bold interactive whitespace-nowrap text-start">
            MakeYourResume
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center align-center space-x-4">
            
              <Link
              to = '/'
                asChild
                variant="ghost"
                className="interactive whitespace-nowrap">
                Home
              </Link>

              <Link
                to = '/resumecreator'
                asChild
                variant="ghost"
                className="interactive whitespace-nowrap">
                Build Resume
              </Link>

              <Link
                to = '/resumepreview'
                asChild
                variant="ghost"
                className="interactive whitespace-nowrap">
                Resume Preview
              </Link>

              <Link
                to = '/about'
                asChild
                variant="ghost"
                className="interactive whitespace-nowrap">
                About
              </Link>

              <Link
                to = 'contact'
                asChild
                variant="ghost"
                className="interactive whitespace-nowrap">
                Experience
              </Link>
            
            <ThemeToggle className="ml-2" />

            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <button variant="ghost" className="flex items-center gap-1">
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="primary-button flex">
                  <User className="w-4 h-4" />
                  Register
                </button>
              </Link>
            </div>  

          </div>

          {/* Mobile Hamburger button */}
          <button
            variant="ghost"
            size="icon"
            className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-full bg-background/95 backdrop-blur-lg border-l border-[rgba(168,85,247,0.2)] md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ display: isOpen ? "block" : "none" }} // Ensure proper display toggle
      >
        <div className="container mx-auto px-4 max-w-4xl h-full flex flex-col">
          {/* Close button */}
          <div className="flex justify-end pt-4">
            <button
              variant="ghost"
              size="icon"
              className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <motion.div
            className="flex flex-col items-center justify-center flex-grow space-y-6"
            variants={containerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}>
            
              <motion.div variants={itemVariants}>
                <Link
                  to = '/'
                  asChild
                  variant="ghost"
                  className="interactive">
                  Home
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to = '/about'
                  asChild
                  variant="ghost"
                  className="interactive">
                  About
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to = '/resumecreator'
                  asChild
                  variant="ghost"
                  className="interactive">
                  Build Resume
                </Link>
              </motion.div>
        
              <motion.div variants={itemVariants}>
                <Link
                  to = '/resumepreview'
                  asChild
                  variant="ghost"
                  className="interactive">
                  Resume Preview
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to = 'contact'
                  asChild
                  variant="ghost"
                  className="interactive">
                  Contact
                </Link>
              </motion.div>
            
            <motion.div variants={itemVariants}>
              <ThemeToggle className="mt-4" />
            </motion.div>

              <div className="border-t border-gray-100 pt-3 flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="px-4 py-2 flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Login
                </Link>
                <Link
                  to="/register"
                  className="primary-button mx-4 flex items-center justify-center gap-2">
                  <User className="w-4 h-4" /> Register
                </Link>
              </div>

          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

// Variants for container (stagger children)
const containerVariants = {
  closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.1 } },
};

export default Navbar;