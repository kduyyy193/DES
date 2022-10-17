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

    const todosFromStore = useAppSelector(state => state.todos)

    let idTodo: number
    const postTodoAPI = async (todo: Todos) => {
        try {
            const res = await axios.post((baseURL + "todos"), {
                content: todo.content,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            if (res.data) {
                idTodo = res.data.todo.id
                dispatch(postTodo({ content, id: idTodo }));
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const addTodo = () => {
        dispatch(OpenModal(false))
        postTodoAPI({ content, id: idTodo })
        setContent("")
    }

    const Open = useAppSelector(state => state.modal.Open)
    const dispatch = useAppDispatch()
    const [content, setContent] = useState("")



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
            <form onSubmit={addTodo}>
                <Box sx={style} className="max-w-full rounded-lg">
                    <h2 className="text-black/70 font-bold text-2xl ">
                        Add a new project
                    </h2>
                    <div className="p-12">
                        <div className='flex items-center '>
                            <label htmlFor='content'>
                                <Icons.Edit className="text-black/70 mt-2 mr-2 hover:cursor-pointer" />
                            </label>
                            <Input id='content' autoFocus placeholder='C o n t e n t' type='text' className="w-full" value={content} onChange={(e) => setContent(e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type='submit' className=" !bg-red-500 !text-xs !p-2 !text-white">ADD NEW PROJECT</Button>
                    </div>
                </Box>
            </form>
        </Modal>
    )
}

export default AddNewProject