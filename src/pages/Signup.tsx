import { Button, FormControl, TextField } from '@mui/material';
import * as yup from "yup"
import { useFormik } from "formik"
import Modal from "react-modal"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import PropagateLoader from "react-spinners/PropagateLoader"
import { useAppDispatch } from "../app/hooks"
import { baseURL } from "../shared/baseURL"
import { User } from "../shared/interface"
import Icons from "../components/Icons"
import { getToken, getNameUser } from '../feartures/User/userSlice';



const Signup = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    Modal.setAppElement("#root");

    // api
    const signup = ({ name, email, password }: User) => {
        setIsLoading(true)
        fetch(baseURL + "signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.token) {
                    setIsLoading(false)
                    setIsModalOpen(true)
                    dispatch(getToken(res.token))
                    localStorage.setItem("token", res.token)
                    dispatch(getNameUser(res.user.name))
                    localStorage.setItem("name", res.user.name)
                    setIsErrorEmail(false)
                }
                else {
                    setIsLoading(false)
                    setIsErrorEmail(true)
                }
            })
            .catch(error => {
                setIsLoading(false)
                setIsErrorEmail(true)
            }
            )
    }

    // validation form
    const validationSchema = yup.object({
        name: yup
            .string()
            .required("Please enter your user name"),
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
        password: yup
            .string()
            .min(8, "Minimum of 8 characters")
            .required("Please enter your password"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            signup(values)
        },
    })


    return (
        <div id="sigup">
            {isErrorEmail && <div className="w-full bg-red-500/70 text-center p-2 transition-transform	">
                <span className=' text-white-500 font-bold'>
                    Email already exists.
                </span>
            </div>}
            <Modal isOpen={isModalOpen}
                style={{
                    overlay: {
                        backgroundColor: '#242424'
                    },
                    content: {
                        top: '25%',
                        border: 'none',
                        background: '',
                    }
                }}
            >
                <div className="min-w-full rounded-md h-2/3 bg-black flex flex-col items-center justify-center ">
                    <div className="font-bold mb-12">
                        You have made successful accounts <Icons.Check color="success" />
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                setIsModalOpen(false)
                                navigate("/login")
                            }}
                            variant="contained" className="!bg-red-500 !mr-8" >Go to Login</Button>
                        <Button
                            onClick={() => {
                                setIsModalOpen(false)
                            }}
                            variant="contained" className="!bg-white/80 !mr-8 !px-8">Cancel</Button>
                    </div>

                </div>
            </Modal>
            <div className="flex flex-col items-center justify-center h-screen p-4 ">
                {isLoading && <div className="loading w-screen h-screen !absolute flex flex-col items-center justify-center z-30 ">
                    <PropagateLoader color='white' className=' bg-black/80 w-full h-full flex flex-col items-center justify-center ' size={15} loading={true} />
                </div>}
                <div className="border-2 p-4 rounded-md w-2/3 text-center  max-w-2xl">
                    <h4 className='text-4xl font-black text-red-500'>Well come to DES </h4>
                    <h2 className=" mt-6 mb-2 text-2xl tracking-widest "> Sign up </h2>
                    <form className="mb-4 flex flex-col" onSubmit={formik.handleSubmit} >
                        <FormControl>
                            <TextField
                                id="name"
                                label="Your name"
                                variant="outlined"
                                type="name"
                                className="!mt-4  !border-white !border !text-sm"
                                size="small"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </FormControl>
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
                                error={formik.touched.email && Boolean(formik.errors.email) || isErrorEmail}
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
                            <div>Already a member?  <span onClick={() => navigate("/login")} className="text-red-500/90 font-bold cursor-pointer">Sign In</span></div>
                        </div>
                        <Button type="submit" variant="contained" className="w-1/5 flex self-center !mt-8 !bg-red-500/70"  >
                            Sign up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup