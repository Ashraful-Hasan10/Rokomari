import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { userContext } from "../../App";
import loadingImage from "../Spinner-1s-200px.gif";


const Checkout = () => {
 
    const specificId = localStorage.getItem("selectedBook");
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [currentUser, setCurrentUser] = useContext(userContext);
    
    useEffect(() => {
        fetch(`https://evening-depths-61399.herokuapp.com/books/${specificId}`)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h1>Processing your request...</h1>
                <img src={loadingImage} alt="" />
            </div>
        );
    }
    return (
        <div>
            <h1>Checkout</h1>
            {book && (
                <div className="order-book">
                    <div className="titles">
                        <h4>Name : {book.name}</h4>
                        <h4>Quantity:  {book.quantity || 1} </h4>
                        <h4>Price: $ {book.price} </h4>
                    </div>
                    
                </div>
            )}
            <button>CheckOut</button>
           
        </div>
    );

};

export default Checkout;