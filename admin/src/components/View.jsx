import React from 'react'

const View = ({items, setShowView}) => {
    delete items._id
    delete items.__v
  return (
    <div className='w-full h-[100vh] absolute top-0 left-0 bg-[#b1babaab] flex items-center justify-center'>
        <div className="w-[450px] min-h-[20px] p-[20px] bg-[#eeeeee9b] rounded-md shadow-lg">
            {Object.keys(items).map((item, i) => (
                <>
                    <div className="flex items-center justify-between px-[13px] py-[6px] bg-slate-200 rounded-md my-2">
                        <small className='text-[13px] font-medium'>{item}</small>
                        <p className='text-[14px] font-bold'>{items[item]}</p>
                    </div>
                </>
            ))}
            <div className="mt-3 flex justify-center">
                <button 
                    className='px-[15px] py-[5px] bg-gray-500 rounded-md text-white font-medium'
                    onClick={() => setShowView(null)}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default View