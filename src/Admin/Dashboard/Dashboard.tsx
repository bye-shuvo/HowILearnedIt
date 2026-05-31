import React from "react";
import Sidebar from "./Sidebar";
import H1 from "../../utils/H1";
import Stats from "./Stats";
import Articles from "./Articles";

const Dashboard = () => {

  return (
    <div
      id="dashboard"
      className="bg-offset-white min-h-screen tablet-lg:px-[10vw] tablet-lg:pt-10 flex justify-center tablet-lg:gap-10"
    >
      <Sidebar />
      <main className="tablet-lg:p-5 flex flex-col tablet-lg:gap-3">
        <h1 className="laptop-lg:text-4xl font-Quintessential">Hi, Admin!</h1>
        <p className="laptop-lg:text-lg tablet-lg:pb-10">Welcome Back</p>
        <H1 heading="Overall Stats" />
        <Stats />
        <H1 heading="Recent Articles" />
        <Articles />
      </main>
    </div>
  );
};

export default Dashboard;
