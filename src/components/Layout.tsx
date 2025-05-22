import AppSidebar from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex justify-start">
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
