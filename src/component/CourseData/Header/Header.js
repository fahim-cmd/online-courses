import React from 'react';
import './Header.css';

const Header = (props) => {

 const price = props.total;

// let totalPrice = 0;
// for (let i = 0; i < price.length; i++) {
//     const newPrice = props.total[i];
//     totalPrice = totalPrice + newPrice.price;
// }
  
let totalPrice = price.reduce((total, pera) => total + pera.price, 0)

    return (
        <div>
            <h1 style={{fontWeight:"800"}}> Online Courses</h1>

            <div className="total justify-content-between"> 
                <h5 className="font-weight-bold"> Total Course:{props.total.length} </h5>
                <h5 className="font-weight-bold"> Total Cost: $ {totalPrice} </h5>
            </div>
        </div>
    );
};

export default Header;