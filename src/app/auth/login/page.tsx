import Image from "next/image";
import { LoginForm } from "../_components/loginForm";
import atomFitLogoImg from "@/../public/assets/img/Atom-64x64.png";
import loginImg from "@/../public/assets/img/loginImg.jpg";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <section className="w-full space-y-4 p-2">
          <section className="flex items-center justify-center gap-2">
            <Link href={"/"} className="transition-all hover:brightness-150">
              <Image alt="AtomFit Logo" src={atomFitLogoImg} priority />
            </Link>
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
