"use client"
import { bg } from 'date-fns/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href,children,className}) => {
    const pathname = usePathname();
    // console.log("pathname",pathname)
const isActive = href === pathname;
    return <Link href={href} className={`${isActive ? 'bg-blue-700 p-2 rounded text-white':""} ${className}`}>{children}</Link>
};

export default NavLink;