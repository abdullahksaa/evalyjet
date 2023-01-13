import { Inria_Sans } from "@next/font/google";
import Head from "next/head";
import { useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

const inria_sans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const addressesList = [
    { id: 0, name: "Manfouha Dist, Riyadh" },
    { id: 1, name: "Lahore, Pakistan" },
    { id: 2, name: "Dhaka, Bangladesh" },
    { id: 3, name: "New Delhi, India" },
];

export default function CheckoutPage() {

    const [selectedAddress, setSelectedAddress] = useState(0);

    return (
        <>
            <Head>
                <title>Order Page</title>
            </Head>
            <div
                className={`${inria_sans.className} flex flex-col-reverse md:flex-row  gap-4 px-3 md:px-10 xl:px-12 max-w-7xl mx-auto md:gap-5 lg:gap-12 md:my-4 lg:my-5 my-1 pb-20 md:pb-0`}
            >
                <div className="flex-1">
                    <h2 className="text-xl font-bold lg:text-2xl pb-2">
                        Your Order
                    </h2>
                    <div className="shadow rounded-md bg-white">
                        <div className="px-4 py-5">
                            <div>
                                <p>Address</p>
                                <div className="mt-2 flex flex-col lg:items-center lg:flex-row gap-3">
                                    <div className="flex-1">
                                        <select
                                            className="w-full lg:text-lg p-1 dropdown rounded-sm px-3 outline-1 outline-black border bg-[#ccc] border-gray-400"
                                            id="qty"
                                            onChange={(e) => {
                                                console.log(addressesList[e.target.value]);
                                                setSelectedAddress(addressesList[e.target.value].id);
                                            }}
                                            value={selectedAddress}
                                        >
                                            {addressesList.map(address => <option key={address.id} value={address.id}>
                                                {address.name}
                                            </option>)}
                                        </select>
                                    </div>
                                    <button className="flex w-full lg:w-[40%] bg-red-600 text-white py-[6px] rounded-md items-center gap-2 justify-center">
                                        <div>
                                            <AiOutlinePlusCircle />
                                        </div>
                                        <p className="lg:text-lg">
                                            Add New address
                                        </p>
                                    </button>
                                </div>
                                <div className="flex bg-[#f5f5f7] border border-[#ccc] mt-3 px-2 py-[10px] rounded">
                                    {`${addressesList[selectedAddress].name}`}
                                </div>
                                <div className="mt-3">
                                    <p>Contact Number</p>
                                    <div>
                                        <input
                                            type="text"
                                            className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                                            placeholder="04336436364"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        For this order these{" "}
                                        <strong className="text-red-600">
                                            Order Policy
                                        </strong>{" "}
                                        applicable
                                    </p>
                                    <p className="my-3">
                                        Price included VAT for VAT applicable
                                        products
                                    </p>
                                    <div className="flex gap-2">
                                        <div>
                                            <input
                                                className="mt-2 lg:mt-0"
                                                id="tc"
                                                type="checkbox"
                                            />
                                        </div>
                                        <label htmlFor="tc" className="cursor-pointer">
                                            I agree to the{" "}
                                            <strong className="text-red-600">
                                                Terms & Conditions
                                            </strong>{" "}
                                            and{" "}
                                            <strong className="text-red-600">
                                                Purchasing Policy
                                            </strong>{" "}
                                            of Evaly
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                <button className="flex bg-[#f3ceb0] border border-black py-2 rounded-md items-center gap-2 w-full justify-center">
                                    <div>
                                       <BiArrowBack />
                                    </div>
                                    <p className='lg:text-lg'>GO BACK</p>
                                </button>
                                <button className="flex bg-gray-500 border border-black text-white py-2 rounded-md items-center gap-2 w-full justify-center">
                                    <p className='lg:text-lg'>Confirm Order</p>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 md:flex-none md:w-[40%]">
                    <h2 className="text-xl font-bold lg:text-2xl pb-2">
                        Order Summary
                    </h2>
                    <div className="shadow rounded-md bg-white">
                        <div className="flex px-4 py-5 justify-between">
                            <p className="text-blue-500 text-lg">
                                Nipun Enterprise for Cash on Delivery Serice
                            </p>
                            <p className="min-w-[80px] text-right text-lg">
                                $ 7150
                            </p>
                        </div>
                        <hr className="mx-3 border-gray-300" />
                        <div className="flex px-4 items-center justify-between mt-3">
                            <p>Subtotal</p>
                            <p>$ 7150.00</p>
                        </div>
                        <div className="flex px-4 items-center justify-between pb-5 mt-3">
                            <p className="font-bold text-lg">Total</p>
                            <p className="font-bold text-lg">$ 7150.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
