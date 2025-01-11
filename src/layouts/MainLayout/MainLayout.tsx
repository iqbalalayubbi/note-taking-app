import { Navbar } from "@/components";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <section className="mt-44">
        <Outlet />
      </section>
    </main>
  );
};

export { MainLayout };
