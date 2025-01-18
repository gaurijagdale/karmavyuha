import React from "react";
import TextGen from "@/components/TextGen";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification";

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
        <div className="h-96 p-5 bg-gray-900 rounded-xl space-y-3">
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <div className="text-black space-y-3 h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-transparent">
            <Notification 
              name="Sample Notification" 
              description="This is a sample notification" 
              icon="info" 
              color="green" 
              time="10:00 AM" 
            />
            <Notification 
                name="Another Notification" 
                description="This is another sample notification" 
                icon="alert" 
                color="red" 
                time="11:00 AM" 
            />
            <Notification 
                name="Another Notification" 
                description="This is another sample notification" 
                icon="alert" 
                color="red" 
                time="11:00 AM" 
            />
            <Notification 
                name="Another Notification" 
                description="This is another sample notification" 
                icon="alert" 
                color="red" 
                time="11:00 AM" 
            />
            <Notification 
                name="Another Notification" 
                description="This is another sample notification" 
                icon="alert" 
                color="red" 
                time="11:00 AM" 
            />
            </div>
        </div>
        <TextGen />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
