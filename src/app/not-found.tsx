import Image from 'next/image';
import './globals.css'
import error_404 from  '../img/404.png';
export default async function NotFound() {

  return (
    <div  className='wrapper404 flex'>
      <div className='img_404'>
        <Image src={error_404} alt='error' style={{width:'100%',height:'auto'}}/>
      </div>
      <div className='error_404'> 
        <h1>404</h1>
      </div>
    </div>
  )
}