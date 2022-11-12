export default function Input({ value, onChange, setValue, onKeyDown, placeholder, disabled=false, className }) {
    return (
        <input
          type='text'
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={`bg-input-dark ${disabled && 'cursor-not-allowed'} w-full rounded-md px-4 py-2 border-none text-sky-50 outline outline-2 outline-bdr-dark focus:outline-blue-4 ${ className & className }`}
        />
    )
}