import React from 'react'

const AboutFooter = () => {
    return (
        <div id='aboutFooter' className='flex flex-col gap-3 md:max-w-[375px] lg:max-w-[300px]'>
            <h4 className='text-lg uppercase md:text-2xl lg:text-lg'>Sobre a foz advogados</h4>
            <p className='text-sm md:text-base leading-snug text-gray-500 text-justify lg:text-xs '>A FOZ Sociedade de Advogados completou quarenta e quatro anos de existência.
                <span className='block mt-3'>Durante esse tempo, construímos uma conduta digna de confiança, realizações, conquistas, vitórias e a consciência de que o nosso maior compromisso é estabelecer o pleno Direito. </span></p>
        </div>
    )
}

export default AboutFooter