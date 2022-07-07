import React from "react";
import styled from "styled-components"
import { AccountContext } from "../Contexts/AccountContext";
import { ModalContext } from "../Contexts/ModalContext";


const ConnectWalletButton = styled.button`
    border-radius: 4px;
    background-color: #4b59f7;
    white-space: nowrap;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: white;
        background: #0467fb;
    }
`

export default function ConnectWallet() {
    const [loading, setLoading] = React.useState(false);
    const popup = React.useContext(ModalContext);
    const [account, setAccount] = React.useContext(AccountContext);

    // on page load, setup account listener
    React.useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => setAccount(accounts[0]));
        }
    }, []);

    const truncateAddress = (str) => {
        if (`${str}`.length == 42) {
            return `Connected to: \n0x${str.substring(2, 6)}...${str.substring(38)}`;
        }
    };

    const handleConnect = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            //check if MetaMask is installed
            if (typeof window.ethereum === "undefined") {
                throw Error("Please install MetaMask");
            }

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);

            // check chainID
            const chainId = await window.ethereum.request({ method: "eth_chainId" });
            if (
                chainId !== (process.env.NODE_ENV !== "0x4")
            ) {
                throw Error(
                    "You are connected to the wrong Ethereum Network! Please select Rinkeby Test Network"
                );
            }
        } catch (err) {
            if (err.code === 4001) {
                popup("You have rejected the connection request");
            } else {
                popup(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ConnectWalletButton
                onClick={!!account ? () => { } : handleConnect}
                disabled={loading}
            >
                <b>{!account ? "Connect Wallet" : truncateAddress(account)}</b>
            </ConnectWalletButton>
        </>
    );
}