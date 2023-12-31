import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import StarRating from "../components/StarRating";
import { useCartContext } from '../context/cart_context';

const Course = (props) => {
  const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category} = props;
  const {addToCart} = useCartContext();

  return (
    <CourseCard>
      <div className='item-img'>
        <img src = {image} alt = {course_name} />
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star = {rating_star} />
          <span className='rating-count'>({Math.floor(rating_count*(.7))})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-new'>₹{Math.floor(discounted_price*40)}</span>
          <span className='item-price-old'>₹{Math.floor(actual_price*15)}</span>
        </div>
      </div>
      <div className='item-btns flex'>
        <Link to = {`/courses/${id}`} className = "item-btn see-details-btn">See details</Link>
        <Link to = "/cart" className='item-btn add-to-cart-btn' onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>Add to cart</Link>
      </div>
    </CourseCard>
  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 1.0) 0px 8px 25px;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  .item-body{
    margin: 14px 0;
    padding: 4px 18px;

    .item-name{
      font-size: 18px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.5;
    }
    .item-creator{
      font-size: 12.5px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val{
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 1000;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count{
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
    .item-price-new{
      font-weight: 700;
      font-size: 17px;
    }
    .item-price-old{
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns{
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn{
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn{
        background-color: transparent;
        border: 1px solid var(--clr-pink);
        margin-right: 5px;

        &:hover{
          background-color: rgba(0, 0, 0, 0.9);
          color: white;
          border-radius: 15px;
        }
      }

      &.add-to-cart-btn{
        background: rgba(	0,28,28, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0, 0, 0, 0.9);

        &:hover{
          background-color: rgba(253,31,74, 0.9);
          border-radius: 15px;
          color: black;
        }
      }
    }
  }
`;

export default Course