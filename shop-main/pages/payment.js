import { Inria_Sans } from "@next/font/google";
import Head from "next/head";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Image from "next/image";
import { useState } from "react";
import { BiArrowBack } from 'react-icons/bi';

const inria_sans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

export default function PaymentPage() {

    const [ productQty, setProductQty ] = useState(1);

    const decreaseProductQtyHandler = () => {
        if (productQty > 1) {
            setProductQty(qty => qty - 1);
        }
        return;
    };

    const increaseProductQtyHandler = () => {
        setProductQty(qty => qty + 1);
    }

    return (
        <>
            <Head>
                <title>Payment Page</title>
            </Head>
            <div
                className={`${inria_sans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto flex flex-col-reverse gap-4 md:flex-row md:gap-5 lg:gap-12 md:my-4 lg:my-5 my-1 pb-20 md:pb-0`}
            >
                <div className="flex-1">
                    <h2 className="text-xl font-bold lg:text-2xl pb-2">
                        Choose Your Payment Method
                    </h2>
                    <div className="shadow rounded-md bg-white">
                        <div className="px-4 py-5">
                            <CustomizedRadios />
                        </div>
                        <div className="flex pb-5 justify-center items-center gap-1 md:gap-3">
                                <button className="flex bg-[#f5f5f7a8] border border-black py-2 rounded-md items-center gap-2 w-[30%] lg:w-[20%] justify-center">
                                    <div>
                                       <BiArrowBack />
                                    </div>
                                    <p className='lg:text-lg text-gray-700'>Pay Later</p>
                                </button>
                                <button className="flex bg-red-700 text-white py-2 rounded-md items-center gap-2 w-[50%] lg:w-[60%] justify-center">
                                    <p className='lg:text-lg'>Confirm Order</p>
                                </button>
                            </div>
                    </div>
                </div>
                <div className="flex-1 lg:flex-none lg:w-[40%]">
                    <h2 className="text-xl font-bold lg:text-2xl pb-2">
                        Order Summary
                    </h2>
                    <div className="shadow rounded-md bg-white">
                        <div className="flex px-4 py-5 justify-between">
                            <p className="text-blue-500 text-lg">
                                Carnival for cyclone Dec 25
                            </p>
                            <p className="min-w-[80px] font-bold text-right text-lg">
                                $ 1155.00
                            </p>
                        </div>
                        <hr className="mx-3 border-gray-300" />
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p>Paid Amount</p>
                            <p>$ 5.00</p>
                        </div>
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p>Due Amount</p>
                            <p>$ 1150.00</p>
                        </div>
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p>Subtotal</p>
                            <p>$ 1155.00</p>
                        </div>
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p>Shipping (Express)</p>
                            <p>$ 0</p>
                        </div>
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p className="font-bold text-lg">Total</p>
                            <p className="font-bold text-lg">$ 1155.00</p>
                        </div>
                        <div className="mt-4 flex justify-center pb-5">
                            <button className=" text-gray-500 py-3 text-sm rounded-md items-center gap-2 w-[95%]">
                                * Price included VAT for VAT applicable products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });
  
  // Inspired by blueprintjs
  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }


function CustomizedRadios() {
    return (
      <FormControl sx={{width:'100%', marginLeft:1}}>
        <RadioGroup
          defaultValue="female"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <FormControlLabel value="visa" control={<BpRadio />} label={<PayCard />} />
          <FormControlLabel value="male" control={<BpRadio />} label={<PayCard />} />
          <FormControlLabel value="other" control={<BpRadio />} label={<PayCard />} />
          <FormControlLabel value="other-pay" control={<BpRadio />} label={<PayCard />} />
        </RadioGroup>
      </FormControl>
    );
  };

const PayCard = props => {
    return <div className={`${inria_sans.className} flex w-full justify-between items-center border-b-[1px] py-[10px] border-[#ccc]`}>
        <div>
            <p>VISA/Master Card</p>
            <p className="text-sm text-gray-500">Pay from your VISA or master card.</p>
        </div>
        <div>
            <Image src={'/payment/visa-master.png'} alt={'Payment Gateway'} height={120} width={120} />
        </div>
    </div>
}
