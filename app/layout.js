import "./globals.css";

export const metadata = {
  title: "Mow & Shine",
  description:
    "Professional cleaning and lawn care services for Wellington region",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
