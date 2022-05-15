import { LayoutProps } from "@/interfaces";
import { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4">
        <Navbar />
        <main className="my-4">{children}</main>
      </section>
      <Footer />
    </>
  );
};

export default Layout;