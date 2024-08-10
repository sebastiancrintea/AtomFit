import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TbSettings } from "react-icons/tb";
import { GoalChart } from "./_components/goal-chart";
export default function ProfilePage() {
  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <Avatar className="size-24">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden lg:block">
            <h2 className="text-xl font-semibold transition-all">
              Crintea Sebastiansnahkdbwahdbhawdhbahdbhsahdbhahd
            </h2>
            <span className="text-base text-muted-foreground opacity-75">
              @sshebastian
            </span>
          </div>
        </div>
        <Button>
          <TbSettings size={32} />
        </Button>
      </header>
      <section className="flex w-full flex-col gap-2 lg:flex-row">
        <GoalChart />
        <div className="w-full space-y-2">
          <h2>Goals</h2>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-normal">Weight</h3>
              <Badge className="select-none text-xl transition-all md:text-2xl">
                75 kg
              </Badge>
            </div>
            <span className="text-muted-foreground">Lose 0.5 kg per week</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-normal">Daily calories</h3>
              <Badge className="select-none text-xl transition-all md:text-2xl">
                1,980 cal
              </Badge>
            </div>
            <span className="text-muted-foreground">
              Carbs 248g | Fat 66g | Protein 99g
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
