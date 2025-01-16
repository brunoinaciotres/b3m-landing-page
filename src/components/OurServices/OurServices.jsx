"use client"

import { useEffect } from "react";
import "./OurServices.css"

export default function OurServices(){

    useEffect(() => {
        const serviceItemsElem = document.querySelectorAll(".our-services-item")
        const observerServiceItems = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(()=> {
                    entry.target.classList.add("show-service-item")

                }, 300)
    
                observerServiceItems.unobserve(entry.target); // Evita que a animação repita
              }
            });
          },
          { threshold: 0.1 } // 10% do elemento visível
        );
    
        serviceItemsElem.forEach(item => {
          observerServiceItems.observe(item)
        })
    
        return () => {
          serviceItemsElem.forEach(item => {
            observerServiceItems.unobserve(item)
          })
        };
      }, [])
    
    return (<section className="our-services d-flex flex-column align-items-center">
        <div className="d-flex title-container ">
          <h3 className="section-title">
            Nossos serviços
          </h3>
        </div>
        <div className="d-flex ">
          <ul className="our-services-list">
            <li className="our-services-item d-flex justify-content-between">
              <div className="icon-text-container d-flex gap-1">
                <span className=" d-flex item-icon-container align-items-center justify-content-center "><img className="item-icon" src="/images/Instagram.png" alt="Icone do Instagram" /></span>
                <p className="item-text">Gerenciamento da sua rede social com produção de conteúdos estratégica.</p>
              </div>
              <button className="item-btn outlined-blue-btn">Tenho Interesse</button>
            </li>
            <li className="our-services-item d-flex justify-content-between">
              <div className="icon-text-container d-flex gap-1">
                <span className=" d-flex item-icon-container align-items-center justify-content-center "><img className="item-icon" src="/images/Gallery.png" alt="Icone do Instagram" /></span>
                <p className="item-text">Produção de artes gráficas para seu negócio. Cartões de visita, cardápios, e mais.</p>
              </div>
              <button className="item-btn outlined-blue-btn">Tenho Interesse</button>
            </li>
            <li className="our-services-item d-flex justify-content-between">
              <div className="icon-text-container d-flex gap-1">
                <span className=" d-flex item-icon-container align-items-center justify-content-center "><img className="item-icon" src="/images/Website.png" alt="Icone do Instagram" /></span>
                <p className="item-text">Criação e manutenção do seu site conforme suas necessidades.</p>

              </div>
              <button className="item-btn outlined-blue-btn">Tenho Interesse</button>
            </li>
          </ul>
        </div>
      </section>)
}
