import React from 'react';
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import {Link} from "react-router-dom";
import { useSidebarContext } from '../context/sidebar_context';
import { useCoursesContext } from '../context/courses_context';

const Sidebar = () => {
  const {categories} = useCoursesContext();
  const {closeSidebar, isSidebarOpen} = useSidebarContext();

  return (
    <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button type = "button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
        <MdClose />
      </button>
      <div className='sidebar-content'>
        <h6 className='fs-18'>Top Categories</h6>
        <ul className='sidebar-category'>
          {
            categories.map((category, idx) => {
              return (
                <li className='sidebar-link-item fw-5' key = {idx}>
                  <Link to = {`category/${category}`}>{category.toUpperCase()}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  position: fixed;
  top: 10;
  right: 0;
  width: 250px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  background-color:	rgb(242, 210, 189); 
  box-shadow: #c6e7e7 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  .fs-18{
    color: black;
    font-family: 'Noto Sans', sans-serif;
    text-decoration: underline;
  }

  &.show-sidebar{
    transform: translateX(0);
  }

  .sidebar-close-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .sidebar-close-btn:hover{
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  .sidebar-content{
    margin-top: 50px;
    h6{
      margin-bottom: 16px;
    }
    .sidebar-link-item{
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover{
        transform: translateX(6px);
        text-decoration: underline;
      }
    }
  }
`;

export default Sidebar