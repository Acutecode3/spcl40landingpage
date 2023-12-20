import "@/sass/_reset.sass";
import "@/sass/_globals.sass";
import "@/sass/_utilities.sass";
import Fonts from "@/lib/Fonts";
import { ChildrenProps } from "@/types/common.types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special 40 - Curated for corporates.",
  description: "Elevate your Finance Career with Special 40's Ascent.",
};

export default function RootLayout(props: ChildrenProps) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <Fonts />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>
        {props.children}
      </body>
    </html>
  );
}
