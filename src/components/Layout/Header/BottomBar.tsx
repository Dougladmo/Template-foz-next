import React from 'react'

const BottomBar = () => {
    return (
        <div className='flex flex-col gap-[1px]'>
            <div className="w-full h-[114px] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900"></div>
                <img
                    src="/asset%208.jpeg"
                    alt="Imagem de fundo"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white-default">
                    <div className="flex items-center justify-center">
                        <div className="h-[1px] bg-white-default w-9 mr-3"></div>
                        <p className="uppercase font-sans">Direito</p>
                        <div className="h-[1px] bg-white-default w-9 ml-3"></div>
                    </div>
                    <h2 className="uppercase font-bold text-2xl text-center">Administrativo</h2>
                </div>
            </div>
            <div className="w-full h-[114px] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900"></div>
                <img
                    src="/asset%209.jpeg"
                    alt="Imagem de fundo"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white-default">
                    <div className="flex items-center justify-center">
                        <div className="h-[1px] bg-white-default w-9 mr-3"></div>
                        <p className="uppercase font-sans">Direito</p>
                        <div className="h-[1px] bg-white-default w-9 ml-3"></div>
                    </div>
                    <h2 className="uppercase font-bold text-2xl text-center">Tributário</h2>
                </div>
            </div>
            {/* #133041 */}
            <div className="w-full h-[114px] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900"></div>
                <img
                    src="/asset%2010.jpeg"
                    alt="Imagem de fundo"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white-default">
                    <div className="flex items-center justify-center">
                        <div className="h-[1px] bg-white-default w-9 mr-3"></div>
                        <p className="uppercase font-sans">Direito</p>
                        <div className="h-[1px] bg-white-default w-9 ml-3"></div>
                    </div>
                    <h2 className="uppercase font-bold text-2xl text-center">Civil</h2>
                </div>
            </div>
        </div>
    )
}

export default BottomBar

