"use client"

import React, { useEffect, useState } from 'react';


const page = ({params}) => {
    const {_id} = params;
    const [user, setUser] = useState(null);
    useEffect(()=> {
        const fetchData = async () => {
            await fetch(`/api/singleUserInfo/${_id}`).then(res => res.json()).then(data => setUser(data))
        }
        fetchData();
    }, []);

    return (
        user === null ? <h1 className='text-2xl font-bold text-center'>Loading</h1> :
        <article className='w-full p-5 md:w-2/3 md:mx-auto flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl font-bold'>Hi {user?.userName}</h1>
            <p className='text-xl font-semibold'>Your Email: {user?.email}</p>
            <p className='text-lg font-semibold'>Your Password: {user?.password}</p>
        </article>
    );
};

export default page;