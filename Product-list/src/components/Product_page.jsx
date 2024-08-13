import React from 'react'
import { data } from '../data'


function Product_page() {
   
    const listItem= data.map(data=>
        <div key={data._id} className='h-[30%] w-[300px]  flex-col '>
         
        <div className='relative'>
        <img className='gap-5 rounded-md h-60 w-60'
        src={data.img}
        />
        <div className='absolute rounded-full border left-[18%] lg:left-[22%] bottom-[-5%] flex flex-row bg-white border-solid border-orange-500 py-1  px-3  gap-1 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
        <button>Add to Cart</button>
        </div>
        </div>
        
       <div className='mt-3'>
       <p className='text-sm  text-orange-300'>{data.catagory}</p>
       <p className='text-base font-bold'>{data.name}</p>
       <p className='mb-7 text-orange-600' >${data.price}</p>
       </div>
        </div>
        
        
    )
  return (
    listItem
  )
}

export default Product_page