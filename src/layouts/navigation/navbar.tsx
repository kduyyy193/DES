import Icons from '../../components/Icons'
import { OnClick } from "../../shared/interface"
import { useNavigate } from 'react-router'
import { removeToken } from "../../feartures/User/userSlice"
import { useAppDispatch } from '../../app/hooks'

const Navbar = ({ onClick }: OnClick) => {

  const dispatch = useAppDispatch()

  const logout = () => {
    navigate("/login")
    dispatch(removeToken())
    localStorage.clear()
    location.reload()
  }

  const navigate = useNavigate()
  return (
    <div id="navigation" className='flex justify-between font-semibold text-sm p-4 '>
      <div className="flex p-1 ">
        <div onClick={onClick} className="hover:cursor-pointer hover:bg-white/10">
          <Icons.Menu />
        </div>
        <div className="ml-8 mt-0.5">
          <div>T o d o  <span className="text-red-500 font-black ml-4">DES</span></div>
        </div>
      </div>
      <div onClick={logout} className=" flex p-1 hover:bg-white/10 hover:rounded hover:cursor-pointer" >
        <div className="mr-2 mt-0.5 ">
          <div >Log out DES</div>
        </div>
        <div>
          <Icons.Logout />
        </div>
      </div>
    </div>
  )
}

export default Navbar