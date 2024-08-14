import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoLogIn } from "react-icons/io5";
import { AtomFitLogo } from "@/components/shared/atom-fit-logo";

export default function LandingPage() {
  return (
    <>
      <section className="net-grid h-screen w-full"></section>
      <main className="min-h-screen">
        <header className="fixed z-50 w-full px-4 py-2 transition-all md:px-12 md:py-4">
          <nav className="flex items-center justify-between">
            <AtomFitLogo />
            <Button asChild className="group font-bold">
              <Link href={"/auth/login"}>
                CONNECT
                <IoLogIn
                  size={28}
                  className="relative ml-1 transition-all group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </nav>
        </header>
        <section className="h-screen p-2">
          <section className="relative h-full">
            <video
              autoPlay
              muted
              loop
              className="absolute size-full rounded-xl object-cover blur-sm"
            >
              <source src="/assets/video/focus.mp4" type="video/mp4" />
            </video>
            <section className="absolute z-20 flex size-full flex-col items-center justify-center text-primary-foreground">
              <div>
                <h3 className="relative -bottom-1 font-mono text-base uppercase transition-all md:-bottom-4 md:text-2xl xl:-bottom-6 2xl:-bottom-8">
                  Be Fit
                </h3>
                <h1 className="text-6xl uppercase transition-all md:text-9xl xl:text-[12rem] 2xl:text-[18rem]">
                  ATOM FIT
                </h1>
                <h3 className="relative -top-1 text-end font-mono text-base uppercase transition-all md:-top-4 md:text-2xl xl:-top-6 2xl:-top-8">
                  It&apos;s simple
                </h3>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
