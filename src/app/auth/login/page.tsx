import Image from "next/image";
import { LoginForm } from "../_components/login-form";
import loginImg from "@/../public/assets/img/loginImg.jpg";
import { AtomFitLogo } from "@/components/shared/atom-fit-logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <section className="w-full space-y-4 p-2">
          <section className="flex items-center justify-center gap-2">
            <AtomFitLogo />
            <h1 className="uppercase">Sign In</h1>
          </section>
          <div className="mx-auto max-w-[500px]">
            <LoginForm />
          </div>
        </section>
        <section className="relative hidden h-screen w-full overflow-hidden p-2 lg:block">
          <Image
            alt="Focus Image"
            src={loginImg}
            priority
            className="pointer-events-none h-full w-full select-none rounded-xl object-cover object-top"
          />
        </section>
      </main>
    </>
  );
}
