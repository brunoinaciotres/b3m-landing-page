"use client"

import DigitalPresence from "@/components/DigitalPresence/DigitalPresence";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurServices from "@/components/OurServices/OurServices";
import Partners from "@/components/Partners/Partners";
import Text1 from "@/components/Text1/Text1";
import { useEffect } from "react";


export default function Home() {
  
  async function sendEmail(e) {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const msg = document.querySelector("#msg").value
   
    startLoader()
    await fetch("/api", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({name,email,msg})
    }). then( data => data.json())
    .then (response => {
      console.log(response)
      finishLoader()
    })
    .catch(error => {
      console.log("ERRO NO FETCH -->", error)
    })
  }

  function startLoader(){
    const btn = document.querySelector("#contact-form-btn")
    btn.innerHTML = `Estamos enviando seu email! <div class="spinner"></div>`
  }

  function finishLoader(){
    const btn = document.querySelector("#contact-form-btn")
    const spinner = document.querySelector(".spinner")
    spinner.classList.toggle("hide")
    btn.innerHTML = "Mensagem Enviada"
    const checkIcon = document.createElement("img")
    checkIcon.src = "/images/check-all.svg"
    checkIcon.classList.add("check-icon")
    btn.append(checkIcon)

  }

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

        <section className="contact">
          <div className="section-title">
            Entre em contato
          </div>
          <div className="wpp-container">
            <img src="/images/whatsapp.png" alt="ícone do Whatsapp" />
            <span>Whatsapp</span>
            <span className="wpp-number fw-bold">(32) 99160-7447</span>
            <a href="https://wa.me/5532991463499/?text=Olá, gostaria de mais informações">Clique para enviar uma mensagem</a>
          </div>
          <span className="fs-5 text-contact">Ou nos envie um email</span>
          <form action="#" className="send-email">
            <span className="fw-bold form-title">Enviar Email</span>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
            <label htmlFor="email">Seu Email</label>
            <input type="email" id="email" />
            <label htmlFor="msg">Mensagem</label>
            <textarea id="msg"></textarea>
            <button id="contact-form-btn" onClick={sendEmail} className="filled-btn">
              Enviar Mensagem
              {/* <div className="spinner hide"></div> */}
            </button>
          </form>
        </section>
      </main>
    </>

  );
}
