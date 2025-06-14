"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Optional: map paths to nicer display labels
const labelMap: Record<string, string> = {
  infrastructure: "Infrastructure",
  team: "Team",
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log(pathnames);
          console.log(href);
          const isFrist = index === 0;
          console.log(isFrist);
          const isLast = index === pathnames.length - 1;
          console.log(isLast);
          const label = labelMap[value] || decodeURIComponent(value);

          return (
            <div key={href} className="flex items-center">
              {!isFrist ? <BreadcrumbSeparator /> : undefined}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="text-blue-600 capitalize">
                      {label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
