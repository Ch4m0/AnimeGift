import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'esta cargando...' :
                <ul className='card-grid'>

                    {data.map(img =>
                        <GridItem key={img.id} {...img}></GridItem>
                    )}
                </ul>

            }
        </>
    )
}
