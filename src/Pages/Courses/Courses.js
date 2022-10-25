import React from 'react';
import './Courses.css';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaDownload } from "react-icons/fa";



const Courses = () => {
    const news = useLoaderData();
    

    const { title, details, category_id, image_url } = news;
    return (
        
        <Card>
            <h1> <FaDownload></FaDownload> Details Page</h1>
            
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};



export default Courses;