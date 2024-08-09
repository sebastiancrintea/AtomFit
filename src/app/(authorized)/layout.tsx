import { LaptopNavigaton } from "@/components/shared/navigation/laptop-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex">
        <aside className="sticky top-0 hidden h-screen p-2 md:block">
          <LaptopNavigaton />
        </aside>
        <main className="min-h-[200vh]">{children}</main>
      </section>
    </>
  );
}
