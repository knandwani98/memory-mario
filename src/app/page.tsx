import { GameGrid } from "@/components/GameGrid";

export default function Home() {
  return (
    <main className={`w-full h-screen bg-[#6683FB] fixed py-16`}>
      <GameGrid />
    </main>
  );
}
