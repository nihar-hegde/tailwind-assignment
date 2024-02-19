import LeftSidebar from "@/components/LeftSidebar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-gradient-to-br from-custom-dark-green1 via-custom-dark-gray-via to-custom-dark-gray-end relative ">
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col  pb-6 pt-10 max-md:pb-14 sm:px-14">
          <div className="">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
