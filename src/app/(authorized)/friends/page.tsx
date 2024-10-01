import { NavigateBackButton } from "@/components/shared/navigate-back";
import { SearchBox } from "@/components/shared/search-box";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friends",
};

export default function FriendsPage() {
  return (
    <>
      <ul className="space-y-1">
        {Array.from({ length: 50 }).map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between rounded-xl border-2 bg-popover px-4 py-2 transition-all hover:brightness-125"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl">Crintea Sebastian</h2>
                <p className="text-muted-foreground">@sshebastian</p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="font-semibold md:text-lg"
                >
                  REMOVE
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have to keep friendships man.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
        ))}
      </ul>
    </>
  );
}
