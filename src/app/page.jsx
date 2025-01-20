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
      body: JSON.stringify({ name, email, msg })
    }).then(data => data.json())
      .then(response => {
        console.log(response)
        finishLoader()
      })
      .catch(error => {
        console.log("ERRO NO FETCH -->", error)
      })
  }

  function startLoader() {
    const btn = document.querySelector("#contact-form-btn")
    btn.innerHTML = `Estamos enviando seu email! <div class="spinner"></div>`
  }

  function finishLoader() {
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
        <section id="about-us" className="about-us">
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

        <section id="contact" className="contact">
          <div className="section-title">
            Entre em contato
          </div>
          <div className="wpp-container">
            <img src="/images/whatsapp.png" alt="ícone do Whatsapp" />
            <span>Whatsapp</span>
            <span className="wpp-number fw-bold">(32) 99160-7447</span>
            <a href="https://wa.me/5532991463499/?text=Olá, vim pelo site e gostaria de mais informações.">Clique para enviar uma mensagem</a>
          </div>
          {/* <span className="fs-5 text-contact">Ou nos envie um email</span>
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
            </button>
          </form> */}
        </section>
        <footer>
          <div className="footer-container">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <div className="title fw-bold">
                  Fale conosco
                </div>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram icon-footer  "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                    </svg>

                    <a href="https://www.instagram.com/b3mdigital/" target="_blank">b3mdigital</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope icon-footer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                    </svg>
                    <a href="mailto:b3massessoria@gmail.com">b3massessoria@gmail.com</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-whatsapp icon-footer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                    </svg>
                    <a href="https://wa.me/5532991463499/?text=Olá, vim pelo site e gostaria de mais informações.">(32) 99146-3499</a>
                  </li>
                </ul>
              </div>
              <img className="logo-footer" src="/images/logo-colorida.png" alt="Logo B3M DIgital" />
            </div>
            <p>Copyright © 2025 Todos os direitos reservados</p>

          </div>
        </footer>
      </main>
    </>

  );
}
