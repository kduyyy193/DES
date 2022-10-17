import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Icons from "../../components/Icons"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { OpenModal } from '../../feartures/Modal/modalSlice'

const Sidebar = () => {

    const name = useAppSelector(state => state.user.name)

    const dispatch = useAppDispatch()

    return (
        <div id="sidebar" className='h-full min-h-screen '>
            <div className="w-72 h-full  p-8 flex flex-col items-center  bg-black-500/70 border-r border-red-500 transit">
                <div>
                    <div >
                        <img className="rounded-full w-40 h-40  border-white border-2 object-cover" src="https://picsum.photos/200/300" alt="Error" />
                    </div>
                    <div className='text-center font-black tracking-wider font-sans text-sm py-4'>
                        {name || localStorage.getItem("name")}
                    </div>
                </div>
                <div onClick={() => { dispatch(OpenModal(true)) }}>
                    <Button className="!my-8 !bg-red-500/70 !text-xs !p-2 !text-white" >ADD NEW PROJECT</Button>
                </div>
                <div className="self-start mt-8 w-full">
                    <NavLink to="/dashboard">
                        <div className=" -mx-8 !py-2.5 px-8 tracking-wider text-sm font-bold hover:bg-red-500/50 hover:cursor-pointer active:bg-red-500/70">
                            <Icons.Dashboard className="mr-2" /> Dashboard
                        </div>
                    </NavLink>
                    <NavLink to="/settings">
                        <div className=" -mx-8 !py-2.5 px-8  tracking-wider text-sm font-bold hover:bg-red-500/50 hover:cursor-pointer active:bg-red-500/70">
                            <Icons.Settings className="mr-2" /> Settings
                        </div>
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default Sidebar