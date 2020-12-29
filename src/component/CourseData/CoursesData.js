import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Header from './Header/Header';
import ShowData from './ShowData/ShowData';

const CoursesData = () => {
    const [course, setCourse] = useState([]);
    const [total, setTotal] = useState([]);
    
    useEffect(()=>{
        setCourse(data)
    }, [])

    const handleEnroll = (course) => {
        const newTotal = [...total, course];
        setTotal (newTotal);
    }

    return (
        <div>
            <Header total={total}  ></Header>
            {
                course.map(courses => <ShowData handleEnroll={handleEnroll} course={courses} key={courses.id}></ShowData>)
            }
        </div>
    );
};

export default CoursesData;