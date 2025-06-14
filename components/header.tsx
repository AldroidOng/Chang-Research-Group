// app/components/Header.tsx
"use client";

import { NavigationMenuHeader } from "@/components/navigation-menu-header"; // Adjust the path as needed

export default function Header() {
  return (
    <header className="w-full border-b px-4 py-2">
      <NavigationMenuHeader />
    </header>
  );
}
