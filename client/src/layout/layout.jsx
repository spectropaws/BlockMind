import AppSideBar from "@/components/SideBar/AppSideBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Sprout } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <div className="fixed top-0 flex w-full justify-between px-2 py-2 bg-white">
          <div className="flex gap-2 md:hidden text-primary">
            <Sprout size={40} />
            <h1 className="text-3xl font-semibold">CropMind</h1>
          </div>
          <SidebarTrigger />
        </div>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
