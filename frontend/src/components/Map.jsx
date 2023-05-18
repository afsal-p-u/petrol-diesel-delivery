import React from 'react'

const Map = () => {
  return (
    <div className='w-full h-[100vh]'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.40060573135!2d74.76966091382563!3d12.922979283636264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1684343163016!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0}}
        ></iframe>
    </div>
  )
}

export default Map