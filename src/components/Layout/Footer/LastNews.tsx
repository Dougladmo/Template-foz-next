import React from 'react'

import FooterNews from './FooterNews'

import { news } from '../../PortalFoz/PortalSection'

const LastNews = () => {
    return (
        <div id='lastNews' className='flex flex-col gap-2 md:max-w-[200px] lg:max-w-[300px]'>
            <h4 className='text-lg uppercase'>Últimas notícias</h4>
            {news.map((item, index) => (
                <FooterNews key={index} title={item.title} />
            ))}
        </div>
    )
}

export default LastNews