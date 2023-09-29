'use client'
import { useCallback, useEffect, useState } from 'react'
import '/css/modal.css'

import resumeData from '@/data/resumeData'
import ReactModal from 'react-modal'
import Image from './Image'

export default function About() {
  const [modalIsOpen, setOpen] = useState(false)

  useEffect(() => {
    ReactModal.setAppElement('body')

    const modal = document.getElementById('modal')
    modal?.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    })
  }, [])

  function handleClick() {
    setOpen(!modalIsOpen)
  }

  function handleFocusModal() {
    const modal = document.getElementById('modal')
    modal?.focus()
  }

  return (
    <>
      <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Resume</h2>

      <div tabIndex={-1} id="modal" onClick={handleClick} role="presentation">
        <Image
          priority
          src={resumeData.imgSrc}
          alt="Resume"
          className=" border-solid border-2 border-gray-300"
          width="1200"
          height="1700"
        />

        <ReactModal onAfterOpen={handleFocusModal} id="mopen" isOpen={modalIsOpen}>
          <Image
            priority
            onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
            src={resumeData.imgSrc}
            alt="Resume"
            className="border-solid border-2 border-red"
            width="1200"
            height="1700"
          />
        </ReactModal>
      </div>
    </>
  )
}
