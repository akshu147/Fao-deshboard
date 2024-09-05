import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";

const Womenslider = () => {
  const [currentslide, setcurrentslide] = useState(4)
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setcurrentslide(1.4)
      }
      else {
        setcurrentslide(4)
      }

    })

  }, [])



  var settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: currentslide,
    slidesToScroll: 1,

  };
  return (
    <>

      <Slider {...settings}>
        <div>
          <div className='p-2 slideritem'>
            <figure className='position-relative'>
              <img className='img1' width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130302-2AY.01_450x.jpg?v=1721141419" alt="" />
              <img className='img2' width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130302-2AY.02_450x.jpg?v=1721141419" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             
            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The SeaCell™ Crewneck Cardigan in Dark Chocolate</div>
              <div><FaRegHeart /></div>
            </div>
            <p className='sliderprice'>CA$149.00</p>
            <p>color</p>

          </div>

        </div>

        <div>
          <div className='p-2 slideritem'>
            <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2410193-002.01_2b3c5660-b314-4e39-89d4-8bfa834964c2_450x.jpg?v=1725031138" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2410193-002.02_2a9071b5-19be-4bf8-86d4-66585fabc637_450x.jpg?v=1725031138" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Capital Berka In Black</div>
              <div><FaRegHeart /></div>
            </div>
            <p>lsdkf</p>
            <p>lasdkf</p>
          </div>

        </div>


        <div>
          <div className='p-2 slideritem'>
             <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2310170-1AA.01_450x.jpg?v=1722278596" alt="" />
              <img width="100%" height="470px" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/PRE-FALL_WWLOOK4.0671_e1618879-a636-460d-a0f8-5bdedcc191cb_600x.jpg?v=1723645281" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Relaxed 2-Button Blazer in Light Grey</div>
              <div><FaRegHeart /></div>
            </div>
            <p>sadf</p>
            <p>color</p>
          </div>
        </div>


        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130297-4BO.01_450x.jpg?v=1723489143" alt="" />
              <img width="100%" height="470px" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/PRE-FALL_WW_LOOK3.-01_600x.jpg?v=1724254190" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Button-Up Sweater Vest in Space Blue</div>
              <div><FaRegHeart /></div>
            </div>
            <p>lksjkf</p>
            <p>laskdj</p>
          </div>
        </div>


        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2210502-5AR.01_5effc360-3d0d-4b93-8f72-ac04bf8c2df2_450x.jpg?v=1722885550" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2410188-556.02_88208fb5-72bb-48c7-944f-d4fc8452e322_450x.jpg?v=1723646027" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Amelia Balloon Pant in Green</div>
              <div><FaRegHeart /></div>
            </div>
            <p>laskdf</p>
            <p>laksdjf</p>
          </div>
        </div>

        <div>
          <div className='p-2 slideritem'>
           <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130270-5DS.01_450x.jpg?v=1723490273" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2210502-5AR.02_279e680b-52b8-45fc-a0a9-070e52d9f366_450x.jpg?v=1722885550" alt="" />

              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Skyline Maxi Hooded Coat in Rosin</div>
              <div><FaRegHeart /></div>
            </div>
            <p>asdlfj</p>
            <p>a;lsdf</p>
          </div>
        </div>

        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2310173-5JR.01_450x.jpg?v=1721145186" alt="" />
              <img width="100%" height="470px" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/PRE-FALL_WWLOOK1_a62d1d09-6130-4b6b-9277-9c667b136dee_450x.jpg?v=1723645181" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Lightweight Crewneck Sweater in Wasabi</div>
              <div><FaRegHeart /></div>
            </div>
            <p>lsdjf</p>
            <p>lasjf</p>
          </div>
        </div>


        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2410188-556.01_3fd79b5e-119a-48a6-a43f-4c93bdef1268_450x.jpg?v=1723646028" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130270-5DS.02_450x.jpg?v=1723490274" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div className='d-flex justify-content-between'>
              <div className='slidercaption'>The Zip Up Bomber Jacket in Light Beige</div>
              <div><FaRegHeart /></div>
            </div>
            <p>asjdf</p>
            <p>lasdj</p>
          </div>
        </div>


        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130270-2JZ.01_450x.jpg?v=1722280553" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2130270-2JZ.02_450x.jpg?v=1722280553" alt="" />
              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div>
              <div className='slidercaption'>The Lightweight Crewneck Sweater in Light Oatmeal</div>
              <div><FaRegHeart /></div>
            </div>
          </div>
        </div>


        <div>
          <div className='p-2 slideritem'>
          <figure className='position-relative'>
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2110377-012.01_450x.jpg?v=1722283943" alt="" />
              <img width="100%" src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/2110377-012.02_450x.jpg?v=1722283943" alt="" />

              <span className='position-absolute top-0 end-0 p-0 bg-black text-white'>new</span>
              <div className="sizebar"><h4>Quick add</h4></div>
             

            </figure>
            <div>
              <div className='slidercaption'>The Fluid Camp Collar Blouse in White</div>
              <div><FaRegHeart /></div>
            </div>
            <p>asdfj</p>
            <p>asjf</p>
          </div>
        </div>
      </Slider>


    </>
  )
}

export default Womenslider;
