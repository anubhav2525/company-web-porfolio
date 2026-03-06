"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbConfig {
  [key: string]: string;
}

const DEFAULT_BREADCRUMB_CONFIG: BreadcrumbConfig = {
  dashboard: "Dashboard",
  settings: "Settings",
  profile: "Profile",
  users: "Users",
  analytics: "Analytics",
  reports: "Reports",
  account: "Account",
  billing: "Billing",
  security: "Security",
  // Add more mappings as needed
};

const DynamicBreadcrumb = ({
  config = {},
}: {
  config?: BreadcrumbConfig;
} = {}) => {
  const pathname = usePathname();

  // Merge custom config with defaults
  const breadcrumbConfig = { ...DEFAULT_BREADCRUMB_CONFIG, ...config };

  // Split pathname into segments and filter out empty strings
  const segments = pathname
    .split("/")
    .filter((segment) => segment && segment !== "protected");

  // Generate breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Convert URL slug to readable text
    const label = breadcrumbConfig[segment] || formatLabel(segment);
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      label,
      href,
      isLast: index === segments.length - 1,
    };
  });

  // If no segments, show a default home breadcrumb
  if (breadcrumbItems.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center gap-1.5">
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

// Helper function to convert URL slugs to readable labels
function formatLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default DynamicBreadcrumb;
