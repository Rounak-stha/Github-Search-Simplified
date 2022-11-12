import { Check, Cross } from "../Icons";
import Badge from "./Badge";

export function CheckBadge({ size }) {
    return <Badge size={size} Icon={Check} colorClass='bg-green-1 text-green-12' />
}

export function CrossBadge({ size }) {
    return <Badge size={size} Icon={Cross} colorClass='bg-red-1 text-red-12' />
}