/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lock, LockKeyhole } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocation } from "react-router";
import { NavLink } from "react-router";

const AppSideBarMenuItem = ({ item }: { item: any }) => {
  const location = useLocation();
  if (!item.isCollapsible) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          disabled={item.isLocked}
          isActive={location.pathname === "/" + item.url}
          className={
            item.isLocked
              ? "opacity-70 hover:bg-transparent cursor-not-allowed"
              : ""
          }
        >
          <NavLink to={item.url} className="font-medium text-text-base">
            <span className="mr-1">
              {<item.icon className="size-4 text-text-base" />}
            </span>
            <div className="w-full flex items-center justify-between">
              {item.title}
              {item.isLocked && <LockKeyhole className="size-3 ml-2" />}
            </div>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value={item.title} className="border-none">
          <AccordionTrigger className="py-2 px-1 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md">
            <div className="flex items-center">
              <span className="mr-4">
                {<item.icon className="size-4 text-text-base" />}
              </span>
              <span className="font-medium text-text-base">{item.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {item.items?.length ? (
              <SidebarMenuSub>
                {item.items.map((subItem: any) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <div className="relative flex w-full items-center">
                      <SidebarMenuSubButton
                        asChild
                        isActive={subItem.isActive}
                        className={subItem.isLocked ? "opacity-20" : ""}
                      >
                        <NavLink
                          to={subItem.isLocked ? undefined : subItem.url}
                          className="flex items-center justify-start w-full text-text-base"
                          aria-disabled={subItem.isLocked}
                        >
                          <span className="mr-2">
                            {<subItem.icon className="size-4" />}
                          </span>
                          <p className="text-left max-w-[130px] truncate text-ellipsis whitespace-nowrap">
                            {subItem.title}
                          </p>
                        </NavLink>
                      </SidebarMenuSubButton>
                      {subItem.isLocked && (
                        <Lock className="absolute right-2 h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SidebarMenuItem>
  );
};

export default AppSideBarMenuItem;
