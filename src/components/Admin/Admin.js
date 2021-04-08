import { faEdit, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";

import "./Admin.css";

const Admin = () => {
    return (
        <div>
            <Link to="/">
                <h2 className="home-link">Rokomari</h2>
            </Link>
            <div className="admin">
                <Router>
                    <div className="side-bar">
                        <Link to="/admin">
                            <li>
                                <FontAwesomeIcon icon={faTasks} />
                                Manage Books
                            </li>
                        </Link>
                        <Link to="/admin">
                            <li>
                                <FontAwesomeIcon icon={faPlus} size="lg" /> Add Book
                            </li>
                        </Link>
                        <Link to="/admin">
                            <li>
                                <FontAwesomeIcon icon={faEdit} />
                                Edit book
                            </li>
                        </Link>
                    </div>
                    
                </Router>
            </div>
        </div>
    );
};

export default Admin;