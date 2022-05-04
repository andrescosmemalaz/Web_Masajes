import React, {useState, useEffect} from 'react'
import HeadTitle  from '../common/HeadTitle/HeadTitle'
import "./SinglePage.css"
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import EmptyFile from '../common/EmptyFile/EmptyFile'
import Sdata from '../components/Servicess/Sdata'


export const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))

    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle/>

  {item ? (
    <section className='single-page top'>
      <div className='container'>
        <Link to = '/services' className='primary-btn back'>
          <i className='fas fa-long-arrow-alt-left'></i> Volver
        </Link>

        <article className='content flex'>
          <div className='main-content'>
            <img src={item.image} alt=''/>
            <p>{item.desc}</p>
            <p>{item.desc}</p>
            <div className='para flex_space'>
            <p>{item.sidepara}</p>
            <p>{item.sidepara}</p>
            </div>
            <h1> ¿En qué consiste {item.title} ?</h1>
            <p>{item.desc}</p>

            <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
            </div>
            <p>{item.desc}</p>
          
          </div>
          {/* --------- side-content--------- */}
          <div className='side-content'>
                <div className='box'>
                  <h2>¿Cómo podemos ayudarte?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Llamános
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}
        </article>
      </div>
    </section>
    ) : (
      <EmptyFile/>
    )}
  </> 
) 
}

export default SinglePage