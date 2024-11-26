"use client"; // This makes the component a client component

import { useRouter, usePathname } from 'next/navigation';
import { Navbar } from "@/components/Navbar";

const NoNavbar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  console.log(currentPath);
  if (currentPath === '/login') {
    return null; // Do not render NavBar on the login page
  }

  return <Navbar />;
};

export default NoNavbar;