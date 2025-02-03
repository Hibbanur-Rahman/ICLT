import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo1.png";
import manuuLogo from "../assets/images/manuu-logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (sectionId) => activeSection === sectionId;

  useEffect(() => {
    const handleScroll = () => {
      const upperNav = document.getElementById("upper-nav");
      const threshold = upperNav ? upperNav.offsetHeight : 0;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [
      "home",
      "about-manuu",
      "about-iclt",
      "about-manuu-law",
      "call-for-paper",
      "committee",
      "paper-submission",
      "important-dates",
      "registration-details",
      "contact",
    ];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      {/**====== upper part ====== */}
      <div
        id="upper-nav"
        className="w-full flex justify-center items-center border border-x-0 border-t-0"
      >
        <div className="md:w-10/12 w-full flex md:flex-row flex-col md:justify-between items-center py-3">
          <div className="flex items-center">
            <img src={manuuLogo} alt="" className="md:w-[100px] w-[60px]" />
            <div className="h-[50px] w-[1px] bg-black mx-3"></div>
            <h1 className="font-medium md:text-lg text-sm">
              INTERNATIONAL CONFERENCE ON LAW AND TECHNOLOGY
            </h1>
          </div>
          <div className="rounded-2xl shadow-sm p-3 w-[250px] flex flex-col items-center border md:my-0 my-2">
            <p className="text-sm font-medium my-1">Conference Date</p>
            <p className="text-sm font-medium my-1">25th Feb 2025</p>
            <div className="rounded-xl p-2 w-full bg-blue-800 text-white font-medium flex items-center justify-center mt-2">
              HYBRID MODE
            </div>
          </div>
          <div className="md:flex hidden items-center">
            <div className="h-[50px] w-[1px] bg-black mx-3"></div>
            <img src={logo} alt="" className="w-[100px]" />
          </div>
        </div>
      </div>

      {/**====== main navbar ========= */}
      <div
        className={`w-full bg-white shadow-md p-4 py-0 z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="w-11/12 max-w-7xl flex justify-between items-center mx-auto">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-[100px] h-[80px]" />

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="ghost" onClick={() => setIsDrawerOpen(true)}>
                  <FiMenu size={24} />
                </Button>
              </DrawerTrigger>
              <DrawerContent
                className="w-64 p-4 bg-white shadow-lg m-0 h-full"
                onClose={() => setIsDrawerOpen(false)}
              >
                {/* Drawer Content */}
                <div className="flex flex-col gap-4">
                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("home") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1"
                      >
                        About <FiChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem
                        className={`hover:cursor-pointer ${
                          isActive("about-manuu") ? "text-blue-600" : ""
                        }`}
                        onClick={() => scrollToSection("about-manuu")}
                      >
                        MANUU
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`hover:cursor-pointer ${
                          isActive("about-iclt") ? "text-blue-600" : ""
                        }`}
                        onClick={() => scrollToSection("about-iclt")}
                      >
                        ICLT
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`hover:cursor-pointer ${
                          isActive("about-manuu-law") ? "text-blue-600" : ""
                        }`}
                        onClick={() => scrollToSection("about-manuu-law")}
                      >
                        MANUU LAW School
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("committee") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("committee")}
                  >
                    Committee
                  </Button>
                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("important-dates") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("important-dates")}
                  >
                    Important Dates
                  </Button>
                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("paper-submission") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("paper-submission")}
                  >
                    Paper Submission
                  </Button>

                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("registration-details") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("registration-details")}
                  >
                    Registration
                  </Button>
                  <Button
                    variant="ghost"
                    className={`hover:cursor-pointer ${
                      isActive("contact") ? "text-blue-600" : ""
                    }`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-[20px]">
            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("home") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  About <FiChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem
                  className={`hover:cursor-pointer ${
                    isActive("about-manuu") ? "text-blue-600" : ""
                  }`}
                  onClick={() => scrollToSection("about-manuu")}
                >
                  MANUU
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`hover:cursor-pointer ${
                    isActive("about-iclt") ? "text-blue-600" : ""
                  }`}
                  onClick={() => scrollToSection("about-iclt")}
                >
                  ICLT
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`hover:cursor-pointer ${
                    isActive("about-manuu-law") ? "text-blue-600" : ""
                  }`}
                  onClick={() => scrollToSection("about-manuu-law")}
                >
                  MANUU LAW School
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("committee") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("committee")}
            >
              Committee
            </Button>
            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("important-dates") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("important-dates")}
            >
              Important Dates
            </Button>
            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("paper-submission") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("paper-submission")}
            >
              Paper Submission
            </Button>

            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("registration-details") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("registration-details")}
            >
              Registration
            </Button>
            <Button
              variant="ghost"
              className={`hover:cursor-pointer ${
                isActive("contact") ? "text-blue-600" : ""
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;