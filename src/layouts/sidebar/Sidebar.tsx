import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Icons from "../../components/Icons"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { OpenModal } from '../../feartures/Modal/modalSlice'

const Sidebar = () => {

    const name = useAppSelector(state => state.user.name)

    const dispatch = useAppDispatch()

    return (
        <div id="sidebar">
            <div className="w-72 h-screen p-8 flex flex-col items-center  bg-black-500/70 border-r border-red-500 transit">
                <div>
                    <div >
                        <img className="rounded-full w-40 h-40  border-white border-2 object-cover" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/193464204_100375608965467_3042561662570842452_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=KBCJJ9YlIkUAX-1Ppp6&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_lcc8yhkIU8WEVO8SikU3Bk_d-KjSAbW3FJ9UerNoVgA&oe=636B6E01" alt="Error" />
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