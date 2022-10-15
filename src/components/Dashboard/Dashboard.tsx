import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { OpenModal } from '../../feartures/Modal/modalSlice'
import Icons from '../Icons'

const Dashboard = () => {

  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.todos)

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
        {!todos &&
          <div className="text-center">
            <h2 className='text-3xl font-semibold'>Nothing here 😔</h2>
            <div onClick={() => { dispatch(OpenModal(true)) }}>
              <Button variant='text' className="!text-red-500/70 !font-semibold">ADD NEW PROJECT </Button>
            </div>
          </div>
        }
        <div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard