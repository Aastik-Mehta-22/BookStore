import React from 'react'
   
const Cards = ({item}) => {
  
  return (
    <>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl my-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ">
            <figure>
                <img
                src={item.image}
                alt="Shoes"
                className='max-w-xs max-h-xs' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between ">
                <div className="badge badge-outline p-4">${item.price}</div>
                <div className="badge badge-outline hover:bg-primary cursor-pointer hover:text-white p-4">Buy Now</div>
                </div>
            </div>
            </div>
        </div> 
    </>
  )
}

export default Cards