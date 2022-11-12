export default function SelectOptions({ name, options, setValue}) {
    return (
        <div className="">
            <select 
                onChange={(e) => setValue(e.target.value)} 
                className="text-sm p-2 rounded-md block bg-gray-700 border focus:border-blue-5 border-gray-600 placeholder-gray-400 text-white"
            >
                <option value=''>{name}</option>
                {
                   options && options.map(optn => <option  key={optn} value={optn}>{optn}</option>)
                }
            </select>
        </div>
    )
}