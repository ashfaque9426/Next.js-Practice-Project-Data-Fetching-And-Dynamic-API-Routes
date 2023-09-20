import React from 'react';
import Image from 'next/image'

const layout = ({ children }) => {
    return (
        <main className='md:h-[60vh] flex flex-col md:flex-row justify-center items-center gap-12' role='main'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  aspect-ratio"
                src="/testimonial-image-4.jpg"
                alt="Next.js Logo"
                width={315}
                height={0}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/blur-1889747_640.jpg'
            />
            {children}
        </main>
    );
};

export default layout;