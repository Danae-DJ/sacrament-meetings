import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center text-center px-6 py-16">
        <Image
          src="/chapel1.jpg"
          alt="Illustration of a chapel"
          width={300}
          height={200}
          priority
        />

        <h1 className="text-3xl font-bold text-olive mt-6 mb-4">
          Sacrament Meeting Planner
        </h1>

        <p className="max-w-xl text-lg">
          Organize and explore sacrament meeting agendas for Greenvilla Ward.
        </p>
    </main>
  );
}
