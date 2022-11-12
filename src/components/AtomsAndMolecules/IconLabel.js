export default function IconLabel({ Icon, name, number, className }) {
    return (
        <div className={"inline-block py-1 px-2 rounded-sm cursor-context-menu " + className}>
            <div className="flex items-center text-[0.9rem]">
                <span className="h-[0.8rem] w-[0.8rem] mr-1">{ Icon ? <Icon /> : '' }</span>
                <p>{ name ? name : 'default' } <span className="text-[0.86rem]">{ number ? number : ''}</span></p>
            </div>
        </div>
    )
}