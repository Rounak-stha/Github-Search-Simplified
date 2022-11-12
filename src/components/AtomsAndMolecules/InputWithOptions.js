export default function InputWithOptions({ name, options, setValue }) {
    return (
        <div>
            <input 
                onChange={(e) => setValue(e.target.value)} 
                placeholder={name} 
                list={ name + 'inputOptions'} 
                name="inputWithOptions" 
                className="text-sm h-9 p-2 px-3 outline-none border focus:border-blue-5 rounded-md block bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            />
            <datalist 
                id={name + 'inputOptions'}
            >
                {
                    options && options.map(optn => <option key={optn} value={optn} />)
                }
            </datalist> 
        </div>
    )
}