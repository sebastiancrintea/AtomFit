import atomFitLogoImg from "@/../public/assets/img/Atom-64x64.png";

import Image from "next/image";
import Link from "next/link";

export function AtomFitLogo() {
  return (
    <>
      <Link href={"/"} className="transition-all hover:brightness-150">
        <Image alt="AtomFit Logo" src={atomFitLogoImg} priority />
      </Link>
    </>
  );
}
