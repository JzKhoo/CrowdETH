import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {

    const getStarted = () => {
        
    }

    return (
        <div className="grid grid-cols-2 gap-4 flex w-full justify-left items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        The Platform <br /> for Secure <br /> Crowdfunding
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-10/12 text-base">
                        Harness the unlimited potential of smart contracts and DeFi to invest in a business or start your new business venture.
                    </p>
                    <button
                        type="button"
                        onClick={getStarted}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-sm cursor-pointed hover:bg-[#2546bd]"
                    >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">
                            Get Started
                        </p>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                    <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                        Reliable
                    </div>
                    <div className={companyCommonStyles}>
                        Secure
                    </div>
                    <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                        Efficient
                    </div>
                    <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                        Web 3.0
                    </div>
                    <div className={companyCommonStyles}>
                        Ethereum
                    </div>
                    <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                        Blockchain
                    </div>
                </div>
            </div>

        </div>

        <div className="md:flex flex-initial justify-center items-center">
            <img src="https://thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif"/>
        </div>

    </div>
    );
};

export default Welcome;