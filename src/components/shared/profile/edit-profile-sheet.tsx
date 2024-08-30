import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EditProfileForm } from "./edit-profile-form";

export function EditProfleSheet({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto md:min-w-[500px] lg:min-w-[700px]">
          <SheetHeader>
            <SheetTitle className="md:text-2xl">Edit Profile</SheetTitle>
            <SheetDescription>
              Edit your profile details and metrics.
            </SheetDescription>
          </SheetHeader>
          <EditProfileForm />
        </SheetContent>
      </Sheet>
    </>
  );
}
