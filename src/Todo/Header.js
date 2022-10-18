import React from "react";
import LogoutButton from "../components/auth/LogoutButton"
import { HeaderInfo } from "./TodoStyle";

const Header = () => {
    const accessToken = localStorage.getItem('access_token');
    return (
        <HeaderInfo>
            <ul>
                {accessToken !== null ? <LogoutButton /> : <></>}
            </ul>
        </HeaderInfo>
    )
}

export default Header;