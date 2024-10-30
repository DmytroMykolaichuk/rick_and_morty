import Image from 'next/image';
import './globals.css'
import React from 'react';

export default async function NotFound():Promise<React.ReactNode> {

  return (
    <div  className='wrapper404 flex'>
      <div className='img_404'>
        <Image src='img/404.png' alt='error' style={{width:'100%',height:'auto'}}  priority={true}/>
      </div>
      <div className='error_404'> 
        <h1>404</h1>
      </div>
    </div>
  )
}