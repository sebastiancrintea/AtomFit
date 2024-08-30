import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EditProfileForm } from "./edit-profile-form";

export function EditProfileDrawer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Edit Profile</DrawerTitle>
            <DrawerDescription>
              Edit your profile details and metrics.
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[75vh] overflow-auto px-4 pb-4">
            <EditProfileForm />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}
