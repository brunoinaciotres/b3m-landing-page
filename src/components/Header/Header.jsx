import "./Header.css";
export default function Header() {
    function openMenu() {
        const menu = document.querySelector(".aside-menu")
        const overlay = document.querySelector(".overlay")
        overlay.classList.toggle("d-none")
        menu.style.right = "0"
    }

    function closeMenu(){
        const menu = document.querySelector(".aside-menu")
        const overlay = document.querySelector(".overlay")
        overlay.classList.toggle("d-none")
        menu.style.right = "-150px"
    }

    
    return (
        <>
            <header>
                <div className="container d-flex align-items-center justify-content-between">
                    <img className="logo-header" src="/images/logo-colorida.png" alt="B3M Logo" />
                    <nav className="d-flex align-items-center ">
                        <div className="hamb-menu" onClick={openMenu}>
                            <div className="hamb-vector"></div>
                            <div className="hamb-vector"></div>
                            <div className="hamb-vector"></div>
                        </div>
                        <div className="aside-menu">
                            <svg
                                onClick={closeMenu}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#000"
                                className="bi bi-x close-icon"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                            </svg>
                            <ul className="nav-list-aside-menu d-flex flex-column justify-content-center">
                                <li className="nav-list-aside-menu-item"><a  onClick={closeMenu} href="#about-us">Sobre Nós</a></li>
                                <li className="nav-list-aside-menu-item"> <a onClick={closeMenu}  href="#services">Serviços</a></li>
                                <li className="nav-list-aside-menu-item"><a  onClick={closeMenu} href="#contact">Contato</a></li>
                            </ul>
                        </div>
                        <div className="overlay d-none" onClick={closeMenu}></div>
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