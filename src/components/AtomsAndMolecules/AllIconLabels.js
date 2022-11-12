import IconLabel from "./IconLabel";
import Star from '../Icons/Star'
import Eye from "../Icons/Eye";
import Fork from "../Icons/Fork";

export function StarIconLabel({ number }) {
    return (
        <IconLabel Icon={Star} name='stars' number={number} className='bg-yellow-0 text-yellow-8' />
    )
}

export function ForkIconLabel({ number }) {
    return (
        <IconLabel Icon={Fork} name='forks' number={number} className='bg-blue-0 text-blue-8' />
    )
}

export function EyeIconLabel({ number }) {
    return (
        <IconLabel Icon={Eye} name='watchers' number={number} className='bg-green-0 text-green-8' />
    )
}