import React from 'react'
import fuji from '../images/img6.jpg'

function ListItem(props) {
    const [changeClass, setLike] = React.useState("fa-regular fa-heart")

    function like(){
        changeClass === "fa-regular fa-heart" ? setLike("fa-solid fa-heart heart") : setLike("fa-regular fa-heart")
    }

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

            <footer>
                <i className={changeClass} style={{cursor: "pointer"}} onClick = {like}></i>
            </footer>

            <hr />
        </>
    )
}

export default ListItem
