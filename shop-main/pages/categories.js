import { Inria_Sans } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";

const inriaSans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const CatergoriesPage = (props) => {
    const [activeTab, setActiveTab] = useState("SubCategories");

    const switchTabHandler = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div
                className={`${inriaSans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto pb-20 md:pb-0`}
            >
                <div className="mt-3 md:mt-5 lg:mt-7 flex gap-5">
                    <button
                        className={`${
                            activeTab === "SubCategories"
                                ? "bg-black text-white"
                                : ""
                        } px-3 py-2 rounded-md`}
                        onClick={() => {
                            switchTabHandler("SubCategories");
                        }}
                    >
                        SubCategories
                    </button>
                    <button
                        className={`${
                            activeTab === "Brands" ? "bg-black text-white" : ""
                        } px-3 py-2 rounded-md`}
                        onClick={() => {
                            switchTabHandler("Brands");
                        }}
                    >
                        Brands
                    </button>
                    <button
                        className={`${
                            activeTab === "Shops" ? "bg-black text-white" : ""
                        } px-3 py-2 rounded-md`}
                        onClick={() => {
                            switchTabHandler("Shops");
                        }}
                    >
                        Shops
                    </button>
                </div>
                <div className="mt-5">
                   {activeTab === 'SubCategories' &&  <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/ring.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Men's Ring</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/necklace.png'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Women's Necklace</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/shoes.webp'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Men's Shoes</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/shirt.webp'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Men's T-shirt</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/grocery.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Groceries</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/coke.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Coca Cola</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/sunsilk.png'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Sunsilk</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/safeguard.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Safeguard Soap</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/palmolive.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Palmolive</p>
                        </div>
                        <div className="p-5 flex flex-col items-center pb-[23px] text-sm md:text-base shadow text-center bg-white rounded">
                            <Image src={'/categories/nivea.jpeg'} alt={'ring'} width={130} height={130} />
                            <p className="mt-5">Nivea for Men</p>
                        </div>
                    </div>}
                    {activeTab === 'Shops' && <p className="text-center pt-5">No Shops at the moment.</p>}
                    {activeTab === 'Brands' && <p className="text-center pt-5">No Brands at the moment.</p>}
                </div>
            </div>
        </>
    );
};

export default CatergoriesPage;
