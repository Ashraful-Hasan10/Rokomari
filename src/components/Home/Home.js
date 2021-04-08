import React, { useEffect, useState } from 'react';
import loadingImage from '../Spinner-1s-200px.gif';
import DisplayBook from '../DisplayBook/DisplayBook';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://evening-depths-61399.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h1>Please wait a moment...</h1>
                <img src={loadingImage} alt="" />
            </div>
        )
    }
    return (
        <div>

            <div className="books-container">
                {books &&
                    books.map((book) => {
                        return <DisplayBook book={book} key={book.id} />;
                    })}
            </div>
        </div>
    );
};

export default Home;