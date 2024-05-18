import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Link href="/riddle/0">Start</Link>
    </main>
  );
}
