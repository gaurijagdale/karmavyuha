import React from "react";
import TextGen from "@/components/TextGen";
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div className="w-full grid grid-cols-3 p-10 h-screen gap-4">
      <div aria-label="left" className="flex flex-col col-span-2 gap-4">
        <div className="h-96 p-7 bg-gray-900 rounded-xl space-y-10">
          <h1 className="text-3xl font-semibold">Current Projects</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Link to="" className="text-xl font-medium">Project A</Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
            <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
              <Link to="" className="text-xl font-medium">Project B</Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
            <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
              <Link to="" className="text-xl font-medium">Project C</Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-gray-900 h-96">Upcoming Projects</div>
          <div className="col-span-1 bg-gray-900 h-96">Todo List</div>
        </div>
      </div>

      <div aria-label="right" className="col-span-1 flex flex-col gap-4">
        <div className="h-96 bg-gray-900 rounded-xl">Notifications</div>
        <TextGen />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
