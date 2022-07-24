import React from 'react'
import GlobalStyle from '../../globalStyles'
import {
    InvestorFormWrapper,
    InvestorFormContainer,
    LargeLabel,
    SmallLabel,
    ProgressBar,
    Form,
    FormInput,
    FormButton
} from './InvestorForm.styles'
import Web3 from "web3";
import { invest } from "smart_contract/blockchainFunctions";
import { AccountContext, AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

export default function InvestorForm({
    ventureAddress,
    balance,
    targetCapital,
    listingTimestamp,
    status,
    toggleRefreshData,
}) {

    function daysLeft(UNIX_timestamp) {
        return parseInt(
            (parseInt(UNIX_timestamp) + 60 * 24 * 60 * 60 - Date.now() / 1000) /
            (24 * 60 * 60)
        );
    }

    const [amount, setAmount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const account = React.useContext(AccountContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!account) {
                throw Error("Please connect your account");
            }
            setLoading(true);
            await invest({ ventureAddress, amount });
        } catch (err) {
            if (err.code === 32000 || err.code === 32603) {
                alert("Please reset your MetaMask account");
            } else {
                alert(err.message);
            }
        } finally {
            setLoading(false);
            setAmount(0);
            toggleRefreshData();
        }
    };

    const percent = Math.round(
        (100 * parseInt(balance)) / parseInt(targetCapital)
    );

    const days = daysLeft(listingTimestamp);
    const displayBalance = Web3.utils.fromWei(Web3.utils.toBN(balance));

    return (
        <>
            <AccountContextProvider>
                <ModalContextProvider>
                    <GlobalStyle />
                    <InvestorFormWrapper>
                        <InvestorFormContainer>
                            <LargeLabel>
                                {displayBalance}
                            </LargeLabel>
                            <SmallLabel>
                                of {targetCapital} ETH pledged
                            </SmallLabel>
                            <ProgressBar></ProgressBar>
                            <LargeLabel>
                                {days} {"Day" + (days === 1 ? "" : "s")}
                            </LargeLabel>
                            <SmallLabel>
                                days to go
                            </SmallLabel>
                            <Form>
                                <FormInput
                                    type="number"
                                    step={1}
                                    value={amount}
                                    min={0}
                                    onChange={(event) => setAmount(event.target.value)}
                                >
                                </FormInput>
                                <FormButton
                                    onClick={handleSubmit}
                                >
                                    {status === 0
                                        ? "INVEST"
                                        : status === 1
                                            ? "Venture Capitalization Concluded"
                                            : "Ventuure Capitalization Failed"}
                                </FormButton>
                            </Form>
                        </InvestorFormContainer>
                    </InvestorFormWrapper>
                </ModalContextProvider>
            </AccountContextProvider>
        </>
    )
}