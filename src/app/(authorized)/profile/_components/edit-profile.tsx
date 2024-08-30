"use client";

import { EditProfileDrawer } from "@/components/shared/profile/edit-profile-drawer";
import { EditProfleSheet } from "@/components/shared/profile/edit-profile-sheet";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FaEdit } from "react-icons/fa";

export function EditProfile() {
  return (
    <>
      <div className="hidden lg:block">
        <EditProfleSheet>
          <DropdownMenuItem
            className="flex items-center gap-2 text-lg font-bold"
            onSelect={(e) => e.preventDefault()}
          >
            <FaEdit size={24} />
            <span>Edit Profile</span>
          </DropdownMenuItem>
        </EditProfleSheet>
      </div>
      <div className="lg:hidden">
        <EditProfileDrawer>
          <DropdownMenuItem
            className="flex items-center gap-2 text-lg font-bold"
            onSelect={(e) => e.preventDefault()}
          >
            <FaEdit size={24} />
            <span>Edit Profile</span>
          </DropdownMenuItem>
        </EditProfileDrawer>
      </div>
    </>
  );
}
