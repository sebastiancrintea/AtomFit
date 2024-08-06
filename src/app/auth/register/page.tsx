import Image from "next/image";
import atomFitLogoImg from "@/../public/assets/img/Atom-64x64.png";
import registerImg from "@/../public/assets/img/registerImg.jpg";
import Link from "next/link";
import { RegisterForm } from "../_components/registerForm";

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
        <section className="h-screen w-full space-y-4 overflow-auto p-2 pt-24">
          <section className="flex items-center justify-center gap-2">
            <Link href={"/"} className="transition-all hover:brightness-150">
              <Image alt="AtomFit Logo" src={atomFitLogoImg} priority />
            </Link>
            <h1 className="uppercase">Sign Up</h1>
          </section>
          <div className="mx-auto max-w-[550px] overflow-auto p-2">
            <RegisterForm />
          </div>
        </section>
      </main>
    </>
  );
}
