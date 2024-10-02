import React, { useState, useEffect } from 'react';
import Swiper from 'swiper'; // Assuming you're using Swiper

function Darshan() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const swiper_thumbs = new Swiper('.nav-for-slider', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 4,
    });

    const swiper = new Swiper('.main-slide-carousel', {
      slidesPerView: 1,
      effect: 'fade',
      thumbs: {
        swiper: swiper_thumbs,
      },
    });
  }, []);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div>
      <style>
        {`
          .nav-for-slider .swiper-slide {
            cursor: pointer;
            margin-right: 0 !important;
          }
          .swiper-wrapper {
            height: auto;
          }
          .nav-for-slider .swiper-slide img {
            border: 2px solid transparent;
            border-radius: 28px;
          }
          .nav-for-slider .swiper-slide-thumb-active img {
            border-color: rgb(79 70 229);
          }
          
          .lightbox {
            display: ${lightboxImage ? 'flex' : 'none'};
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
          }
          .lightbox-image {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
          .close {
            color: #fff;
            font-size: 3em;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
          }
          .gallery {
            width: 90vw;
            max-width: 1200px;
            margin: 0 auto;
            grid-template-rows: 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
          }
          .gallery img {
            max-width: 100%;
            cursor: pointer;
          }
        `}
      </style>
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
          <div className="mb-16">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold">Our Gallery</h2>
            <p className="w-full text-center text-gray-600 text-lg">Explore the essence of beauty in our gallery's intimate space.</p>
          </div>
          <div className="flex flex-col-reverse gap-8 mx-auto">
            <div className="slider-box flex flex-col xl:flex-row gap-8">
              <div className="box xl:w-[1062px] w-full gallery">
                <div className="swiper main-slide-carousel swiper-container relative">
                  <div className="swiper-wrapper">
                    {['1713943683.png', '1713943709.png', '1713943720.png', '1713943731.png'].map((image, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                          <img
                            src={`https://pagedone.io/asset/uploads/${image}`}
                            alt="Gallery"
                            className="gallery-image w-full h-full mx-auto rounded-3xl object-cover"
                            onClick={() => openLightbox(`https://pagedone.io/asset/uploads/${image}`)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="xl:w-[126px] w-full">
                <div className="nav-for-slider">
                  <div className="swiper-wrapper justify-center md:gap-7 gap-4 xl:flex-col">
                    {['1713943683.png', '1713943709.png', '1713943720.png', '1713943731.png'].map((thumb, index) => (
                      <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]" key={index}>
                        <img
                          src={`https://pagedone.io/asset/uploads/${thumb}`}
                          alt="Gallery thumbnail"
                          className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 hover:border-indigo-600 object-cover"
                          onClick={() => openLightbox(`https://pagedone.io/asset/uploads/${thumb}`)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {lightboxImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <span className="close" onClick={closeLightbox}>
                &times;
              </span>
              <img src={lightboxImage} alt="Lightbox" className="lightbox-image" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Darshan;
