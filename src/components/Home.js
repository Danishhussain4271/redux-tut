import React from 'react'
import Phone from '../Assets/images (1).jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Phone} alt='phone ' />
                </div>
                <div className="text-wrapper item">
                    <span className="border-0">
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item ">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home