import { FiSend } from 'react-icons/fi'

export default function SendIconButton({ onClick, loading, size='sm', className }) {
    let btnSize, iconSize

    switch(size) {
        case 'sm':
            btnSize = 'h-8 w-8'
            iconSize = 16
            break
        case 'md':
            btnSize = 'h-10 w-10'
            iconSize = 18
            break 
        case 'lg':
            btnSize = 'h-12 w-12'
            iconSize = 20
            break 
    }

    return (
        <button
            className={`${loading && 'cursor-progress'} ${btnSize} flex justify-center items-center bg-[#1E90FF] rounded-full text-sky-50 font-bold active:scale-90 ${className}`}
            disabled={loading}
            onClick={onClick}
        >
            { loading ? <span className={`${loading && 'animate-ping'} h-2 w-2 rounded-full bg-white`}></span> : <span className='inline-block mr-[1px] mt-[1px]'><FiSend size={iconSize} /></span> }
        </button>
    )
}