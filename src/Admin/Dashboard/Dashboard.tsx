import Sidebar from "./Sidebar";
import H1 from "../../utils/H1";
import Stats from "./Stats";
import Articles from "./Articles";
import { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1280) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="dashboard"
      className="bg-offset-white min-h-screen px-4 tablet-lg:px-[20vw] pt-5 tablet-lg:pt-15 flex flex-col tablet-lg:flex-row items-start justify-center gap-10 tablet-lg:gap-10"
    >{
      isMobile ? <MobileSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> : <Sidebar />
    }
    {
      !isSidebarOpen &&
      <main className="w-full flex flex-col tablet-lg:gap-3">
        <h1 className="text-4xl laptop-lg:text-5xl font-Quintessential">
          Hi, Admin!
        </h1>
        <p className="laptop-lg:text-lg tablet-lg:pb-10 pb-5">Welcome Back</p>
        <H1 heading="Overall Stats" />
        <Stats />
        <H1 heading="Recent Articles" />
        <Articles />
      </main>
    }
    </div>
  );
};

export default Dashboard;
