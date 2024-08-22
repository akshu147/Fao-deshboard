"use client"

import Head from "./Componant/Head"
import React, { useState } from 'react'


// https://ca.frankandoak.com/cdn/shop/files/slide_1_61dd1e39-fb83-4e9b-86a4-260af64309cd_1536x.jpg?v=1724079577
// https://ca.frankandoak.com/cdn/shop/files/desktop_duo_ae0f1920-9273-421b-afe3-d35256ff166b_2160x.jpg?v=1723666571

const Home = ()=> {
  const [currentimage, setcurrentimage] = useState("https://ca.frankandoak.com/cdn/shop/files/desktop_duo_ae0f1920-9273-421b-afe3-d35256ff166b_2160x.jpg?v=1723666571")
  window.addEventListener("resize", ()=> {
    if(screen.availWidth <= 768) {
      setcurrentimage("https://ca.frankandoak.com/cdn/shop/files/slide_1_61dd1e39-fb83-4e9b-86a4-260af64309cd_1536x.jpg?v=1724079577")
    }
    else{
      setcurrentimage("https://ca.frankandoak.com/cdn/shop/files/desktop_duo_ae0f1920-9273-421b-afe3-d35256ff166b_2160x.jpg?v=1723666571")
    }
  })




  return (


    <>
      <Head />
      <div className="banner">
        <img width="100%" src={currentimage}/>
        <div className="bannercontent">
          <h1>Fall 2024</h1>
          <h2>The new classic.</h2>
          <div className="buttons">
            <div>Women</div>
            <div>Man</div>



          </div>
        </div>
      </div>
      <div className="offers">
        <div>
          <div className='py-1'><img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Shipping-black_2_ce714247-b176-4ecf-832e-fa3a2a773e20.png?v=1657557635" alt="" /><span className='ps-2'>Free Shipping over $99</span></div>
          <div className='py-1'><img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Returns-black_40542005-7a75-4b5b-89fe-190bad6422e6.png?v=1668023906" alt="" /><span className='ps-2'>Free Returns</span></div>
        </div>
        <div>
          <div className='py-1'><img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811" alt="" /><span className='ps-2'>Earn Points</span></div>
          <div className='py-1'><img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405" alt="" /><span className=''>Buy Now, Pay Laters</span></div>
        </div>


      </div>
      <h2 className="py-3 py-sm-4 py-md-5 fs-4 px-3">Featured Categories</h2>
      {/* <Image
      src={myimage}
      />
      */}
      <div className="photos">
        <div>
          <img width="100%" src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_e64a9408-d985-4174-b37f-0ade6e58aab1_900x.jpg?v=1723666768" alt="" />
          <p className="px-2 py-1 m-0">Womens Denim</p>
        </div>
        <div>
          <img width="100%" src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_10577b21-73ba-478b-aa56-b8b86010e119_900x.jpg?v=1723666785" alt="" />
          <p className="px-2 py-1 m-0">Womens Jackets</p>
        </div>
        <div>
          <img width="100%" src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_3f7050c1-fb17-42fc-96a5-8320ee83495a_900x.jpg?v=1723666838" alt="" />
          <p className="px-2 py-1 m-0">Mans Denim</p>
        </div>
        <div>
          <img width="100%" src="https://ca.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_c3ad771e-8aba-4d77-aa55-512a322a3eed_900x.jpg?v=1723666852" alt="" />
          <p className="px-2 py-1 m-0">Mans Jackets</p>
        </div>
      
      </div>
      <div className="sliderhaader">
        <h1>This just in</h1>
        <div className="d-flex gap-4">
          <div>Women's</div>
          <div>Man's</div>
        </div>
      </div>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere reprehenderit error, animi vel est nulla cumque repudiandae obcaecati quae ipsam sequi tenetur nemo. Unde, voluptatibus quae. Magnam id suscipit vel voluptates ab est, quidem ducimus, eligendi expedita tempora dolorem cum. Harum vero, exercitationem temporibus cum quos laborum doloribus rem impedit saepe ad itaque optio deserunt animi. Ipsa hic distinctio nemo expedita. Accusantium ad inventore quibusdam eligendi laudantium, praesentium officiis, at soluta non rerum quod repellat libero mollitia, id perspiciatis nihil eum voluptatibus nesciunt eos voluptate voluptates! Tempora blanditiis pariatur quibusdam totam aliquam quis ipsam, ut sapiente reiciendis! Eius, soluta! Voluptas!</h1>

    
     



    </>
  );
}
export default Home;