import React, {useState} from 'react'

import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'
import data from '../backend/data'
import Cart from '../Components/Cart'

function Browse(props) {
    

    const [ items, setItems ] = useState([]);


    const addtolist = (itemdetails) => {
        setItems([...items, 
            {   id: items.length,
                title: itemdetails.title,
                desc: itemdetails.desc
            }]);
        alert("ADDED TO CART BELOW");

    }


    const delList = () => {
         
        setItems([]);

        
    
    }
   
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-8" style={{ display: "inline-flex", flexWrap: "inherit" }}>

                            {data.products.map((items, index) => {

                                return (
                                    <Cards addtoCart= {addtolist} img={items.img} title={items.title} desc={items.desc} price={items.Price} />

                                )

                            })}

                        </div>


                        <div className="col-md-4">

                            <Cart clearCart = {delList} cartdata = {items}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Browse