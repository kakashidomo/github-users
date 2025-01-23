import React from 'react'

export function Container() {
  return (
    
    <>
        <div className='w-full h-screen'>
            <div className=' h-1/5 bg-black text-[#97A3B6]'>
                <div className='flex fixed mx-50 mt-8 bg-[#20293A] rounded-xl'>
                <label htmlFor='search'  className=''><img src="./desing/Search.svg" alt="" /></label>
                <input id='search' className='bg-[#20293A] ' placeholder='UserName' type="text" />
                </div>
                <img className='h-[100%] object-fill' src="./desing/hero-image-github-profile-sm.jpg" alt="" />
            </div>
            <div className='h-4/5 bg-[#20293A] '>

            </div>
        </div>
    </>
  )
}
