import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Cards from "./Cards"
import ProductData from "./ProductData"
import "./Product.css"

const Product = () => {
return (
    <>
        <HeadTitle/>

        <section className='product top'>
            <div className='container grid'>
                {
                    ProductData.map((value) =>{
                        return <Cards images={value.img}  title={value.title} />
                    })}
            {/* <Cards/> */}
            </div>
        </section>
    </>
)
}
export default Product