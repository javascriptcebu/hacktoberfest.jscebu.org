import "../global.css";

import { Analytics } from "./components/analytics";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hacktoberfest Cebu 2025 | Build. Contribute. Win.",
    template: "%s | Hacktoberfest Cebu 2025",
  },
  description:
    "Join 100+ developers for Cebu's biggest open source celebration. October 5-26, 2025. 20-day hackathon, workshops from 10+ partner communities, exclusive swag, and prizes.",
  keywords: [
    "Hacktoberfest",
    "Hacktoberfest Cebu",
    "Open Source",
    "Cebu Tech Community",
    "JavaScript Cebu",
    "PizzaPy Cebu",
    "Hackathon",
    "Tech Events Cebu",
    "Developer Community",
    "Philippines Tech",
  ],
  authors: [
    { name: "JavaScript Cebu", url: "https://jscebu.org" },
    { name: "PizzaPy Cebu", url: "https://pizzapy.ph" },
  ],
  creator: "JavaScript Cebu",
  publisher: "JavaScript Cebu",
  openGraph: {
    title: "Hacktoberfest Cebu 2025 | Build. Contribute. Win.",
    description:
      "Join 100+ developers for Cebu's biggest open source celebration. October 5-26, 2025. 20-day hackathon, workshops, exclusive swag, and prizes.",
    url: "https://hacktoberfest.jscebu.org",
    siteName: "Hacktoberfest Cebu 2025",
    images: [
      {
        url: "https://hacktoberfest.jscebu.org/og.png",
        width: 1920,
        height: 1080,
        alt: "Hacktoberfest Cebu 2025 - October 5-26, 2025",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hacktoberfest Cebu 2025 | Build. Contribute. Win.",
    description:
      "Join 100+ developers for Cebu's biggest open source celebration. October 5-26, 2025.",
    card: "summary_large_image",
    site: "@jscebu",
    creator: "@jscebu",
    images: ["https://hacktoberfest.jscebu.org/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://hacktoberfest.jscebu.org"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
  weight: "600",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Hacktoberfest Cebu 2025",
              description:
                "Join 100+ developers for Cebu's biggest open source celebration. 20-day hackathon, workshops from 15+ partner communities, exclusive swag, and prizes.",
              startDate: "2025-10-05",
              endDate: "2025-10-26",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/MixedEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Cebu, Philippines",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cebu City",
                  addressRegion: "Cebu",
                  addressCountry: "PH",
                },
              },
              organizer: [
                {
                  "@type": "Organization",
                  name: "JavaScript Cebu",
                  url: "https://jscebu.org",
                },
                {
                  "@type": "Organization",
                  name: "PizzaPy Cebu",
                  url: "https://pizzapy.ph",
                },
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PHP",
                availability: "https://schema.org/InStock",
                url: "https://hacktoberfest.jscebu.org",
              },
              image: "https://hacktoberfest.jscebu.org/og.png",
              url: "https://hacktoberfest.jscebu.org",
            }),
          }}
        />
      </head>
      <body
        className={`bg-void ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
