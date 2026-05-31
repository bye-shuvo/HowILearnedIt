import React from "react";
import Sidebar from "./Sidebar";
import H1 from "../../utils/H1";
import Stats from "./Stats";
import Articles from "./Articles";

const Dashboard = () => {

  return (
    <div
      id="dashboard"
      className="bg-offset-white min-h-screen px-4 tablet-lg:px-[10vw] pt-5 tablet-lg:pt-10 flex justify-center gap-3 tablet-lg:gap-10"
    >
      <Sidebar />
      <main className="tablet-lg:p-5 flex flex-col tablet-lg:gap-3">
        <h1 className="text-3xl laptop-lg:text-4xl font-Quintessential">Hi, Admin!</h1>
        <p className="laptop-lg:text-lg tablet-lg:pb-10 pb-5">Welcome Back</p>
        <H1 heading="Overall Stats" />
        <Stats />
        <H1 heading="Recent Articles" />
        <Articles />
      </main>
    </div>
  );
};

export default Dashboard;
