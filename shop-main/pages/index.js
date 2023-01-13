import Head from "next/head";
import Image from "next/image";
import { Inria_Sans } from "@next/font/google";
import { HeroBannerSlider } from "../components";

const inriaSans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

// Dummy Data

const BRANDS = [
    { id: 1, imgSrc: "/images/mi.png", title: "MI" },
    { id: 2, imgSrc: "/images/toyota.png", title: "Toyota" },
    { id: 3, imgSrc: "/images/samsung.png", title: "Samsung" },
    { id: 4, imgSrc: "/images/lux.png", title: "Lux" },
    { id: 5, imgSrc: "/images/nestle.png", title: "Nestle" },
    { id: 6, imgSrc: "/images/nokia.png", title: "Nokia" },
    { id: 7, imgSrc: "/images/apple.png", title: "Apple" },
    { id: 8, imgSrc: "/images/garnier.png", title: "Garnier" },
    { id: 9, imgSrc: "/images/bgroup.png", title: "BASHUNDHARA GROUP" },
    { id: 10, imgSrc: "/images/lifebuoy.png", title: "Lifebuoy" },
    { id: 11, imgSrc: "/images/tesla.jpeg", title: "Tesla" },
];

const TOUR_DESTINATIONS = [
    {
        id: 1,
        imgSrc: "/images/goldengatebridge.jpeg",
        title: "Sundarban Premium Group Tour Package - 50 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
    {
        id: 2,
        imgSrc: "/images/tesla-car.png",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        newPrice: "140,000",
    },
    {
        id: 3,
        imgSrc: "/images/changi.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "559",
        newPrice: "400",
    },
    {
        id: 4,
        imgSrc: "/images/sauditwintower.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
    {
        id: 5,
        imgSrc: "/images/singapore.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
    {
        id: 6,
        imgSrc: "/images/changi.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
    {
        id: 7,
        imgSrc: "/images/burjkhalifa.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
    {
        id: 8,
        imgSrc: "/images/nwfp.jpeg",
        title: "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
        oldPrice: "262,500",
        newPrice: "140,000",
    },
];

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`${inriaSans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto pb-9 md:pb-0`}
            >
                <div>
                    <HeroBannerSlider />
                    <div className="mt-1 md:mt-0 pb-5">
                        <section className="mb-5">
                            <h2 className="text-xl md:text-2xl font-bold">
                                Shop by Brands
                            </h2>
                            <div
                                className="mt-3 shop-by-brands-section md:mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8
                            gap-2
                            "
                            >
                                {BRANDS.map((brand) => {
                                    return (
                                        <div key={brand.title} className="bg-white rounded-md p-4 shadow-sm">
                                            <div>
                                                <Image
                                                    className="max-w-[90%] object-contain mx-auto h-[80px] md:h-[90px] lg:h-[110px]"
                                                    src={brand.imgSrc}
                                                    alt={brand.title}
                                                    width={150}
                                                    height={150}
                                                />
                                            </div>
                                            <p className="text-center h-[30px] md:h-[40px] text-xs md:text-sm mt-3 md:mt-5 lg:mt-5">
                                                {brand.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                        <section className="pt-2 md:pt-4 mb-5">
                            <h2 className="text-xl md:text-2xl font-bold">
                                Travel & Tours
                            </h2>
                            <div
                                className="mt-3 md:mt-5 travel-tour-section">
                                {TOUR_DESTINATIONS.map((destination,index) => {
                                    return (
                                        <div
                                            key={destination.title+index}
                                            className="bg-white destination-card rounded-md p-4 shadow-sm"
                                        >
                                            <div className="mt-1">
                                                <Image
                                                    className="max-w-[90%] object-cover mx-auto h-[100px] md:h-[90px] lg:h-[110px]"
                                                    src={destination.imgSrc}
                                                    alt={destination.title}
                                                    width={150}
                                                    height={150}
                                                />
                                            </div>
                                            <p className="text-xs title font-normal lines-2 md:text-sm text-gray-700 mt-3 md:mt-5 lg:mt-4">
                                                {destination.title}
                                            </p>
                                            <div className="mt-1 prices">
                                                {destination.oldPrice && (
                                                    <del className="text-xs text-[#9CA3AF] font-light mt-1">
                                                        ${destination.oldPrice}
                                                    </del>
                                                )}
                                                <p className="text-sm">
                                                    ${destination.newPrice}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
