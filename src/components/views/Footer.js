
export default function Footer() {
    return (
        <footer className='py-4 mt-5 text-light border-t-2 border-bdr-dark flex justify-around flex-wrap'>
            <span className='hover:underline hover:text-blue-6'><a href='https://rounakstha.me/design'>Design</a></span>
            <span className='hover:underline hover:text-blue-6'><a href='https://github.com/Rounak-stha/Github-Search-Simplified'>Github</a></span>
            <span>&copy; Rounak Shrestha {(new Date()).getFullYear()}</span>
        </footer>
    )
}