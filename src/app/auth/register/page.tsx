import Image from "next/image";
import registerImg from "@/../public/assets/img/registerImg.jpg";
import { RegisterForm } from "../_components/registerForm";
import { AtomFitLogo } from "@/components/shared/AtomFitLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <section className="hidden h-screen w-full overflow-hidden p-2 lg:block">
          <Image
            alt="Focus Image"
            src={registerImg}
            priority
            className="pointer-events-none size-full select-none rounded-xl object-cover"
          />
        </section>
        <section className="w-full space-y-4 overflow-auto p-2">
          <section className="flex items-center justify-center gap-2">
            <AtomFitLogo />
            <h1 className="uppercase">Sign Up</h1>
          </section>
          <div className="mx-auto max-w-[550px] p-2">
            <RegisterForm />
          </div>
        </section>
      </main>
    </>
  );
}
