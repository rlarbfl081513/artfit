import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display:inline-block;
    padding: 8px 16px;
    font-size: 20px;
    font-weight:bold;

    border: 1px solid #7C71FE;
    border-radius:12px;
    cursor:pointer;
    color:#7C71FE;
    background:none;

    &:hover{
        color:#ffffff;
        background: rgb(124,113,254,0.6);
        border: 1px solid #141020;
    }
`;

function Button(props){
    const { title, onClick } =props;

    return (
        <StyledButton onClick={onClick}>
            {title || "Publish"}
        </StyledButton>
    );
}

export default Button;