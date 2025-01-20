import { useEffect } from "react";
import "./Text1.css"
export default function Text1() {
    useEffect(() => {
        const phoneImgElem = document.querySelector(".phone-image-container")
        const observerPhoneImg = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("phone-show");
                        observerPhoneImg.unobserve(entry.target); // Evita que a animação repita
                    }
                });
            },
            { threshold: 0.1 } // 10% do elemento visível
        );

        observerPhoneImg.observe(phoneImgElem)

        return () => {
            observerPhoneImg.unobserve(phoneImgElem)
        };

    }, [])

    return (
        <section className="text-1">
            <div className="d-flex text-1-container ">
                <div className="d-flex flex-column text-1-paragraph-container">
                    <p>Transformamos sua <span className="fw-bold">presença digital</span> em um <span className="fw-bold">diferencial competitivo</span>: do gerenciamento estratégico do seu Instagram à criação de sites e designs personalizados, trazemos soluções completas para destacar sua empresa na sua cidade e além!</p>
                    {/* <button className="outlined-btn ">Entenda como</button> */}
                </div>
                <div className="phone-image-container d-flex align-center justify-content-center">
                    <img src="/images/phone.png" className="w-100" alt="Ilustração de um celular com icones 3D flutuando em sua frente fora da tela" />
                </div>
            </div>
        </section>
    )
}