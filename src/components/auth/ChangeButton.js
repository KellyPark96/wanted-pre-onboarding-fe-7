import { AuthChangeButton } from "./AuthContentsStyle"

const ChangeButton = ({changeType, onClick}) => {
    return (
        <AuthChangeButton onClick={onClick}>{changeType}</AuthChangeButton>
    )
}

export default  ChangeButton;