import styled from "styled-components";

export const LoginWrapper = styled.div`
    color: white;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? 'fff' : '#101522')};
`




// export const Username = styled.input`
//     border-radius: 5px;
//     box-sizing: border-box;
//     width: 16%;
//     height: 4%;
// `

// export const Password = styled.input`
//     border-radius: 5px;
//     box-sizing: border-box;
//     width: 16%;
//     height: 4%;
// `

// export const LoginButton = styled.button`
//     background-color: #A7A7A7;
//     opacity: 90%;
//     width: 10%;
//     height: 5%;
//     text-decoration: none;
//     color: #00FFE0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
// `