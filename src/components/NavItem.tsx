import Link from "next/link"

import header from "@/styles/header.module.css"

export default function NavItem({children, link}) {
    return(
        <h2><Link className={header.menuItem} href="link">{children}</Link></h2>
    )
}