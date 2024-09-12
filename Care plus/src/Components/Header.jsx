import React from 'react'
import Headerbg from '../assets/Header-bg.svg';

const Header = () => {
    return (
        <div className="bg-[url('https://assets-global.website-files.com/65f19ff47c0ac41abb16b0fa/6630cd7f8134a084e12c0f65_head-bg.svg')] bg-[#faeada] bg-center bg-repeat-x pt-3 pb-5">
            <div className="container mx-auto flex justify-between items-center pl-9 pr-9 bg-transparent">
                <div className="text-black text-sm flex leading-[1] index-1 bg-[#f4765b]">
                    <div className='bg-[#f4765b]'>From bowls to beds, we've got it all.</div>

                </div>
                <div className="text-black text-sm flex leading-[1] index-1">
                    <div className='bg-[#f4765b]'>Summer Deal 20% Off</div>
                </div>
            </div>
        </div>
    )
}

export default Header