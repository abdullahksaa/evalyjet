import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Inria_Sans } from "@next/font/google";

const inria_sans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

import { MenuItem, MenuList, Paper } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function BannerSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 250,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const webSettings = {
        dots: true,
        infinite: true,
        speed: 250,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className="md:hidden">
                <div>
                    {/* ------------ Banner ------------ */}
                    <div>
                        <div className="py-1">
                            <Slider {...settings}>
                                <div>
                                    <Image
                                        className="h-[125px] rounded-lg w-full object-cover"
                                        src={"/banner/deal1-mobile.jpg"}
                                        alt={"Deal"}
                                        height={500}
                                        width={500}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="h-[125px] rounded-lg w-full object-cover"
                                        src={"/banner/deal1-mobile.jpg"}
                                        alt={"Deal"}
                                        height={500}
                                        width={500}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="h-[125px] rounded-lg w-full object-cover"
                                        src={"/banner/deal1-mobile.jpg"}
                                        alt={"Deal"}
                                        height={500}
                                        width={500}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="flex justify-between pb-1">
                            <p className="font-bold text-lg">
                                Ongoing Campaigns
                            </p>
                            <p className="text-gray-400 hover:underline underline-offset-4 cursor-pointer">
                                Show All
                            </p>
                        </div>
                        <div className="flex gap-3 py-1 overflow-x-auto scroll-bar-style">
                            <div className="bg-grat-300 min-h-[7vh] min-w-[70vw]">
                                <div className="banner rounded-md animated tada">
                                    <div className=" big-text animated">
                                        95% OFF
                                    </div>
                                    <div>the entire store</div>
                                </div>
                            </div>
                            <div className="min-h-[7vh] min-w-[70vw]">
                                <div className="banner animated rounded-md">
                                    <div className=" big-text animated">
                                        Mega Discount Deals
                                    </div>
                                    <div>shop now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:hidden">
                {/* ------------ Banner ------------ */}
                <div>
                    <div className="my-4">
                        <div>
                            <Slider {...settings}>
                                <div>
                                    <Image
                                        className="h-[230px] rounded-lg w-full object-cover"
                                        src={"/banner/deal2.jpg"}
                                        alt={"Deal"}
                                        height={1200}
                                        width={1200}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="h-[230px] rounded-lg w-full object-cover"
                                        src={"/banner/deal2.jpg"}
                                        alt={"Deal"}
                                        height={1200}
                                        width={1200}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="h-[230px] rounded-lg w-full object-cover"
                                        src={"/banner/deal2.jpg"}
                                        alt={"Deal"}
                                        height={1200}
                                        width={1200}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="h-[230px] rounded-lg w-full object-cover"
                                        src={"/banner/deal2.jpg"}
                                        alt={"Deal"}
                                        height={1200}
                                        width={1200}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="flex justify-between py-1">
                            <p className="font-bold text-lg">
                                Ongoing Campaigns
                            </p>
                            <p className="text-gray-400 hover:underline underline-offset-4 cursor-pointer">
                                Show All
                            </p>
                        </div>
                        <div className="flex gap-3 py-4 overflow-x-hidden">
                            <div className="flex-1">
                                <div className="banner rounded-md animated tada">
                                    <div className=" big-text animated tada">
                                        95% OFF
                                    </div>
                                    <div>the entire store</div>
                                    <a href="#">Go to store</a>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="banner animated rounded-md banner-2 tada">
                                    <div className=" big-text animated tada">
                                        Mega Discount Deals
                                    </div>
                                    <div>Shop now</div>
                                    <a href="#">Go to store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div>
                    {/* ------------ Banner ------------ */}
                    <div className="mt-5 rounded-md mx-auto">
                        <div className="flex justify-between">
                            <div className="pt-3">
                                <Paper className="-translate-y-8">
                                    <MenuList sx={{ padding: 0 }}>
                                        {[
                                            "Desktop",
                                            "Laptop",
                                            "Men's Watch",
                                            "Microwave Oven",
                                            "Motor Bike",
                                            "Refrigerator",
                                            "Smart Phone",
                                            "Smart TV & Android TV",
                                            "Speaker",
                                            "Split AC",
                                        ].map((item, i, arr) => {
                                            return (
                                                <div key={item}>
                                                    <MenuItem
                                                        key={item}
                                                        sx={{
                                                            width: "216px",
                                                            paddingTop: "12px",
                                                            paddingBottom:
                                                                "12px",
                                                        }}
                                                    >
                                                        <div
                                                            className={`${inria_sans.className} flex items-center justify-between w-full`}
                                                        >
                                                            <p>{item}</p>
                                                            <KeyboardArrowRightIcon
                                                                sx={{
                                                                    height: 17,
                                                                }}
                                                            />
                                                        </div>
                                                    </MenuItem>
                                                    {!(
                                                        i ===
                                                        arr.length - 1
                                                    ) && (
                                                        <hr className="border-gray-300" />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </MenuList>
                                </Paper>
                            </div>
                            <div className="w-[77%] xl:w-[80%]">
                                <div className="mb-[5px] lg:pl-1 xl:pl-0">
                                    <Slider {...webSettings}>
                                        <div>
                                            <Image
                                                className="h-[330px] rounded-md w-full object-cover"
                                                src={"/banner/amazon.jpg"}
                                                alt={"Deal"}
                                                height={1000}
                                                width={1000}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="h-[330px] rounded-md w-full object-cover"
                                                src={"/banner/amazon.jpg"}
                                                alt={"Deal"}
                                                height={1000}
                                                width={1000}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="h-[330px] rounded-md w-full object-cover"
                                                src={"/banner/amazon.jpg"}
                                                alt={"Deal"}
                                                height={1000}
                                                width={1000}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="h-[330px] rounded-md w-full object-cover"
                                                src={"/banner/amazon.jpg"}
                                                alt={"Deal"}
                                                height={1000}
                                                width={1000}
                                            />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="flex gap-3 lg:pl-1 xl:pl-0 mr-3">
                                    <div className="min-h-[10vh] min-w-[50%]">
                                        <div className="banner rounded-md animated tada">
                                            <div className=" big-text animated tada">
                                                95% OFF
                                            </div>
                                            <div>the entire store</div>
                                            <a href="#">Go to store</a>
                                        </div>
                                    </div>
                                    <div className="min-h-[10vh] min-w-[50%]">
                                        <div className="banner animated rounded-md banner-2 tada">
                                            <div className=" big-text animated tada">
                                                Mega Discount Deals
                                            </div>
                                            <div>Shop now</div>
                                            <a href="#">Go to store</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
