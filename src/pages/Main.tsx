import { useState } from "react"
import { useNavigate } from "react-router"
import Navbar from "../layouts/navigation/Navbar"
import Sidebar from "../layouts/sidebar/Sidebar"
import { Children } from "../shared/interface"


const Main = ({ children }: Children) => {

    const navigate = useNavigate()
    const [onMenu, setOnMenu] = useState(false)

    const hanldeMenu = () => {
        if (window.innerWidth <= 627) {
        } else {
            const sidebar = document.querySelector("#main-sidebar")
            const mainChild = document.querySelector("#main-child")
            sidebar?.classList.toggle("-translate-x-full")
            mainChild?.classList.toggle("-ml-72")
        }
    }

    return (
        <div id="MainPage" className="">
            <div className="flex relative h-full overflow-hidden">
                <div id="main-sidebar" className=" hidden transition-transform duration-500 sm:block" >
                    <Sidebar />
                </div>
                <div id="main-child" className="flex-grow duration-500  ">
                    <Navbar onClick={hanldeMenu} />
                    <div id="main-children">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Main