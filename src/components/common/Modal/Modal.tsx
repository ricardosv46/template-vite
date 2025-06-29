import React, { HTMLAttributes, ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

const classNames = (cln: Array<string | undefined>) => {
  return cln.join(' ').trim()
}
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  whitoutBackground?: boolean
  topAbsolute?: boolean
}

export const Modal = ({ isOpen, onClose, children, whitoutBackground, topAbsolute, ...props }: ModalProps) => {
  return (
    <Portal>
      <div
        className={classNames([
          isOpen ? (topAbsolute ? 'opacity-100 z-100' : 'opacity-100 z-50') : 'opacity-0 -z-10',
          'fixed top-0 w-full h-screen grid place-items-center '
        ])}>
        <Overlay show={isOpen} onClick={onClose} />
        <div className="z-20 grid place-items-center">
          <div
            className={classNames([
              whitoutBackground
                ? 'flex flex-col items-center'
                : 'bg-white flex flex-col items-center  md:px-auto px-1 lg:px-5 min-w-[320px] w-[85vw] md:w-[500px] lg:w-[1024px] max-w-[95vw] max-h-[90vh] overflow-y-auto',
              props.className ? props.className : 'py-10 lg:py-16'
            ])}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
