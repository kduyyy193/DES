import Navbar from "../layouts/navigation/Navbar"
import Sidebar from "../layouts/sidebar/Sidebar"
import { Children } from "../shared/interface"


const Main = ( {children}: Children) => {

  const hanldeMenu = () => {
      const sidebar = document.querySelector("#main-sidebar")
      const mainChild = document.querySelector("#main-child")
      sidebar?.classList.toggle("-translate-x-full")
      mainChild?.classList.toggle("-ml-72")
  }

  return (
    <div id="MainPage" className="">
        <div className="flex relative">
            <div id="main-sidebar" className="overflow-hidden  transition-transform duration-500" >
                <Sidebar />
            </div>
            <div id="main-child" className="flex-grow duration-500 ">
                <Navbar onClick={hanldeMenu} />
                {children}
            </div>
        </div>
    </div>
  )
}

export default Main