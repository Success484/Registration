import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex justify-center items-center bg-gradient-to-bl from-green-400 to-green-800 h-screen'>
        <main className='flex justify-center items-center bg-slate-100 h-[75%] w-[50%] rounded-3xl'>
            <div>
                <div className='text-center relative top-10'>
                    <h2 className='text-[24px] font-bold text-green-600 pt-10'>Sign up</h2>
                    <h2 className='font-semibold text-gray-400'>Join the fashion trends today!</h2>
                </div>
                <form action="" className='py-[20%] space-y-5'>
                    <div className='flex justify-center items-center'>
                        <main>
                            <label htmlFor="Full_name"  className='font-semibold text-gray-400'>Full Name</label><br />
                            <input type="text" name="full_name" id="full_name" className="w-[250px] md:w-[350px] h-[30px] bg-slate-100 border-b-4 border-green-500 outline-none" /><br />
                        </main>
                    </div>

                    <div className='flex justify-center items-center'>
                        <main>
                            <label htmlFor="Email"  className='font-semibold text-gray-400 '>Email</label><br />
                            <input type="email" name="email" id='email' className="w-[250px] md:w-[350px] h-[30px] bg-slate-100 border-b-4 border-green-500 outline-none" /><br />
                        </main>
                    </div>

                    <div className='flex justify-center items-center'>
                    <main>
                        <label htmlFor="Password"  className='font-semibold text-gray-400'>Password</label><br />
                        <input type="password" name="password" id="password" className="w-[250px] md:w-[350px] h-[30px] bg-slate-100 border-b-4 border-green-500 outline-none" />
                    </main>
                    </div>

                    <div className='flex justify-center items-center pt-10'>
                        <Link href={'/verify'} type='submit' className='bg-gradient-to-r from-green-400 to-green-600 text-white font-medium text-[20px] py-3 w-[250px] md:w-[350px] rounded-l-3xl rounded-r-3xl text-center'>Sign Up</Link>
                    </div>

                    <div className='flex justify-center items-center pt-2'>
                        <h2>Already a member? <Link href="/login" className='text-green-500 font-medium'>Sign in</Link></h2>
                    </div>
                </form>
            </div>
        </main>
    </div>
  )
}
