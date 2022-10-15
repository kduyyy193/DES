import { Button, Input } from '@mui/material';
import { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Icons from '../Icons';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { OpenModal } from '../../feartures/Modal/modalSlice';
import { postTodo } from '../../feartures/Todos/todosSlice';
import axios from 'axios';
import { baseURL } from '../../shared/baseURL';
import { Todos } from '../../shared/interface';

const AddNewProject = () => {


    const token = localStorage.getItem("token")

    const postTodoAPI = async (todo: Todos) => {
        try {
            const res = await axios.post((baseURL + "todos"), {
                content: todo.content,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            if (res.data) {
                console.log(res.data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const addTodo = () => {
        dispatch(OpenModal(false))
        postTodoAPI({ content, date: day })
        dispatch(postTodo({ content, date: day }));
        setContent("")
        setDay("")
    }

    const Open = useAppSelector(state => state.modal.Open)
    const dispatch = useAppDispatch()
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [content, setContent] = useState("")
    const [day, setDay] = useState("")



    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        opactity: 0.3
    };

    return (
        <Modal open={Open} onClose={() => { dispatch(OpenModal(false)) }}>
            <Box sx={style} className="max-w-full rounded-lg">
                <h2 className="text-black/70 font-bold text-2xl ">
                    Add a new project
                </h2>
                <div className="p-12">
                    <div className='flex items-center '>
                        <label htmlFor='content'>
                            <Icons.Edit className="text-black/70 mt-2 mr-2 hover:cursor-pointer" />
                        </label>
                        <Input id='content' placeholder='C o n t e n t' type='text' className="w-full" value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className='flex items-center pt-8 '>
                        <label htmlFor='date'>
                            <Icons.DateRange className="text-black/70 mt-2 mr-2 hover:cursor-pointer" />
                        </label>

                        <Input id='date' type='date' className="w-full" value={day} placeholder="date"
                            onChange={(e) => setDay(e.target.value)} />
                    </div>
                </div>
                <div onClick={addTodo} className="text-center">
                    <Button className=" !bg-red-500 !text-xs !p-2 !text-white">ADD NEW PROJECT</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default AddNewProject