import "./globals.css";

import MainHeader from "@/components/mainHeader";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
        <MainHeader />
        {children}
        </div>
      </body>
    </html>
  );
}
