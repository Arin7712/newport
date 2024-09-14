import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='mt-20 ml-20 mr-20'>

      <div className='flex flex-col w-6/12 gap-4'>
        <div className='text-[#4c2f2f] font-semibold'>TESTIMONIALS</div>
        <div className='text-[30px] bg-clip-text text-transparent bg-custom-gradient'>Devling deep into the world of online presence, seeking kerdos</div>
      </div>

      <div className='grid grid-cols-3 mt-20'>
        <div className='flex flex-col gap-4'>
            <div>
                <Image src='/testimonial1.png' width={420} height={360} className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Sep 2024</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Landing Page</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <Image src='/testimonial1.png' width={420} height={360} className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Sep 2024</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Landing Page</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <Image src='/testimonial1.png' width={420} height={360} className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Sep 2024</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Landing Page</p>
                <p className='text-[12px] text-zinc-700 border-zinc-700 border p-1 rounded-[15px]'>Development</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
