import React from 'react'
import fuji from '../images/img6.jpg'

function ListItem(props) {
    return (
        <>
        <div className='travel-card'>

            <div className="left">
                <img src={props.image} alt="#" />
            </div>

            <div className="right">
                <p><i class="fa-solid fa-location-dot"></i> {props.country} </p> <a className='small-text' href={props.map}>View on Google Map</a>
                <h1>{props.place}</h1>
                <h5>{props.date}</h5>
                <p>{props.desc}</p>
               
            </div>

        </div>
            <hr />
        </>
    )
}

export default ListItem
