"use client"

import { useEffect } from "react";
import "./Hero.css"

export default function Hero() {
     useEffect(() => {
        const cards = document.querySelectorAll(".hero-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200); 
        });
      }, [])
    return(
        <section className="hero">
          <div className="d-flex flex-column ">
            <div className="d-flex justify-content-center">
              <div className=" d-flex justify-content-center align-items-center">

                <h1 className="hero-title">
                  Ajudando empresas a se destacarem no Mundo Digital!
                </h1>
              </div>

            </div>
            <div className=" d-flex justify-content-center mb-3">
              <div className=" d-flex justify-content-center align-items-center">
                <h2 className="hero-subtitle">
                  Aumente a presença da sua empresa!
                </h2>
              </div>
            </div>
            <div className="hero-card-group d-flex justify-content-center">
                <div className="hero-card">
                  <img className="hero-card-icon" src="/images/Instagram.png" alt="Icone de um WebSite" />
                  <p className="hero-card-text">Gerenciamos sua rede social</p>
                  <button className="outlined-blue-btn">Saber Mais</button>
                </div>
              
                <div className="hero-card">
                  <img className="hero-card-icon" src="/images/Gallery.png" alt="Icone de um WebSite" />
                  <p className="hero-card-text">Produzimos artes visuais digitais para seu negócio</p>
                  <button className="outlined-blue-btn">Saber Mais</button>
                </div>
              
                <div className="hero-card">
                  <img className="hero-card-icon" src="/images/Website.png" alt="Icone de um WebSite" />
                  <p className="hero-card-text">Criamos seu site conforme suas necessidades</p>
                  <button className="outlined-blue-btn">Saber Mais</button>
                </div>
             
            </div>
          </div>
        </section>
    )
}