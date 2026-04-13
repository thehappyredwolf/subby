import "./globals.css";
import "./fanta.css";
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Subby · The Subscription Tracker",
  description: "Track all your subscription analytics!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={"/"}>
          <h1 className="text-gradient">Subby</h1>
        </Link>
        <p>The Subscription Tracker</p>
      </div>
      <GoTo />
    </header>
  );

  const footer = (
    <footer style={{ textAlign: "center" }}>
      <p>Created with ❤️ by Abdelrahman Elsayed</p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body>
          {header}
          <div className="full-line" />
          <main>{children}</main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
