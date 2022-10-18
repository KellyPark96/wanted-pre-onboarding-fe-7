import React from "react";
import { AuthSubmitButton } from "./AuthContentsStyle"

const SubmitButton = ({ authType, handleDisabledButton }) => {
    return (
        <AuthSubmitButton type="submit"
                          disabled={ handleDisabledButton() }>
            {authType}
        </AuthSubmitButton>

    )
}

export default SubmitButton;