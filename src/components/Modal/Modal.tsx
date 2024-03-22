'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";

import css from './Modal.module.css';

export default function Modal({children}:{children:React.ReactNode}) {
    const router = useRouter()

    useEffect(() =>{

        const handleESC=(event : KeyboardEvent)=>{
            if(event.key === "Escape")router.back();
        }

        document.addEventListener('keydown',handleESC)

        return ()=>document.removeEventListener('keydown',handleESC)

    },[router])

return(
    // bug next scroll
    <div>
        <div className={css.backDrop} onClick={(e)=>{if(e.currentTarget===e.target)router.back()}}>
            <div className={css.modal}>
                <button type="button" onClick={()=>router.back()} className={`${css.btn_close} flex`}><IoCloseCircleSharp size={25}/></button>
                {children}
            </div>
        </div>
    </div>
)
}