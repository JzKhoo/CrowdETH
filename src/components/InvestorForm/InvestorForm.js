import React from 'react'
import GlobalStyle from '../../globalStyles'
import { 
    InvestorFormWrapper,
    InvestorFormContainer,
    FillerContainer,
    LargeLabel,
    SmallLabel,
    ProgressBar,
    Form,
    FormInput,
    FormButton
} from './InvestorForm.styles'

const InvestorForm = () => {
  return (
    <>
        <GlobalStyle />
        <InvestorFormWrapper>
            <FillerContainer></FillerContainer>
            <InvestorFormContainer>
                <LargeLabel>6.31</LargeLabel>
                <SmallLabel>of 10.00 ETH pledged</SmallLabel>
                <ProgressBar></ProgressBar>
                <LargeLabel>19</LargeLabel>
                <SmallLabel>days to go</SmallLabel>
                <Form>
                    <FormInput></FormInput>
                    <FormButton>Invest</FormButton>
                </Form>
            </InvestorFormContainer>
        </InvestorFormWrapper>
    </>
  )
}

export default InvestorForm