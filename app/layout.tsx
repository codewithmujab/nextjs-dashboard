import "@/app/ui/global.css"; //tambahkan untuk meload global.css
import { inter } from "@/app/ui/fonts"; // load font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
