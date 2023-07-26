

import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';



const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1 className='head'>Learn Best, Save Best.</h1>
          <p className='sale'>SALE SALE!! Shop from one of our biggest sale for courses starting from ₹399. If you are intersted and want to learn it, then we've got you. Sale Ends Aug. 31. So what to wait for.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  background-position: right bottom, left bottom;
  position: relative;
  border-radius: 10px;
  margin:20px 20px 0px 20px;
  &:hover{
    border-radius: 50px;
    margin-left: 7%;
    margin-right: 7%;
  }
  
  height: 300px;
  opacity: 0.8;
  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;
      .head{
        font-family: 'Tektur', cursive;
        color: rgb(0, 11, 92);
      }

      .sale{
        font-family: 'Dosis', sans-serif;
        font-weight: bold;
      }
      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero