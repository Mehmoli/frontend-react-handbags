import React from 'react'
// REUSABLE BUTTON

// FUNCTION PROPS
function Button({ value, isDisabled, buttonType, isClicked }) {

    return (
        <button type={buttonType} disabled={isDisabled} onClick={isClicked}>
            {value}
        </ button>
    )
}

export default Button;