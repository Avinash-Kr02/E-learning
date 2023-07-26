import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2 className='header'>EDU.LIVE --where education comes live for you</h2>
          <p className='para'>With Over More Than 20,000+ courses, you have a wide range of courses to choose form</p>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.9rem;
  }
  .header{
    color: rgb(227, 11, 92);
    font-family: 'Noto Sans', sans-serif;
  }
  .para{
    color: black;
  }
`;

export default CourseList