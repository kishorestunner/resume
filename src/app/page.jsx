import Dashboard from "@/pages/Home";
import { ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <ScrollShadow hideScrollBar className="max-w-[400px] max-h-[616px]">
    <Dashboard />
  </ScrollShadow>
  );
}
