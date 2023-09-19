"use client"

import React from 'react';

const Register = () => {
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.userEmail.value;
        const userName = form.userName.value;
        const password = form.password.value;
        const userInfo = {
            email,
            userName,
            password
        }

        await fetch('/api/addUser', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json()).then(data => console.log(data))
        
        
    }
    
    return (
        <main role='main'>
            <h2 className='text-2xl font-bold my-12 text-center'>Please Register Here</h2>
            <form onSubmit={handleSubmit} className='w-full p-5 md:w-1/3 md:p-0 md:mx-auto flex flex-col gap-3'>
                <section className='flex flex-col gap-2'>
                    <label htmlFor="userName">User Name</label>
                    <input className='px-3 py-1 dark:text-black' type="text" name="userName" id="userName" placeholder='enter your name' />
                </section>
                <section className='flex flex-col gap-2'>
                    <label htmlFor="userEmail">User Email</label>
                    <input className='px-3 py-1 dark:text-black' type="email" name="userEmail" id="userEmail" placeholder='enter your email' />
                </section>
                <section className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input className='px-3 py-1 dark:text-black' type="password" name="password" id="password" placeholder='enter password' />
                </section>
                <input className='mt-5 border border-blue-600 rounded-lg py-2 hover:bg-blue-600 hover:cursor-pointer' type="submit" value="Submit" />
            </form>
        </main>
    );
};

export default Register;