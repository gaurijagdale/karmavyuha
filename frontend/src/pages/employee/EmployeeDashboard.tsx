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
              <Link to="" className="text-xl font-medium">
                Project A
              </Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
            <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
              <Link to="" className="text-xl font-medium">
                Project B
              </Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
            <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
              <Link to="" className="text-xl font-medium">
                Project C
              </Link>
              <h2 className="text-base text-zinc-200">75% Complete</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-gray-900 h-96 p-7">
            <h1 className="text-3xl font-semibold">Upcoming Projects</h1>
          </div>
          <div className="col-span-1 p-7 bg-gray-900 h-96 space-y-3">
            <h1 className="text-3xl font-semibold">To Do</h1>
            <div className="text-black space-y-3 h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-transparent">
              <ol className="space-y-4 w-72">
                <li>
                  <div
                    className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">User info</span>
                      <h3 className="font-medium">1. User info</h3>
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Account info</span>
                      <h3 className="font-medium">2. Account info</h3>
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Social accounts</span>
                      <h3 className="font-medium">3. Social accounts</h3>
                      <svg
                        className="rtl:rotate-180 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Review</span>
                      <h3 className="font-medium">4. Review</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Confirmation</span>
                      <h3 className="font-medium">5. Confirmation</h3>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
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
