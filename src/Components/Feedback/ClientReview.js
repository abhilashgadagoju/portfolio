import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { FaBookmark, FaRegBookmark, FaPaperPlane, FaRegPaperPlane, FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';

function ClientReview({ username, name, image, date, clientComment, likes, views }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [shared, setShared] = useState(false);
    const [comment, setComment] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const toggleSave = () => {
        setSaved(!saved);
    };

    const toggleShare = () => {
        setShared(!shared);
    };

    const toggleComment = () => {
        setComment(!comment);
    };
    console.log(username, name, image, date, clientComment);

    return (
        <>
            <div className="client-review">
                <div>
                    <img src={image} alt={username} className="client-image" />
                    <p style={{ color: 'gray', fontWeight: '500' }}>@{username}</p>
                </div>
                <div className="review-text">
                    <p>{clientComment}</p>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <p className="client-name" style={{ marginRight: '15px', marginTop: '10px' }}>~ {name}</p>
                        <p style={{ marginTop: '10px', marginRight: '15px', color: 'gray', fontWeight: '500' }}>{date}</p>
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Views:
                            <span style={{ color: 'gray', fontWeight: 'normal', marginLeft: '5px', marginBottom: '0', fontWeight: '500' }}>{views}</span>
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>


                            <div onClick={toggleLike} style={{ marginRight: '15px', display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                {liked ? <FcLike size={28} /> : <FiHeart size={28} />}
                                <p style={{ color: 'gray', marginLeft: '5px', marginTop: '10px', fontWeight: '500' }}>{likes}</p>
                            </div>
                            <div onClick={toggleSave} style={{ marginRight: '15px' }}>
                                {saved ? <FaBookmark size={28} /> : <FaRegBookmark size={28} />}
                            </div>
                            <div onClick={toggleShare} style={{ marginRight: '15px' }}>
                                {shared ? <FaPaperPlane size={28} /> : <FaRegPaperPlane size={28} />}
                            </div>
                            <div onClick={toggleComment} style={{ marginRight: '15px' }}>
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