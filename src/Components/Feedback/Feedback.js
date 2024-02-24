import React from 'react';
import './Feedback.css';
import ClientReview from './ClientReview.js';
import Contact from '../Contact/Contact.js';
import { comments } from '../../data/userData.js'

const Feedback = () => {

    return (
        <div className="container-fluid Feedbacksection">
            <div className='row'>
                <div className='col-md-8'>
                    {comments.map((comment, index) => (
                        <ClientReview
                            key={index}
                            username={comment.username}
                            name={comment.name}
                            image={comment.image}
                            date={comment.date}
                            clientComment={comment.clientComment}
                            likes={comment.Likes}
                            views={comment.views}
                        />
                    ))}
                </div>
                <div className='col-md-4'>
                    <Contact />
                </div>
            </div>

        </div>
    );
}
export default Feedback;
