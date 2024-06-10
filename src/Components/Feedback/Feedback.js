import React, { useState, useEffect } from 'react';
import './Feedback.css';
import ClientReview from './ClientReview.js';
import Contact from '../Contact/Contact.js';
import { comments } from '../../data/userData.js'

const Feedback = () => {
    console.log(comments);

    const [commentsList, setCommentsList] = useState(comments);

    const handleSaveComment = (index, save) => {
        // Create a new array with the updated comment
        const updatedCommentsList = commentsList.map((comment, i) => {
            if (i === index) {
                return { ...comment, saved: save };
            }
            return comment;
        });

        const savedComments = updatedCommentsList.filter(comment => comment.saved);
        const unsavedComments = updatedCommentsList.filter(comment => !comment.saved);
        const sortedComments = [...savedComments, ...unsavedComments];
        // Update the state with the new comments list
        setCommentsList(sortedComments);
    };
    const handleLikeComment = (index, liked) => {
        console.log("handle liked ")
        // Create a new array with the updated comment
        const updatedCommentsList = commentsList.map((comment, i) => {
            if (i === index) {
                return { ...comment, liked: liked };
            }
            return comment;
        });
        setCommentsList(updatedCommentsList);
    }

    return (
        <div className="container-fluid Feedbacksection">
            <div className='row'>
                <div className='col-md-8'>
                    {commentsList.map((comment, index) => (
                        <ClientReview
                            key={index}
                            username={comment.username}
                            name={comment.name}
                            image={comment.image}
                            date={comment.date}
                            clientComment={comment.clientComment}
                            liked={comment.liked}
                            views={comment.views}
                            index={index} // Pass index to identify the comment
                            onSave={handleSaveComment} // Pass onSave function
                            saved={comment.saved}
                            onLiked={handleLikeComment}
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
