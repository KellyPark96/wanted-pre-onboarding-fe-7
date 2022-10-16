import React from "react";
import LogoutButton from "./auth/LogoutButton"

const Header = () => {
    const accessToken = localStorage.getItem('access_token');
    return (
        <header className="header">
            <ul>
                {accessToken !== null ? <LogoutButton /> : <></>}
            </ul>
        </header>
    )
}

export default Header;