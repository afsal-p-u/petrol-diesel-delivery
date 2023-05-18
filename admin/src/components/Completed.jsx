import React from 'react'
import axios from 'axios'
import View from './View'
import { useState } from 'react'
import { useEffect } from 'react'

const Completed = () => {
  const [data, setData] = useState(null)
  const [showView, setShowView] = useState(null)
  
  useEffect(() => {
    const getCompleted = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/order/completed`).then((res) => {
        setData(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getCompleted()
  }, [showView])

  const _setShowView = (value) => {
    setShowView(value)
  }

  return (
    <>
      <div className='w-[50%] h-[100%] bg-[#eee]'>
          <h3 className='ml-8 my-3 font-medium'>Completed</h3>
          <div className="px-[30px] flex flex-col gap-2">
            {data?.map((item) => (
              <div className="bg-gray-300 px-5 py-2 rounded-md flex items-center justify-between" key={item._id}>
                  <small className='text-[13px] font-medium'>{item._id}</small>
                  <button 
                    className='px-[15px] py-[6px] text-[13px] rounded-md bg-gray-600 text-white'
                    onClick={() => setShowView(item)}
                  >
                    View
                  </button>
              </div>
            ))}
          </div>
      </div>

      {showView && (
        <View items={showView} setShowView={_setShowView} />
      )}
    </>
  )
}

export default Completed