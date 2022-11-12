export default function Container({ children, glow, glowClass, outlined = false, className }) {
    return ( <div className={`group relative rounded-md w-full ${className}`}>
                    <div className={`w-full h-full ${outlined ? 'bg-back-dark' : 'bg-gray-12'} rounded-md p-5 ${outlined && glowClass && 'group-hover:border-white :group-hover:border-back-'} border-2 border-bdr-dark`}>
                        { children }
                    </div>
                </div>
    )
}