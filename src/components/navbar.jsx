import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiChevronDown, FiMenu } from "react-icons/fi"; // Menu icon
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 bg-white shadow-md p-4 z-50">
      <div className="w-11/12 max-w-7xl flex justify-between items-center mx-auto">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[100px] h-[40px]" />

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
                <Button variant="ghost" className="hover:cursor-pointer">
                  Home
                </Button>
                <Button variant="ghost" className="hover:cursor-pointer">
                  Committee
                </Button>

                {/* Contributing Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      Contributing <FiChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Important Dates
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Call for Papers
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Publication
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Submission Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      Submission <FiChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Paper Submission
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Camera Ready Submission
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" className="hover:cursor-pointer">
                  Registration
                </Button>
                <Button variant="ghost" className="hover:cursor-pointer">
                  Contact
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[20px]">
          <Button variant="ghost" className="hover:cursor-pointer">
            Home
          </Button>
          <Button variant="ghost" className="hover:cursor-pointer">
            Committee
          </Button>

          {/* Contributing Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Contributing <FiChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem className="hover:cursor-pointer">
                Important Dates
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                Call for Papers
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                Publication
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Submission Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Submission <FiChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem className="hover:cursor-pointer">
                Paper Submission
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                Camera Ready Submission
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="hover:cursor-pointer">
            Registration
          </Button>
          <Button variant="ghost" className="hover:cursor-pointer">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
