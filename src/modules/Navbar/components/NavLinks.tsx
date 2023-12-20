import Link from "next/link";
import { NavLinksType } from "@/lib/data/navbar";

type Props = {
  links: NavLinksType;
};

const NavLinks = (props: Props) => {
  return (
    <>
      {props.links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
