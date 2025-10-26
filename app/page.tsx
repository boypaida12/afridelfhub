import Aboutus from "@/components/aboutus";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <Navbar/>
      <main>
        <Hero/>
        <Aboutus/>
      </main>
    </div>
  );
}
