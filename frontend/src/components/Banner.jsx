import React from 'react'
import BannerImage from '../../public/Banner.png'

function Banner() {
  return (
    <>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img
            src={BannerImage}
            className="max-w-screen rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl font-bold ">👋 Hi there ,Welcome to learn something  <span className='text-5xl font-thin text-blue-500'>new</span></h1>
            <p className="py-6">
            Dive into a world of stories, knowledge, and adventure. Whether you're a fiction lover, a science enthusiast, or a business buff, we have books to satisfy every reader's curiosity. Start exploring and let your reading journey begin!
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary mx-4">Download App</button>
        </div>
        </div>
        </div>

    </>
  )
}

export default Banner