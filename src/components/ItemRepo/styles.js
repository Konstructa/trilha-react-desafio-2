import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    button {
        padding: 10px 20px;
        background-color: red;
        color: white;
        margin-top: 15px;
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
`