"use client"

import DigitalPresence from "@/components/DigitalPresence/DigitalPresence";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurServices from "@/components/OurServices/OurServices";
import Partners from "@/components/Partners/Partners";
import Text1 from "@/components/Text1/Text1";
import { useEffect } from "react";


export default function Home() {


  return (
    <>
      <Header />
      <main>
        <Hero />
        <DigitalPresence />
        <Text1 />
        <OurServices />
        <Partners />
        <section className="about-us">
          <div className="content-container gap-4">
            <h3 className="section-title">Sobre Nós</h3>
            <div className="paragraph-container">
              <p>A B3M  fornece solução para negócios estabelecerem a sua presença digital de forma fácil e descomplicada. Tendo em vista a grande necessidade de ter sua empresa online no mundo digital e as diversas barreiras encontradas ao fazer isso sozinho.</p>
            </div>
          </div>
          <div className="img-container">
            <img src="/images/laptop.png" alt="" className="laptop-img" />
          </div>
        </section>
      </main>
    </>

  );
}
