import Aboutus from "@/components/aboutus";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import WhatWeDo from "@/components/whatwedo";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <Navbar/>
      <main>
        <Hero/>
        <Aboutus/>
        <WhatWeDo/>
        <Contact/>
        <Footer/> 
      </main>
    </div>
  );
}
