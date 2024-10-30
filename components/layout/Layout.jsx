import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto'>
        {/* start Navbar */}
        <nav className='navbar w-full  my-[40px] flex justify-between items-center max-[768px]:my-[30px]'>
            {/* login */}
            <div className="loginNav">
                <Link href='/' className='bg-[#ff3e54da] w-fit rounded-md px-3 py-3 text-[#FFF] font-bold'>تماس بگیرید</Link>
            </div>
            {/* menu */}
            <div className="menu flex flex-1 mx-5 gap-8 max-[992px]:gap-4 max-[992px]:mx-3">
                <li className='text-[#0E1F51] font-bold text-[20px]'><Link href='/'>صفحه اصلی</Link></li>
                <li className='text-[#0E1F51] font-bold text-[20px]'><Link href='/'>درباره ما</Link></li>
                <li className='text-[#0E1F51] font-bold text-[20px]'><Link href='/'>خدمات</Link></li>
                <li className='text-[#0E1F51] font-bold text-[20px]'><Link href='/'>نمونه کارها</Link></li>
                <li className='text-[#0E1F51] font-bold text-[20px]'><Link href='/'>بلاگ</Link></li>
            </div>
            {/* logo */}
            <div className="logo_nav flex items-center flex-row-reverse gap-3">
                <img src="img/logo.png" alt="logoNav" />
                <span className='font-bold text-[#0E1F51] text-[20px]'>IT App</span>
            </div>
        </nav>
        {/* start Main Page */}
        <div className="main">{ children }</div>
        {/* start footer */}
    </div>
  )
}

export default Layout