import { Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { OpenModal } from '../../feartures/Modal/modalSlice'
import { getAllTodo, postTodo } from '../../feartures/Todos/todosSlice'
import { baseURL } from '../../shared/baseURL'
import { Status, Todos } from '../../shared/interface'
import Icons from '../Icons'
import ViewTodos from '../ViewTodos/ViewTodos'

const Dashboard = () => {

  const token = localStorage.getItem("token")

  const dispatch = useAppDispatch()
  const AllTodos = useAppSelector(state => state.todos)

  const todosAPI = async () => {
    try {
      const res = await axios.get((baseURL + "todos"), {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.data.todos) {
        dispatch(getAllTodo(res.data.todos))
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current == false) {
      todosAPI()
      return () => {
        effectRan.current = true
      }
    }


  }, [])


  return (
    <div id='dashboard'>
      <div className='mt-4'>
        <h4 className='ml-6'>Dashboard</h4>
        <div className='flex justify-between px-4 mt-4'>
          <div>
            <Icons.Dashboard className='hover:bg-slate-300/10 hover:cursor-pointer mr-6 text-red-500 ' />
            <Icons.Check className="hover:bg-slate-300/10 hover:cursor-pointer mr-6 text-green-500" />
            <Icons.Work className="hover:bg-slate-300/10 hover:cursor-pointer mr-6 text-orange-500" />
            <Icons.AccessTime className="hover:bg-slate-300/10 hover:cursor-pointer mr-6 text-purple-500" />
          </div>
          <Button >
            <Icons.Add className="text-red-500  hover:cursor-pointer" onClick={() => { dispatch(OpenModal(true)) }} />
          </Button>
        </div>
        {!AllTodos &&
          <div className="text-center">
            <h2 className='text-3xl font-semibold'>Nothing here 😔</h2>
            <div onClick={() => { dispatch(OpenModal(true)) }}>
              <Button variant='text' className="!text-red-500/70 !font-semibold">ADD NEW PROJECT </Button>
            </div>
          </div>
        }
        <div className='mt-8'>
          {
            AllTodos?.map(todo => <ViewTodos id={todo.id} key={todo.id} content={todo.content} color={todo.color} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard