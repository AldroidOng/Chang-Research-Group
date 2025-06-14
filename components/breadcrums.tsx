"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
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
    <div className="mx-auto px-6 pt-6">
      <Breadcrumb>
        <BreadcrumbList>
          {pathnames.map((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isFrist = index === 0;
            const isLast = index === pathnames.length - 1;
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
    </div>
  );
};

export default Breadcrumbs;
