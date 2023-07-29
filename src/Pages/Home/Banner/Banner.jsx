import React from 'react';
import doctor1 from '../../../assets/doc-1.jpeg';
import doctor2 from '../../../assets/doc-2.jpeg';
import doctor3 from '../../../assets/doc-4.jpeg';
import doctor4 from '../../../assets/doc-3.jpeg';

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1664299926240-c1703db6456a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Slide 1"
          className="w-full rounded-xl"
        />

        <div className="absolute items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-5xl font-bold">WE CARE ABOUT YOUR HEALTH</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt
              libero, eius molestias,
            </p>
            <div>
              <button className="btn btn-success mr-5">Discover More</button>
              <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Slide 2"
          className="w-full rounded-xl"
        />
        <div className="absolute items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-5xl font-bold">WE CARE ABOUT YOUR HEALTH</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt
              libero, eius molestias,
            </p>
            <div>
              <button className="btn btn-success mr-5">Discover More</button>
              <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-1">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1661308307351-46de448bd3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Slide 3"
          className="w-full rounded-xl"
        />
        <div className="absolute items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-5xl font-bold">WE CARE ABOUT YOUR HEALTH</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt
              libero, eius molestias,
            </p>
            <div>
              <button className="btn btn-success mr-5">Discover More</button>
              <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-1">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=547&q=80"
          alt="Slide 4"
          className="w-full rounded-xl"
        />
        <div className="absolute items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-5xl font-bold">WE CARE ABOUT YOUR HEALTH</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt
              libero, eius molestias,
            </p>
            <div>
              <button className="btn btn-success mr-5">Discover More</button>
              <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-1">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
