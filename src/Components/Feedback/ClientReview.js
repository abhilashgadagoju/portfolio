import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { FaBookmark, FaRegBookmark, FaPaperPlane, FaRegPaperPlane, FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClientReview({ username, name, image, date, clientComment, liked, views, onSave, index, saved, onLiked }) {
    const [shared, setShared] = useState(false);
    const [comment, setComment] = useState(false);

    const showSuccess = (infoMessage) => {
        toast.success(infoMessage, {
            position: 'bottom-right',
            style: {
                bottom: '30px'// Adjust the distance from the bottom
            },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });

    }

    const showInfo = (infoMessage) => {
        toast.warn(infoMessage, {
            position: 'bottom-right',
            style: {
                bottom: '30px'// Adjust the distance from the bottom
            },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }

    const toggleLike = () => {
        //setLiked(!likedstate);
        onLiked(index, !liked);
    };

    const toggleSave = () => {
        onSave(index, !saved); // Call onSave prop with the index of the comment
        if (!saved) {
            showSuccess('Comment saved successfully move to Top');
        }
    };

    const toggleShare = () => {
        setShared(!shared);
        if (!shared) {
            showInfo('Please enter your details in the contact form.');
        }

    };

    const toggleComment = () => {
        setComment(!comment);
        if (!comment) {
            showInfo('Please enter your message in the contact form.');
        }
    };

    return (
        <>
            <div className="client-review">
                <div>
                    <img src={image} alt={username + ' profile image'} className="client-image" />
                    <p style={{ color: 'var(--text-color)', fontWeight: 600 }}>@{username}</p>
                </div>
                <div className="review-text">
                    <p>{clientComment}</p>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <p className="client-name" style={{ marginRight: 10, marginTop: '10px' }}>~ {name}</p>
                        <p style={{ marginTop: '10px', marginRight: 10, color: 'var(--text-color)', fontWeight: 600 }}>{date}</p>
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Views:
                            <span style={{ color: 'var(--text-color)', marginLeft: '5px', marginBottom: '0', fontWeight: 600 }}>{views}</span>
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>


                            <div onClick={toggleLike} style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                                {liked ? <FcLike size={28} /> : <FiHeart size={28} />}
                            </div>
                            <div onClick={toggleSave} style={{ marginRight: 10 }}>
                                {saved ? <FaBookmark size={28} /> : <FaRegBookmark size={28} />}
                            </div>
                            <div onClick={toggleShare} style={{ marginRight: 10 }}>
                                {shared ? <FaPaperPlane size={28} /> : <FaRegPaperPlane size={28} />}
                            </div>
                            <div onClick={toggleComment} style={{ marginRight: 10 }}>
                                {comment ? <FaCommentAlt size={28} /> : <FaRegCommentAlt size={28} />}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </>
    );
}

export default ClientReview;