import styled from "styled-components";

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    display: grid;
    place-items: center;

    background: white;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 100%;
    width: 100%;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    text-align: center;

    p {
        margin: 10px;
        color: #777;
    }
`

export const BoxUpLoad = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed #799CD9;
    /* padding: 36px 48px; */
    position: relative;

    height: 100%;
    width: 100%;
    background: #FBFBFF;
    border-radius: 20px;

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