import Link from "next/link";
import { NavLinksType } from "@/lib/data/navbar";

type Props = {
  links: NavLinksType;
  activeSection: string;
};

const NavLinks = (props: Props) => {
  return (
    <>
      {props.links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            `#${props.activeSection}` === link.href ? "text-accent" : ""
          }
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
