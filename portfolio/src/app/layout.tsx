import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation.component";
import { Hero } from "@/components/hero/hero.components";
import { Footer } from "@/components/footer/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "As a passionate software developer with expertise in web development and robotics, I created this personal portfolio to showcase my skills, projects, and professional journey. This space is designed to highlight my technical abilities, creativity, and commitment to continuous learning and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        
        <Navigation/>
        
        {children}

        <Footer/>
      </body>
    </html>
  );
}
