import { Link } from "react-router-dom";
import React from "react";
import LogoutButton from "./auth/LogoutButton"

const Header = ({ isAuthenticated, signUpCompleted, logout }) => {

    return (
        <header className="header">
            <div className="header__left">
                {isAuthenticated ? (
                        <Link to="/todos">
                            <button>TodoList</button>
                        </Link>
                    ) :
                    (signUpCompleted ? (
                            <></>
                        ) : (
                            <Link to="/todos">
                                <button>TodoList</button>
                            </Link>
                        )
                    )
                }
            </div>
            <ul className="header__right">
                {isAuthenticated ? (
                    <LogoutButton logout={logout}/>
                ) : (<>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/sign-up">
                        <button>SignUp</button>
                    </Link>
                </>)}
            </ul>
        </header>
    )
}

export default Header;