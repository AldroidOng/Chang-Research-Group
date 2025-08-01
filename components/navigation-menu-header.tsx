"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@lib/utils";
// import { Icons } from "@components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu";

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/research" className={navigationMenuTriggerStyle()}>
              Research
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/members" className={navigationMenuTriggerStyle()}>
              Members
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/publication" className={navigationMenuTriggerStyle()}>
              Publication
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/news" className={navigationMenuTriggerStyle()}>
              News
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
