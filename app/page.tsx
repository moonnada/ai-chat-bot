import Chatbot from "@/components/Chatbot/chatbot";
import AnimatedTitle from "./AnimatedTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AnimatedTitle /> {/* Use the animated title */}
      <Chatbot />
    </main>
  );
}