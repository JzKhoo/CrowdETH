import styled from "styled-components";

export const Layout = styled.div`
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const BoxUpLoad = styled.div`
    display: grid;
    margin: 20px;

    .image-upload {
        display: flex;
        flex-wrap: wrap;
        
        label {
            cursor: pointer;

            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image {
        height: auto;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;

    }

    .close-icon {
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }
    }
`