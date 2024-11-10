import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookOM from './BookOM';
import Cards from './Cards';

function Freebook() {

    const filterData = list.filter((data) => data.category === "Free");
   

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
            <h1 className='font-bold text-2xl text-primary'>Free Offered Books</h1>
            <div>
            <Slider {...settings}>
            {filterData.map((item) => (
                <Cards item={item} key={item.id}/>
            ))}
            </Slider>
            </div>

            <div  className='flex justify-between'>
                <div>
            <h1 className='font-bold text-2xl text-primary my-10'> 🌟 Book of the Week 🌟</h1>
            <div className=' my-10'>
                <BookOM />
            </div>
            </div>
            <div>
            <h1 className='font-bold text-2xl text-primary my-10'> 🌟 Book of the Month 🌟</h1>
            <div className=' my-10'>
                <BookOM />
            </div>
            </div>
            <div>
            <h1 className='font-bold text-2xl text-primary my-10'> 🌟 Book of the Year 🌟</h1>
            <div className=' my-10'>
                <BookOM />
            </div>
            </div>
            </div>
            
            <div className="join my-4 flex justify-center">
            <input className="input input-bordered join-item" placeholder="Email" />
            <button className="btn join-item rounded-r-full">Subscribe</button>
            </div>
            
        </div>
    </>
  )
}

export default Freebook