import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <Hero />
        <Button>I'm a Button</Button>
        <ButtonLink href="/">I'm a Button Link</ButtonLink>
      </main>
    </div>
  );
}
