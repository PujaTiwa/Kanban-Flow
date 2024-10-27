import React from 'react'

const Header = () => {
  return (
    <nav className='text-black bg-gray-200 h-[9vh] shadow-md shadow-slate-500 px-2 sm:px-20 cursor:pointer flex justify-between items-center rounded-sm'>
        <div className=''> 
          <img src="/icon.png" alt="" className='w-28 md:w-32  pt-2' />
        </div>
    </nav>
  )
}

export default Header