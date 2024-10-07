"use client";

import { SearchBox } from "@/components/shared/search-box";
import { FriendsTabs } from "./_components/friends-tabs";
import { NavigateBackButton } from "@/components/shared/navigate-back";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <div className="flex items-center gap-2">
          <NavigateBackButton />
          <h1>Friends</h1>
        </div>
      </header>
      <div className="sticky top-2 z-50 mb-2 flex items-center gap-2 rounded-xl bg-popover p-2">
        <div className="flex-1">
          <Suspense>
            <SearchBox placeholder="Search by username or name" />
          </Suspense>
        </div>
        <FriendsTabs />
      </div>
      <section>{children}</section>
    </>
  );
}
