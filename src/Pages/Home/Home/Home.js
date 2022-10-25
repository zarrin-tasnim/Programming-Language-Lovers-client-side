import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <h2> Home:{allCourses.length} </h2>
            <div style={{ height: '100vh' }}>
                <img className='img-fluid' src="https://www.keg.com/hubfs/shutterstock_404189197.jpg" alt="" />
            </div>

            {
                allCourses.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;