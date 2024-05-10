import React from 'react'

const NewsLetter = () => {
    return (
        <div id='newsLetter' className='flex flex-col gap-3 max-w-[300px]'>
            <h4 className='text-lg uppercase'>Newsletter</h4>
            <form className='grid grid-cols-3 grid-rows-2 gap-2'>
                <input className="col-span-3 indent-2 py-2 border-[1px] border-white bg-transparent rounded-lg" type="email" placeholder='Digite seu e-mail' id='email' name='email' required />
                <input className="col-span-2 indent-2 py-2 border-[1px] border-white bg-transparent rounded-lg" type="name" placeholder='Digite seu nome' id='name' name='name' required />
                <input className="col-span-1 bg-white text-blue-800 py-1 rounded-lg hover:text-white hover:bg-transparent border-2 border-white transition duration-500" type="submit" id='submit' name='submit' />
            </form>
        </div>
    )
}

export default NewsLetter