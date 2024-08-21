"use client"

import Head from "./Componant/Head"
import React, { useEffect, useState } from 'react'


const Home = ()=> {
  const winwidth = window.innerWidth;
  const [currentbg, setcurrenbg] = useState("https://ca.frankandoak.com/cdn/shop/files/desktop_duo_ae0f1920-9273-421b-afe3-d35256ff166b_2160x.jpg?v=1723666571")
  const changebg = () => {
    if (winwidth <= 768) {
      setcurrenbg("https://ca.frankandoak.com/cdn/shop/files/slide_1_61dd1e39-fb83-4e9b-86a4-260af64309cd_1536x.jpg?v=1724079577");
    }
    else {
      setcurrenbg("https://ca.frankandoak.com/cdn/shop/files/desktop_duo_ae0f1920-9273-421b-afe3-d35256ff166b_2160x.jpg?v=1723666571")
    }
  }
  useEffect(() => {
    changebg()
  }, [winwidth])
  return (


    <>
      <Head />
      <div className="banner">
        <img width="100%" src={currentbg} alt="" />
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
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus consequatur sunt fugit consectetur dolorum suscipit saepe doloremque voluptas tempora?</h3>




    </>
  );
}
export default Home;