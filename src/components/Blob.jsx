import { useEffect, useRef } from 'react'
import '../index.css';

const Blob = () => {
  const blobRef = useRef()

  useEffect(() => {
    const moveBlob = (e) => {
      blobRef.current.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      )
    }

    window.addEventListener('pointermove', moveBlob)
    return () => window.removeEventListener('pointermove', moveBlob)
  }, [])

  return (
    <div
      ref={blobRef}
      className="fixed z-0 w-[400px] h-[400px] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    ></div>
  )
}

export default Blob
