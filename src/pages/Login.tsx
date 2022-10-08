import { Button, FormControl, TextField } from '@mui/material';
import {baseURL } from "../shared/baseURL"
import * as yup from "yup"
import {useFormik} from "formik"
import {useNavigate} from "react-router-dom"
import PropagateLoader from "react-spinners/PropagateLoader"
import axios  from "axios"
import { useState } from "react";
import {User} from "../shared/interface"

const Login = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)

    

    // api
    const login = async ({email, password} : User) => {
        setIsLoading(true);
        try {
            const res = await axios.post(baseURL + "login", {
                email: email,
                password: password,
            })
            if (res.data.token){
                setIsLoading(false)
                setIsLoginSuccess(false)
                localStorage.setItem("token",res.data.token)
                navigate("/home")
            }
        }
        catch (error) {
            setIsLoading(false)
            setIsLoginSuccess(true)
        }
    }

    // validate form
    const validationSchema = yup.object({
        email: yup
        .string()
        .email("Invalid email")
        .required("Please enter your email"),
        password: yup
        .string()
        .min(8, "Minimum of 8 characters")
        .required("Please enter your password"),
    })

    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            login(values)
        },
    })

    
    return (
        <div id="login">
           { isLoginSuccess && <div className="w-full bg-red-500/70 text-center p-2 transition-transform	 ">
                <span className=' text-white-500 font-bold'> We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.</span>
           </div>}
            <div className="flex flex-col items-center justify-center h-screen p-4 ">
                {isLoading && <div className="loading w-screen h-screen !absolute flex flex-col items-center justify-center z-30 ">
                    <PropagateLoader color='white' className=' bg-black/80 w-full h-full flex flex-col items-center justify-center ' size={15} loading={true} /> 
                </div>}
                <div  className="border-2 p-4 rounded-md w-2/3 text-center  max-w-2xl">
                <h4 className='text-4xl font-black text-red-500'>Well come back DES </h4>
                <h2 className=" mt-6 mb-2 text-2xl tracking-widest"> Log in </h2>
                <form className="mb-4 flex flex-col" onSubmit={formik.handleSubmit} > 
                    <FormControl>
                        <TextField  
                            id="email"
                            label="Your Email"
                            variant="outlined"
                            type="email"
                            className="!mt-4  !border-white !border !text-sm"
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            id="password"
                            label="Your Password"
                            variant="outlined"
                            type="password"
                            className="!mt-4  !border-white !border  !text-sm"
                            size="small"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </FormControl>
                    <div className="mt-8">
                        <div>Not a member? <a href="/signup" className="text-red-500/90 font-bold">Sign up now</a></div>
                    </div>
                    <Button  type="submit" variant="contained"  className="w-1/5 flex self-center !mt-8 !bg-red-500/70"  >
                        Log in
                    </Button>
                </form>
                
                </div>
            </div>
        </div>
    )
}
export default Login