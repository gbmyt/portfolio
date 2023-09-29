"use client"
import { useEffect, useState } from 'react';
import '/css/modal.css'

import resumeData from '@/data/resumeData'
import ReactModal from 'react-modal';
import Image from './Image'

export default function About() {
  const [modalIsOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen(!modalIsOpen)
  }  
  
  useEffect(() => {
    ReactModal.setAppElement('body');

    function closeModal(e) {
      if(e.keyCode === 27){
        setOpen(!modalIsOpen)
      }
    }
    window.addEventListener('keydown', closeModal)
    return () => window.removeEventListener('keydown', closeModal)
  }, [])
  
  return (
    <>
      <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Resume</h2>

      <div onClick={handleClick}>
        <Image priority src={resumeData.imgSrc} alt="Resume" className=" border-solid border-2 border-gray-300" width="1200" height="1700" />

        <ReactModal id='mopen' isOpen={modalIsOpen}>
            <Image priority src={resumeData.imgSrc} alt="Resume" className="border-solid border-2 border-red" width="1200" height="1700" />
        </ReactModal>

      </div>

    </>
  )
}
