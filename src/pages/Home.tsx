import { Token } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    const checkToken = () => {
        const token = localStorage.getItem("token")
        if(!token || token==undefined) {
            navigate("/login")
        }
    }

    useEffect(()=>{
        checkToken()
    },[])
    
  return (
    <div>Home Pages</div>
  )
}

export default Home