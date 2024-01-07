import "@/sass/_reset.sass";
import "@/sass/_globals.sass";
import "@/sass/_utilities.sass";
import Fonts from "@/lib/Fonts";
import { ChildrenProps } from "@/types/common.types";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ActiveNavbarProvider from "@/contexts/ActiveNavbarContext";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Special 40 - Curated for corporates.",
  description: "Elevate your Finance Career with Special 40's Ascent.",
};

export default function RootLayout(props: ChildrenProps) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <Fonts />
        <Script
          id="fb-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
              `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"
              />
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>
        <Toaster position="top-right" reverseOrder={false} />
        <ActiveNavbarProvider>{props.children}</ActiveNavbarProvider>
      </body>
    </html>
  );
}
