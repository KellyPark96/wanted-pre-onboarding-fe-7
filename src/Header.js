import { Link } from "react-router-dom";
import React from "react";
import LogoutButton from "./auth/LogoutButton"

const Header = ({ isAuthenticated, signUpCompleted, logout }) => {
    console.log(isAuthenticated)
    return (
        <header className="header">
            <div className="header__left">
                {isAuthenticated ? (
                        <Link to="/todo">
                            <button>TodoList</button>
                        </Link>
                    ) :
                    (signUpCompleted ? (
                            <></>
                        ) : (
                            <Link to="/todo">
                                <button>TodoList</button>
                            </Link>
                        )
                    )
                }
            </div>
            <ul className="header__right">
                {isAuthenticated ? (
                    <LogoutButton logout={logout}/>
                ) : (
                    <LogoutButton logout={logout}/>
                )}
            </ul>
        </header>
    )
}

export default Header;