import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <h2> Home:{allCourses.length} </h2>
            {/* {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            } */}
        </div>
    );
};

export default Home;