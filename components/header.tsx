// app/components/Header.tsx
"use client";

import { NavigationMenuDemo } from "@/components/navigation-menu"; // Adjust the path as needed

export default function Header() {
  return (
    <header className="w-full border-b px-4 py-2">
      <NavigationMenuDemo />
    </header>
  );
}
