import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import MainPage from "./pages/Main"
import Dashboard from "./components/Dashboard/Dashboard"
import Settings from "./components/Settings/Settings"

import { Routes, Route, Navigate } from "react-router-dom"
import { useAppSelector } from './app/hooks'
import AddNewProject from './components/AddNewProject/AddNewProject'
import MainPageResponsive from './pages/MainPageResponsive'

const App = () => {
  const token = useAppSelector(state => state.user.token) || localStorage.getItem("token")
  return (
    <div className='App'>
      <AddNewProject />
      <Routes>
        {token &&
          <Route>
            <Route path="/" element={<MainPage children={<Dashboard />} />} />
            <Route path="/respon" element={<MainPage children={<MainPageResponsive />} />} />
            <Route path="/login" element={<Navigate replace to="/dashboard" />} />
            <Route path="/signup" element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<MainPage children={<Dashboard />} />} />
            <Route path="/settings" element={<MainPage children={<Settings />} />} />
            <Route path="/home" element={<Home />} />
          </Route>
        }
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  )
}

export default App