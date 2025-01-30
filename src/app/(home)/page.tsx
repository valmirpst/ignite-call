import Image from 'next/image';
import Hero from './components/hero';

export default function Home() {
  return (
    <main className=" h-max lg:h-full max-w-screen-2xl m-auto flex flex-col lg:flex-row pt-24 lg:pt-0 items-center gap-20 overflow-x-hidden">
      <Hero />

      <section className="min-w-max max-lg:px-12 lg:px-24">
        <Image
          src="/app-preview.png"
          alt="Calendário simbolizando aplicação no funcionamento"
          height={400}
          width={700}
          quality={100}
          priority
          className="max-md:hidden"
        />
      </section>
    </main>
  );
}
