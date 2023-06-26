import about from '../../../assets/About.jpeg'
import abouts from '../../../assets/about-2.jpeg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row space-x-6">
               <div className='lg:w-1/2 relative'>
                 <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
                 <img src={abouts} className="w-1/2 absolute right-5 rounded-lg border-8 border-white rounded-lg shadow-2xl" />
               </div>
                <div className='lg:w-1/2 space-y-2 p-4'>
                    <h3 className='text-5xl text-green-600'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-success">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;