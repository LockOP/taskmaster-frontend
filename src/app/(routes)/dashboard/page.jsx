"use client";

import { Sidebar } from "@/app/components/sidebar";
import LogoutComponent from "../../(auth)/logout/page";

LogoutComponent;

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div>Dashboard</div>
        <LogoutComponent />
      </div>
      <Sidebar />
    </>
  );
}
