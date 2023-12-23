"use client";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

const products = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
  // {
  //     name: "Contact our Support Team",
  //     description:"Get a better understanding of your traffic",
  //     href:"#",
  //     icon:ChatBu
  // },
];
const callsToAction = [
  {
    name: "Call",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Adress",
    href: "#",
    icon: HomeIcon,
  },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#013894]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"}>
            <h1 className="text-xl font-bold text-white">Booking.com</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <span className="sr-only">Open mobile menu</span>
          <button
            className="-m-2.5 inline-flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Bars3Icon className="h-6 w-6 cursor-pointer" area-hidden="true" />
          </button>
        </div>
        <Popover.Group className={"hidden lg:flex lg:gap-x-12"}>
          <Popover className={"relative"}>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg right-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <product.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          area-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={product.href}>
                          {product.name}
                          <span className="absolute inset-"></span>
                          <p className="mt-1 text-[#013B94]">
                            {product.description}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013B94]"
                        area-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {["Flights", "Car Rentals", "Attractions", "Flight + Hotel"].map(
            (item) => (
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
                key={item}
              >
                {item}
              </a>
            )
          )}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-e">
            <a href="#" className="text-sm font-semibold leading-6 text-white">

            </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className={"lg:hidden"}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 w-full">
          <Dialog.Panel className="fixed inset-y-0 overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1 5 p-1 5">
                    <span className="sr-only">Your Company</span>
                    <img src="" className="h-0 w-auto" alt="" />
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={()=> setMobileMenuOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" area-hidden="true"/>
                </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
