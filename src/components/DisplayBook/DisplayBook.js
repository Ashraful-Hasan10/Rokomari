import { faBook, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./DisplayBook.css";

const DisplayBook = ({book}) => {
    const { id,coverPhotoLink, name, author, price } = book;
    const history = useHistory();
    return (
        <div className="book">
            <div>
                <div className="cover-photo">
                    <img src={coverPhotoLink} alt="" />
                </div>
                <h4>
                    <FontAwesomeIcon icon={faBook} />
                    {name}
                </h4>
                <small>By {author}</small>
            </div>
            <div className="book-bottom">
                <h1>${price}</h1>
                <button  onClick={() => handleBuy(id)}>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg"  />
                </button>
                
            </div>
        </div>
    );
    function handleBuy(id) {
        localStorage.setItem("selectedBook", id);
        history.push("/checkout");
    }
};

export default DisplayBook;