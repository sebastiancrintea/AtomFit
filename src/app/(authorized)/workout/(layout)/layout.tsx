import { SearchBox } from "@/components/shared/search-box";
import { WorkoutTabs } from "../_components/workout-tabs";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="sticky top-2 z-50 mb-2 flex items-center gap-2 rounded-xl bg-popover p-2">
        <div className="flex-1">
          <Suspense>
            <SearchBox placeholder="Search by name or author" />
          </Suspense>
        </div>
        <WorkoutTabs />
      </header>
      <section>{children}</section>
    </>
  );
}
