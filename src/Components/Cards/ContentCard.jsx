import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ContentCard.css'

function ContentCard({ image, tit, link, titlink }) {


const navigate = useNavigate();

 
    return (
        <div className="contentcard" style={{ backgroundImage: `url(${image})` }}>
            <div className="main-card">
                
                <div className="tit-card">
                    <p>{tit}</p>
                </div>
                
                <div className="link-card">
                    <button onClick={()=>navigate(link)}>{titlink}</button>
                </div>
            </div>
        </div>
    )
}

export default ContentCard