import React, {useState} from 'react';
import '../css/cards.css';
import data from '../backend/data'




function Cards(props) {

    
    const itemdetails = {
        title :props.title, 
        desc: props.desc
    }

    
    return (
        
        <div className="main-card col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
            <div className="card h-100 shadow">
                
                <img src={props.img} className="card-image" />
                <button onClick={()=>props.addtoCart(itemdetails)} href="#" className="hbtn hb-fill-top-bg-br" style = {{fontSize: "15px", height: "50px"}}>Add to Cart</button>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className ="class-desc">{props.desc}</h6>
                    <h3 className="card-price"> Rs{props.price}</h3>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue = "1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>


                </div>
            </div>

            

        </div>
        
        


    )
}

export default Cards