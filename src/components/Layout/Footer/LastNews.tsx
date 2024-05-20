import React from 'react'

import FooterNews from './FooterNews'

import { news } from '../../PortalFoz/PortalSection'

const LastNews = () => {
    return (
        <div id='lastNews' className='flex flex-col gap-2 md:max-w-[375px] lg:min-w-[250px]'>
            <h4 className='text-lg uppercase md:text-2xl lg:text-lg'>Últimas notícias</h4>
            {news.map((item, index) => (
                <FooterNews key={index} title={item.title} />
            ))}
        </div>
    )
}

export default LastNews