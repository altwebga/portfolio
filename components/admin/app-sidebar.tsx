"use client";
import * as React from "react";
import {
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Users,
  Newspaper,
  Image,
  Inbox,
} from "lucide-react";

import { NavAdmin } from "@/components/admin/nav-admin";
import { NavProjects } from "@/components/admin/nav-projects";
import { NavSecondary } from "@/components/admin/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { UserNav } from "../shared/user-nav";

const data = {
  navAdmin: [
    {
      title: "Посты",
      url: "/admin/posts",
      icon: Newspaper,
      isActive: true,
    },
    {
      title: "Изображения",
      url: "/admin/gallery",
      icon: Image,
    },
    {
      title: "Пользователи",
      url: "/admin/users",
      icon: Users,
    },
    {
      title: "Заказы",
      url: "/admin/orders",
      icon: Inbox,
    },
  ],
  navSecondary: [
    {
      title: "Поддержка",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Обратная связь",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarContent>
        <NavAdmin items={data.navAdmin} />
        <NavProjects />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <UserNav className="w-full justify-start" />
      </SidebarFooter>
    </Sidebar>
  );
}
