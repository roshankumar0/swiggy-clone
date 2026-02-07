import React from 'react'
import { dineoutData } from '../Utils/dineout'

const Dineouts = () => {
    const cards =
        dineoutData?.props?.pageProps?.widgetResponse?.success?.cards || []

    const getContent = (content) => {

        if (typeof content === 'string') {
            return <div>
                <p>{content.length > 30 ? `${content.slice(0, 639)}....` : content}</p>
                
            </div>
        }
        if (Array.isArray(content)) {
            return (
                <ul className="mt-2 space-y-1 flex flex-wrap gap-3">
                    {content.map((item, index) => (
                        <li
                            key={index}
                            className="rounded-lg border  text-sm p-4"
                        >
                            {item?.text}
                        </li>
                    ))}
                </ul>
            )
        }

        return null
    }

    return (
        <div>
            {cards.map((item, index) => {
                const card = item?.card?.card

                return (
                    <div key={index}>
                        <img
                            className='mt-[64px]'
                            src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                card?.imageId
                            }
                            alt=''
                        />

                        <h2 className='text-[24px] text-[#02060ceb] font-extrabold '>{card?.title}</h2>

                        {getContent(card?.content)}
                    </div>
                )
            })}
        </div>
    )
}

export default Dineouts