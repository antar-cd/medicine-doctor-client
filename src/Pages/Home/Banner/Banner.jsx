import doctor1 from '../../../assets/doc-1.jpeg'
import doctor2 from '../../../assets/doc-2.jpeg'
import doctor3 from '../../../assets/doc-4.jpeg'
import doctor4 from '../../../assets/doc-3.jpeg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={doctor1} className="w-full rounded-xl" />

                <div className="absolute  items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl font-bold'>WE CARE ABOUT YOUR HEALTH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt libero, eius molestias,</p>
                        <div>
                            <button className="btn btn-success mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-8 right-5 bottom-1'>
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={doctor2} className="w-full rounded-xl" />
                <div className="absolute  items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl font-bold'>WE CARE ABOUT YOUR HEALTH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt libero, eius molestias,</p>
                        <div>
                            <button className="btn btn-success mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={doctor3} className="w-full rounded-xl" />
                <div className="absolute  items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl font-bold'>WE CARE ABOUT YOUR HEALTH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt libero, eius molestias,</p>
                        <div>
                            <button className="btn btn-success mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={doctor4} className="w-full rounded-xl" />
                <div className="absolute  items-center rounded-xl h-full flex left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl font-bold'>WE CARE ABOUT YOUR HEALTH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita reiciendis amet asperiores deserunt libero, eius molestias,</p>
                        <div>
                            <button className="btn btn-success mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;