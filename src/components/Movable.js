import { useEffect } from 'react'

const Movable = ({ snippet, date, note, label }) => {
    useEffect(() => {

    }, [])
  return (
    <div className='bg-blue-200 w-96 h-48 rounded-lg border-2 border-blue-400 border-solid flex flex-col mt-4 p-4 overflow-auto'>
      <div className='flex justify-between'>
        <div className='ml-3 mt-2 bg-gray-200 px-4 py-1 rounded-2xl'>AI</div>
        <h1 className='mr-3 mt-2'>X</h1>
      </div>
      <div className='mt-5'>
        <div>{snippet} - {date}</div>
        <div className='mt-4'>Note: {note}</div>
      </div>


    </div>
  )
}

export default Movable