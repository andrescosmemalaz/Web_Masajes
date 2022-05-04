import React, { useState } from 'react'
import Dcards from './Dcards'
import "../product/Product.css"
import "./Services.css"
import Sdata from "./Sdata"


const AllItem = () => {
        const [items, setItems] = useState(Sdata)
    return (
    <>
        <section className='product desi mtop'>
            <div className='container'>
                <div className='content grid'>
                    {items.map((item) => {
                    return <Dcards key={item.id} item={item} images={item.img}/>
                    })}
                </div>
            </div>
        </section>
    </>  
)
}

export default AllItem