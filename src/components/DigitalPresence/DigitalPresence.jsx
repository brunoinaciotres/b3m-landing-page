"use client"
import "./DigitalPresence.css"
import { useEffect } from "react";

export default function DigitalPresence() {
    useEffect(() => {
        const digitalPresenceTextElem = document.querySelector(".digital-presence-text");
        const resultsTextElem = document.querySelector(".results-text")

        const observerResultsTextElem = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("results-text-show");
                        observerResultsTextElem.unobserve(entry.target); // Evita que a animação repita
                    }
                });
            },
            { threshold: 0.1 } // 10% do elemento visível
        );

        observerResultsTextElem.observe(resultsTextElem)

        const observerDigitalPresenceTextElem = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("digital-presence-text-show");
                        observerDigitalPresenceTextElem.unobserve(entry.target); // Evita que a animação repita
                    }
                });
            },
            { threshold: 0.1 } // 10% do elemento visível
        );

        observerDigitalPresenceTextElem.observe(digitalPresenceTextElem)

        // Cleanup para remover o observador
        return () => {
            observerDigitalPresenceTextElem.unobserve(digitalPresenceTextElem)
            observerResultsTextElem.unobserve(resultsTextElem)
        };
    }, []);

    return (
        <section className="digital-presence">
            <img src="/images/wave-top.png" className="wave" alt="" />
            <div className="white-stripe">
                <span className="primary-color-gradient giant-text digital-presence-text">Presença Digital</span>
                <span className="giant-text results-text">Que Gera Resultados</span>
            </div>
            <img src="/images/wave-bottom.png" className="wave" alt="" />
        </section>
    )
}