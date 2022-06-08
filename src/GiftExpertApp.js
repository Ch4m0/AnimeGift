import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])


    return (
        <>
            <h2 className='animate__animated animate__flash'>giftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category}></GifGrid>)
                }
            </ol>

        </>
    )
}

export default GiftExpertApp;