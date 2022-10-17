import axios from 'axios';
import { useAppDispatch } from '../../app/hooks';
import { deleteTodo } from '../../feartures/Todos/todosSlice';
import { baseURL } from '../../shared/baseURL';
import { Status, Todos } from '../../shared/interface'
import Icons from '../Icons';

const ViewTodos = ({ content, status, id }: Todos) => {
    const token = localStorage.getItem("token")
    const dispatch = useAppDispatch()
    const hanldeDeleteTodo = async (id: number) => {
        console.log(id)
        dispatch(deleteTodo(id))
        const res = await axios.delete(`${baseURL}todos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    }

    return (
        <div >
            <div
                style={{ borderLeft: `4px solid ${status?.color}` }}
                className="todo flex justify-self-start items-center justify-around  mx-16  py-1 bg-black/20 border rounded-md mb-1"
            >
                <div className="ml-1 w-2/5 text-start grow">
                    <div className="text-gray-500 text-xs ml-4">Project name</div>
                    <div className="text-sm mt-1    ">
                        <Icons.DragIndicatorIcon htmlColor="gray" className="mr-1 mb-2 text-center" />
                        {content}
                    </div>
                </div>

                <div>
                    <button onClick={() => { hanldeDeleteTodo(id || -1) }}>
                        <Icons.Trash
                            className="mr-8 cursor-pointer rounded-full hover:bg-gray-200 p-1"
                            fontSize="large"
                            htmlColor={status?.color || "#b33b3b"}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewTodos