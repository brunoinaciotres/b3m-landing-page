import "./Header.css";
export default function Header() {
    return (
        <>
            <header>
                <div className="container d-flex align-items-center justify-content-between">
                    <img className="logo-header" src="/images/logo-colorida.png" alt="B3M Logo" />
                    <nav className="d-flex align-items-center ">
                        <ul className="nav-list d-flex align-items-center justify-content-center">
                            <li className="nav-list-item"><a href="#about-us">Sobre Nós</a></li>
                            <li className="nav-list-item"> <a href="#services">Serviços</a></li>
                            <li className="nav-list-item"><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="light-effect"></div>
            </header>
        </>


    )
}