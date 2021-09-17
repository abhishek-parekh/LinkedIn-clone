import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Coronavirus-India","Top news - 7801 readers")}
            {newsArticle("Elon Musk","Tesle Record Sales - 90901 readers")}
            {newsArticle("T20 WorldCup","Top news - 97801 readers")}
            {newsArticle("Bitcoin updates","Bitcoin breaks 40K!")}
            {newsArticle("Is React-Redux too good?","CodeAbhi - 9901 readers")}
        </div>
    );
}

export default Widgets
