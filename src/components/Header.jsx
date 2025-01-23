import Link from "next/link";

export default function Header(){
    return (
        <nav className='flex justify-between h-16 bg-black opacity-80 overflow-hidden align-middle sticky top-0'>
            <span className='text-3xl text-slate-50 p-3 pl-6 sm:pl-16'>DevanshS</span>
            <div className='align-middle pt-4'>
                <Link href='/' className='p-2 sm:p-6 align-middle text-lg hover:bg-slate-900 text-slate-300'>Link 1</Link>
                <Link href='/' className='p-2 sm:p-6 align-middle text-lg hover:bg-slate-900 text-slate-300'>Link 2</Link>
                <Link href='/' className='p-2 sm:p-6 align-middle text-lg hover:bg-slate-900 text-slate-300'>Link 3</Link>
                <Link href='/' className='p-2 sm:p-6 align-middle text-lg hover:bg-slate-900 text-slate-300'>Link 4</Link>
            </div>
        </nav>
    )
}