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
  GitGraph,
  LayoutDashboard,
  Loader,
  Mail,
  MailOpen,
  MessageCircle,
  Package,
  Power,
  Trees,
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
    { title: "Dashboard", icon: <LayoutDashboard size={22} />, path: "/" },
    {
      title: "Crop Recomendation",
      icon: <Calendar size={22} />,
      path: "/crop-recomendation",
    },
    {
      title: "Disease Prediction",
      icon: <Calendar size={22} />,
      path: "/disease-prediction",
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffff"
                  version="1.1"
                  id="Capa_1"
                  width="50px"
                  height="50px"
                  viewBox="0 0 94.273 94.273"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path d="M81.82,32.214c2.854-8.607,0.445-14.417-7.569-18.286c-2.125-1.023-4.113-2.913-4.956-4.706    C65.312,0.669,59.61-1.785,50.767,1.281c-2.087,0.726-4.873,0.708-6.926-0.017c-8.776-3.088-14.873-0.532-18.644,7.818    c-0.847,1.882-2.648,3.778-4.277,4.511c-9.358,4.184-11.649,9.814-7.914,19.431c0.582,1.499,0.512,3.833-0.157,5.551    c-3.511,8.897-1.041,15.205,7.556,19.273c1.814,0.855,3.749,2.865,4.702,4.881c3.441,7.34,8.768,10.044,16.294,8.264    c0.669-0.157,1.371-0.212,2.096-0.273c0.381-0.034,0.782-0.064,1.177-0.109l-0.308-2.748c-0.375,0.037-0.739,0.068-1.1,0.096    c-0.869,0.075-1.697,0.15-2.5,0.346c-6.304,1.485-10.239-0.534-13.155-6.756c-1.241-2.628-3.605-5.061-6.03-6.204    c-7.31-3.463-9.151-8.172-6.162-15.752c0.933-2.384,1-5.421,0.166-7.573c-3.176-8.179-1.487-12.339,6.461-15.896    c2.26-1.009,4.538-3.384,5.674-5.903c3.196-7.077,7.741-8.979,15.195-6.343c2.648,0.934,6.083,0.939,8.756,0.021    c7.381-2.568,11.769-0.683,15.115,6.494c1.102,2.365,3.562,4.734,6.256,6.03c6.7,3.232,8.538,7.696,6.139,14.922    c-0.924,2.806-0.917,6.353,0.014,9.255c2.279,7.047,0.309,11.629-6.398,14.849c-3.266,1.561-5.572,5.075-6.414,6.517    c-2.244,3.87-4.373,6.827-9.5,6.875l0.024,2.769c6.57-0.062,9.462-4.11,11.875-8.248c1.499-2.573,3.401-4.548,5.216-5.417    c7.99-3.847,10.554-9.798,7.833-18.195C81.087,37.414,81.081,34.458,81.82,32.214z" />
                      <path d="M53.963,81.769c-0.581,0.511-1.656-0.499-3.956,0.069c10.089-22.269,6.653-34.985-7.289-54.088    c2.635,8.42,7.522,18.514,7.522,27.155c-0.209,2.525-12.979-7.095-18.981-11.011c3.614,6.23,8.379,10.508,14.455,12.996    c3.621,1.485,4.554,3.553,3.785,7.013c-0.926,4.109-1.528,8.318-2.766,12.322c-1.478,4.75-4.38,7.505-10.052,7.602    c-5.106,0.082-10.923-0.332-15.564,6.262c5.558,1.362,10.335,3.073,15.237,3.614c5.901,0.65,11.937,0.753,17.858,0.267    c5.66-0.472,11.245-1.943,16.81-3.237c0.254-0.064,0.479-3.456-0.229-3.966C65.126,82.748,59.473,76.906,53.963,81.769z" />
                    </g>
                  </g>
                </svg> */}
                <Trees size={30} className="text-white" />
              </div>
              <div className="p-2 pl-3 rounded-lg whitespace-nowrap text-white">
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
            <SidebarGroupLabel className={"text-white"}>Links</SidebarGroupLabel>
            <SidebarMenu>
              {sideBarLinks.map((link, index) => {
                return (
                  <SidebarMenuItem title={link.title} key={index}>
                    <SidebarMenuButton
                      className={`py-5 text-[1.2rem] text-white ${
                        pathname === link.path ? "bg-primary-foreground text-black" : ""
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
          <SidebarMenuItem className="border border-border rounded-lg bg-primary-foreground">
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
