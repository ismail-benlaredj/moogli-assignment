import { useState } from "react";
import {
  Database,
  LayoutGrid,
  Building2,
  Activity,
  Truck,
  Droplets,
  Cloud,
  BarChart2,
  FileText,
  Leaf,
  Shield,
  Image,
  Smartphone,
  Zap,
  Flame,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ScrollArea } from "./ui/scroll-area";
import { MoogliLogo } from "./icons";

import ProjectSwitcher from "./ProjectSwitcher";

import AppSideBarMenuItem from "@/components/AppSideBarMenuItem";

const data = [
  {
    groupName: "Home",
    groupItems: [
      {
        title: "Overview",
        url: "overview",
        icon: LayoutGrid,
        isCollapsible: false,
        isLocked: false,
      },
    ],
  },
  {
    groupName: "Company",
    groupItems: [
      {
        title: "Details",
        url: "details",
        icon: Building2,
        isCollapsible: false,
        isLocked: false,
      },
    ],
  },
  {
    groupName: "Measure",
    groupItems: [
      {
        title: "Scope 1",
        icon: Activity,
        isCollapsible: true,
        url: "scope-1",
        items: [
          {
            title: "Overview",
            url: "scope-1/overview",
            icon: LayoutGrid,
            isLocked: false,
          },
          {
            title: "Stationary Combustion",
            url: "scope-1/stationary-combustion",
            icon: Database,
            isLocked: false,
          },
          {
            title: "Mobile Combustion",
            url: "scope-1/mobile-combustion",
            icon: Truck,
            isLocked: false,
          },
          {
            title: "Fugitive Emissions",
            url: "scope-1/fugitive-emissions",
            icon: Droplets,
            isLocked: false,
          },
        ],
      },
      {
        title: "Scope 2",
        icon: Flame,
        isCollapsible: true,
        url: "scope-2",
        items: [
          {
            title: "Energy",
            url: "scope-2/energy",
            icon: Zap,
            isLocked: false,
          },
        ],
      },
      {
        title: "Scope 3",
        icon: Cloud,
        isCollapsible: false,
        isLocked: true,
        url: "scope-3",
      },
    ],
  },
  {
    groupName: "GHG Inventory",
    groupItems: [
      {
        title: "Results",
        url: "results",
        icon: BarChart2,
        isCollapsible: false,
        isLocked: false,
      },
      {
        title: "Reports",
        url: "reports",
        icon: FileText,
        isCollapsible: false,
        isLocked: false,
      },
    ],
  },
  {
    groupName: "Reduction Plans",
    groupItems: [
      {
        title: "Short term",
        url: "short-term",
        icon: FileText,
        isCollapsible: false,
        isLocked: true,
      },
      {
        title: "Long term",
        url: "long-term",
        icon: FileText,
        isCollapsible: false,
        isLocked: true,
      },
      {
        title: "Net Zero",
        url: "net-zero",
        icon: Leaf,
        isCollapsible: false,
        isLocked: true,
      },
      {
        title: "Mitigation",
        url: "mitigation",
        icon: Shield,
        isCollapsible: false,
        isLocked: true,
      },
    ],
  },
  {
    groupName: "Impact",
    groupItems: [
      {
        title: "Dashboard",
        url: "dashboard",
        icon: LayoutGrid,
        isCollapsible: false,
        isLocked: false,
      },
      {
        title: "Content Studio",
        url: "content-studio",
        icon: Image,
        isCollapsible: false,
        isLocked: false,
      },
      {
        title: "Campaigns",
        url: "campaigns",
        icon: Smartphone,
        isCollapsible: false,
        isLocked: false,
      },
      {
        title: "Analytics",
        url: "analytics",
        icon: Smartphone,
        isCollapsible: false,
        isLocked: false,
      },
    ],
  },
];

const AppSidebar = ({ ...props }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between h-16 pl-2">
              <MoogliLogo />
              <SidebarTrigger
                className={`${
                  !sidebarOpen ? "absolute -right-10" : ""
                } cursor-pointer`}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <ScrollArea className="h-[calc(100vh-4rem)] pl-3 pb-28 mt-2">
        <SidebarContent>
          <ProjectSwitcher />
          <SidebarGroup>
            <SidebarMenu>
              {data.map((group) => (
                <div key={group.groupName}>
                  <SidebarGroupLabel className="text-[10px] font-bold text-text-base pb-1 pt-2 uppercase">
                    {group.groupName}
                  </SidebarGroupLabel>
                  {group.groupItems.map((item) => (
                    <AppSideBarMenuItem key={item.title} item={item} />
                  ))}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </ScrollArea>
      <SidebarRail />
      <div className="flex items-center justify-start h-22 absolute bottom-0 w-full bg-white border-t border-border pl-2">
        <div className="flex items-center justify-center h-10 w-10 bg-border text-heading font-bold rounded-full text-l">
          JD
        </div>
        <div className="ml-4 flex flex-col justify-start">
          <p className="font-semibold text-text-heading w-fit">John Doe</p>
          <p className="text-sm text-text-base w-fit">john.doe@example.com</p>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
