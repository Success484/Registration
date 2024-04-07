"use client"
import React, { useState } from 'react';

export default function VerificationPage() {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerification = () => {
        // Handle verification logic here (e.g., send the verification code to the server for validation)
        console.log('Verifying code:', verificationCode);
    };

    return (
        <div className="container flex justify-center items-center pt-5">
            <form action="" className='border-2 pb-10 rounded-t-3xl drop-shadow-lg'>
                <div className='rounded-t-3xl'>
                    <div className='bg-green-600 w-fit rounded-t-3xl'>
                        <h2 className='text-white font-semibold text-3xl py-2 px-5 '>Your Verification Code</h2>

                    </div>
                    <h2 className='text-center py-5'>Enter the code sent to your email</h2>

                    <div className='flex justify-center items-center py-5'>
                        <input type="text" placeholder='xxxxxx' name='code' className='bg-gray-200 rounded-2xl h-12 text-[24px] text-center font-bold w-32 '/>
                    </div>

                    <h2 className='text-center text-gray-400 py-6'>Verification code is only for 25 minutes</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={handleVerification} className='bg-green-500 text-white hover:bg-green-700 px-10 py-3 rounded-xl'>Verify code</button>
                </div>
            </form>
        </div>
    );
}
