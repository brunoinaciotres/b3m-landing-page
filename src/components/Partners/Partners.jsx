"use client"

import "./Partners.css"

export default function Partners() {
    return (
        <section className="partners d-flex flex-column align-items-center">
            <div className="section-title">Empresas que confiaram na <span className="primary-color-gradient">B3M Digital</span> </div>
            <ul className="partners-list d-flex ">
                <li className="partner-item">
                    <img className="partner-img" src="/images/cafe-logo.png" alt="" />
                    <h3 className="partner-item-title">Milklandia Jf</h3>
                    <h4 className="partner-item-description">Café e Chocolate</h4>
                </li>
                <li className="partner-item">
                    <img className="partner-img" src="/images/borel-logo.jpg" alt="" />
                    <h3 className="partner-item-title">Borel Multimarcas</h3>
                    <h4 className="partner-item-description">Loja de Roupas</h4>
                </li>
                <li className="partner-item">
                    <img className="partner-img" src="/images/seul-logo.jpg" alt="" />
                    <h3 className="partner-item-title">Seul Bunsik</h3>
                    <h4 className="partner-item-description">Restaurante Coreano</h4>
                </li>
                <li className="partner-item">
                    <img className="partner-img" src="/images/modelo-logo.jpg" alt="" />
                    <h3 className="partner-item-title">Padaria Modelo</h3>
                    <h4 className="partner-item-description">Panificação</h4>
                </li>
            </ul>
        </section>
    )
}