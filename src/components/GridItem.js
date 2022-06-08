import React from 'react'

export const GridItem = ({ id, title, url }) => {
    return (

        <div className='card animate__animated animate__bounce animate__delay-2s'>
            <li>{title}</li>
            <img src={url} alt={title} />
        </div>
    )

}
