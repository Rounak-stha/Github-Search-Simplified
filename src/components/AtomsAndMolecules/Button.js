import colors from "tailwindcss/colors"

export default function Button({ onClick, className, size='sm', outlined = false, disabled = false, children }) {
    let padding, fontSize, border, background, text
    switch (size) {
        case 'sm':
            padding = 'py-2 px-[20px]'
            fontSize = 'text-[0.86em]'
            break
        case 'md':
            padding = 'py-[10px] px-6'
            fontSize = 'text-[0.96em]'
            break
        case 'lg':
            padding = 'py-3 px-7'
            fontSize = 'text-[0.96]'
            break
    }

    if (disabled) {
        background = 'bg-gray-8'
        text = 'text-gray-12'
    }

    else if (outlined) {
        background = 'bg-inherit'
        border = 'border border-emerald-500'
        text = 'text-emerald-500'
    }

    else {
        background = 'bg-emerald-500'
        text = 'text-white'
    }
    
    return (
        <button
            onClick={onClick} 
            type="button" 
            className={`${padding} ${fontSize} ${background} ${border} ${text} font-semibold ${!disabled && 'hover:shadow-around-md'} ${disabled && 'cursor-not-allowed'} hover:shadow-emerald-500/50 rounded-md ${!disabled && 'active:scale-95'} ${className}`}
        > { children }
        </button>
    )
}