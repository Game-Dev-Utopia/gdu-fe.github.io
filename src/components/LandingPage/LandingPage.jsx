"use client"
import VideoBackground from './VideoBackground'
import React, { useRef, useEffect,useState } from 'react';
import { getRequest } from '../../api/api';
import Diamonds from './Diamonds';
import Typewriter from "typewriter-effect";

  const LandingPage = () => {
    const [videoPath, setVideoPath] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const getLinks = async () => {
        try {
            const response = await getRequest("/api/hero");
            const { img1, img2, img3, video } = response[0];
            setImage1(img1);
            setImage2(img2);
            setImage3(img3);
            setVideoPath(video);
            console.log(video)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        try {
            getLinks();
        } catch (error) {
            console.log(error.message);
        }
    }, []);
    console.log(image1);
    return (

        <div >
    <div className="min-h-screen bg-cover  bg-gray-200 bg-center overflow-hidden">
    <VideoBackground videoPath={videoPath} />
    {(image1!=null && image2!=null && image3!=null)?<Diamonds image1={image1} image2={image2} image3={image3}/> :<> </> }
    
    <div className='w-full '>
      <div className='sm:text-9xl text-3xl  w-3/4 text-left font-bold text-yellow-500 ml-5 sm:mt-12  transform scale-y-150'>
        <Typewriter 
            options={{
                strings: [
                    "GameDevUtopia",
                    "GameDevUtopia",
                ],
                autoStart: true,
                loop: true,
            }}
        />
      </div>
    </div>
    
    <div className='my-5 sm:mt-20 sm:w-1/2 sm:text-2xl mx-2 px-2 sm:ml-10'>
      <p className='h-1/2 sticky text-base sm:text-2xl text-white flex items-center justify-center'>Designs that dazzle, games that enthrall. Welcome to our world where creativity meets play. Unleash your imagination and dive into endless possibilities</p>
    </div>
    <button className="text-center my-4 sm:my-5 mx-10 transform px-8 py-2 bg-slate-900 text-white text-2xl rounded-2xl shadow-md sm:h-16 sm:w-72 bg-opacity-50 ">
        Designs
    </button>
    <button className="text-center my-4 sm:my-5 mx-10 transform px-8 py-2 bg-slate-900 text-white text-2xl rounded-2xl shadow-md sm:h-16 sm:w-72 bg-opacity-50 ">
        Games
    </button>
  
  </div>
  
  </div>



  );
};

export default LandingPage;
