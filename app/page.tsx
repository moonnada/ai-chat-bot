import Image from "next/image";
import Chatbot from "@/components/Chatbot/chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Talk To Ray</h1>
      <Chatbot />
    </main>
  );
}
