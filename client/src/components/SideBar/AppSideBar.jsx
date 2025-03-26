import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Calendar,
  Home,
  Loader,
  Power,
  Sprout,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import getNickName from "@/Utils/getNickName";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLogoutUser } from "@/hooks/use-user";
import { setUser } from "@/Redux/Slices/authSlice";

const AppSideBar = () => {
  // const [logout, setLogout] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const sideBarLinks = [
    { title: "Home", icon: <Home size={22} />, path: "/" },
    {
      title: "Crop Recomendation",
      icon: <Calendar size={22} />,
      path: "/crop-recomendation",
    },
    {
      title: "Disease Detection",
      icon: <Calendar size={22} />,
      path: "/disease-detection",
    },
    { title: "Calendar", icon: <Calendar size={22} />, path: "/calender" },
    // { title: "Calender", icon: <Calendar size={22} />, path: "/calender" },
  ];
  const { pathname } = useLocation();
  // const { isLoading, isSuccess, isError } = useLogoutUser();
  const mutation = useLogoutUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isSuccess) {
  //     setLogout(false);
  //     dispatch(setUser(null));
  //     navigate("/login");
  //   }
  // }, [isError, isSuccess]);
  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem title="Home">
            <SidebarMenuButton className="h-full pointer-events-none">
              <div>
                <Sprout size={30} className="text-primary" />
              </div>
              <div className="p-2 pl-3 rounded-lg whitespace-nowrap">
                <h1 className="text-2xl font-semibold">CropMind</h1>
                <p className="">Farmer Friend</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <SidebarGroup title="Main">
            <SidebarGroupLabel>Links</SidebarGroupLabel>
            <SidebarMenu>
              {sideBarLinks.map((link, index) => {
                return (
                  <SidebarMenuItem title={link.title} key={index}>
                    <SidebarMenuButton
                      className={`py-5 text-[1.2rem] ${
                        pathname === link.path ? "bg-primary/80 text-black" : ""
                      } hover:bg-primary-foreground active:bg-primary-foreground`}
                      // isActive={pathname === link.path ? "true" : "false"}
                      // isActive={pathname === link.path ? "true" : "false"}
                      // onClick={() => setOpenMobile(false)}
                      asChild
                    >
                      <Link to={link.path} className="text-2xl flex">
                        <span>{link.icon}</span> <span>{link.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="border border-primary rounded-lg">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="p-2 flex gap-4">
                  <Avatar className={"h-10 w-10"}>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{getNickName(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-semibold capitalize">{user.name}</p>
                    <p className="text-foreground/50">{user.email}</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className={`${
                    mutation.isPending ? "pointer-events-none cursor-none" : ""
                  }`}
                  onClick={handleLogout}
                >
                  {mutation.isPending ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <>
                      <Power /> LogOut
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
