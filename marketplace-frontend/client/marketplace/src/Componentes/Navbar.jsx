import "./Navbar.css"
import {FaSearch} from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <h2>Marketplace Grupo 2</h2>
                    </div>
                    <div className="input-wrapper">
                <       FaSearch id = "icono-buscador" />
                        <input type="text" placeholder="Type to search..." />
                     </div>
                    <div className="nav-link">
                        <a href="/carrito">
                            <AiOutlineShoppingCart size={30} />
                        </a>
                        <a href="/corazon">
                            <LuHeart size={30}/>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
