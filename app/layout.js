import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meeting  scheduling  application",
  description: "Schedulrr is a user-friendly meeting scheduling application that allows individuals and professionals to easily create events, manage their availability, and let others book meetings through a personalized link. It eliminates the back-and-forth of scheduling by automatically displaying available slots, handling time zones, and sending confirmations. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by All In One</p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
