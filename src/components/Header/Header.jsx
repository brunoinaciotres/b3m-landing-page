import "./Header.css";
export default function Header() {
    return (
        <>
            <header>
                <div className="container d-flex align-items-center justify-content-between">
                    <img className="logo-header" src="/images/logo-colorida.png" alt="B3M Logo" />
                    <nav className="d-flex align-items-center ">
                        <ul className="nav-list d-flex align-items-center justify-content-center">
                            <li className="nav-list-item">Sobre Nós</li>
                            <li className="nav-list-item">Serviços</li>
                            <li className="nav-list-item">Contato</li>
                        </ul>
                    </nav>
                </div>
                <div className="light-effect"></div>
            </header>
        </>


    )
}