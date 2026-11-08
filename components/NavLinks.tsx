'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/meetings", label: "Meetings" },
        { href: "/meetings/current", label: "Current Meeting" },
    ];

    return (
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {links.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (link.href === "/meetings" &&
                        pathname.startsWith("/meetings/") &&
                        pathname !== "/meetings/current");

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`hover:text-[#D8CDB8] transition-colors ${
                            isActive ? "active" : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}

//version 2.0 how to use the usePathname hook to determine the current path 
// and apply an active class to the corresponding link in a navigation menu. 
// The NavLinks component defines an array of links with their href and label, 
// and maps over them to create Link components. It checks if the current pathname 
// matches the link's href or if it starts with "/meetings/" (excluding "/meetings/current") 
// to determine if the link is active. If active, it applies the "active" class for styling.
