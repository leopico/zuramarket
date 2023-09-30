import Image from 'next/image'
import React from 'react'

const Tab = () => {
    return (
        <section className='container pl-8 pt-4 mb-5 pr-7'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                <div className="bg-[#24252d] p-1 lg:p-2 rounded space-y-2 cursor-pointer">
                    <div className="relative w-full h-52 rounded overflow-hidden">
                        <Image
                            alt="blog-img"
                            src="/images/HACk1.png"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-lg">Hippie Alien Cosmic Klub</span>
                    </div>
                    <span className='text-sm text-[#8454d8] '>Zuraverse</span>
                </div>
                <div className="bg-[#24252d] p-1 lg:p-2 rounded space-y-2 cursor-pointer">
                    <div className="relative w-full h-52 rounded overflow-hidden">
                        <Image
                            alt="blog-img"
                            src="/images/HACk2.png"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-lg">ZURIAN</span>
                    </div>
                    <span className='text-sm text-[#8454d8] '>Zuraverse</span>
                </div>
                <div className="bg-[#24252d] p-1 lg:p-2 rounded space-y-2 cursor-pointer">
                    <div className="relative w-full h-52 rounded overflow-hidden">
                        <Image
                            alt="blog-img"
                            src="/images/HACk3.png"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-lg">ZURAPARK LAND</span>
                    </div>
                    <span className='text-sm text-[#8454d8] '>Zuraverse</span>
                </div>
            </div>
        </section>
    )
}

export default Tab