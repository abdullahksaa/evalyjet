import {
    Avatar,
    Box,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    MenuItem,
    NoSsr,
    Pagination,
    Select,
    Switch,
    TextField,
} from "@mui/material";
import { Inria_Sans } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { BsCheck2Circle } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {TransactionsPage} from "../../components/profile";

const inria_sans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const SIDEBAR_MENU = [
    { title: "Basic Informations", href: "basic-informations" },
    { title: "Addresses", href: "addresses" },
    { title: "Orders", href: "orders" },
    { title: "Unconfirmed Orders", href: "unconfirmed-orders" },
    { title: "Reviews", href: "reviews" },
    { title: "Refund Settlements", href: "refund-settlements" },
    { title: "Change Password", href: "change-password" },
    { title: "Appointment", href: "appointment" },
    { title: "Transactions", href: "transactions" },
];

export default function ProfilePage() {
    const [isMobileMenuClicked, setIsMobileMenuClicked] = useState("");
    const [desktopSelectedMenu, setDesktopSelectedMenu] =
        useState("basic-informations");
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Profile Page</title>
            </Head>
           <NoSsr>
           <div
                className={`${inria_sans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto md:my-4 lg:my-5 my-1 mb-4 flex md:gap-4 pb-14 md:pb-0`}
            >
                <div className="flex-1 md:max-w-[41%] lg:max-w-[30%]">
                    <div className="w-full md:hidden rounded-md shadow bg-white">
                        <div className="p-5 pb-3 mt-1">
                            <div className="flex gap-5 pt-5 md:flex-col">
                                <div>
                                    <Avatar
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 100, height: 100 }}
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-2xl flex items-center gap-2">
                                        <p>Sheikh Swim</p>
                                        <div>
                                            <BsCheck2Circle color="green" />
                                        </div>
                                    </div>
                                    <p className="font-light text-lg mt-[1px]">
                                        01834419585
                                    </p>
                                    <div className="mt-1">
                                        <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700">
                                            <RxReload />
                                            <span>Check Account</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="flex justify-between text-lg">
                                    <p>Bronze</p>
                                    <p>Silver</p>
                                </div>
                                <div>
                                    <div className="h-2 bg-[#bdbdbd] rounded-xl my-2" />
                                </div>
                                <p className="text-right text-lg">0/100000</p>
                            </div>
                        </div>
                        <ul className="pb-8">
                            {SIDEBAR_MENU.map((menuItem) => (
                                <li
                                    style={{
                                        borderColor:
                                            isMobileMenuClicked ===
                                            menuItem.title
                                                ? "black"
                                                : "",
                                        background:
                                            isMobileMenuClicked ===
                                            menuItem.title
                                                ? "rgba(0, 0, 0, 0.04)"
                                                : "white",
                                        color:
                                            isMobileMenuClicked ===
                                            menuItem.title
                                                ? "black"
                                                : "",
                                    }}
                                    onClick={() => {
                                        setIsMobileMenuClicked(menuItem.title);
                                        setTimeout(() => {
                                            router.push(
                                                `/profile/${menuItem.href}`
                                            );
                                        }, 500);
                                    }}
                                    className={`text-gray-600 pl-4 py-3 text-lg border-l-[5px] border-white`}
                                    key={menuItem.title}
                                >
                                    {menuItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full h-full hidden md:block rounded-md shadow bg-white">
                        <div className="p-5 pb-3">
                            <div className="flex gap-5 pt-5 items-center md:flex-col">
                                <div>
                                    <Avatar
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 100, height: 100 }}
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-2xl flex items-center gap-2">
                                        <p>Sheikh Swim</p>
                                        <div>
                                            <BsCheck2Circle color="green" />
                                        </div>
                                    </div>
                                    <p className="font-light text-center text-lg mt-[1px]">
                                        01834419585
                                    </p>
                                    <div className="mt-1">
                                        <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700">
                                            <RxReload />
                                            <span>Check Account</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="flex justify-between text-lg">
                                    <p>Bronze</p>
                                    <p>Silver</p>
                                </div>
                                <div>
                                    <div className="h-2 bg-[#bdbdbd] rounded-xl my-2" />
                                </div>
                                <p className="text-right text-lg">0/100000</p>
                            </div>
                        </div>
                        <ul className="pb-8">
                            {SIDEBAR_MENU.map((menuItem) => (
                                <li
                                    style={{
                                        borderColor:
                                            desktopSelectedMenu ===
                                            menuItem.href
                                                ? "black"
                                                : "",
                                        background:
                                            desktopSelectedMenu ===
                                            menuItem.href
                                                ? "rgba(0, 0, 0, 0.04)"
                                                : "white",
                                    }}
                                    onClick={() => {
                                        setDesktopSelectedMenu(menuItem.href);
                                    }}
                                    className={`text-gray-600 cursor-pointer pl-4 py-3 text-lg border-l-[5px] border-white`}
                                    key={menuItem.title}
                                >
                                    {menuItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-md flex-1 hidden md:block">
                    {desktopSelectedMenu === SIDEBAR_MENU[0].href && (
                        <BasicInformationMenuPage />
                    )}
                    {desktopSelectedMenu === SIDEBAR_MENU[1].href && (
                        <AddressesPage />
                    )}
                    {desktopSelectedMenu === SIDEBAR_MENU[2].href && (
                        <OrdersPage />
                    )}
                    {desktopSelectedMenu === SIDEBAR_MENU[8].href && (
                        <TransactionsPage />
                    )}
                </div>
            </div>
           </NoSsr>
        </>
    );
}

export const BasicInformationMenuPage = (props) => {
    return (
        <div className="bg-white rounded-md p-4 md:px-14 md:py-5">
            <p className="text-base md:text-xl text-gray-500">
                <strong className="text-xl md:text-2xl text-black mr-4">
                    Basic Information
                </strong>
                Enter your basic information for ensuring security and recovery
                of your account.
            </p>
            <hr className="my-4 border-gray-400 md:my-5" />
            <div className="flex items-start justify-start mt-7 gap-3 md:mt-14 md:gap-7">
                <div className="flex">
                    <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
                        <TextSnippetOutlinedIcon
                            className="text-white"
                            sx={{ scale: 2 }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex text-lg md:text-xl items-center lg:text-2xl justify-between">
                        <p>PERSONAL INFORMATION</p>
                        <button className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]">
                            Edit
                        </button>
                    </div>
                    <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
                        <div className="w-[40%] h-full bg-[#ccc]"></div>
                    </div>
                    <ul className="mt-5 md:mt-10 flex flex-col gap-2 md:gap-3">
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Evaly Number:</span>
                            <span className="flex-1 text-gray-500">
                                01834419585
                            </span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">First Name:</span>
                            <span className="flex-1 text-gray-500">Sheikh</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Last Name:</span>
                            <span className="flex-1 text-gray-500">Swim</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Contact Number:</span>
                            <span className="flex-1 text-gray-500">
                                01834419585
                            </span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Gender:</span>
                            <span className="flex-1 text-gray-500">Male</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Date of Birth:</span>
                            <span className="flex-1 text-gray-500">
                                15 Aug 1998
                            </span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Member Since:</span>
                            <span className="flex-1 text-gray-500">
                                26 Dec 2020
                            </span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Organization:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Occupation:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start justify-start mt-7 md:mt-14 gap-3 md:gap-7">
                <div className="flex">
                    <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
                        <PeopleAltOutlinedIcon
                            className="text-white"
                            sx={{ scale: 2 }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex text-lg md:text-xl items-center lg:text-2xl justify-between">
                        <p>PARENTS INFORMATION</p>
                        <button className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]">
                            Edit
                        </button>
                    </div>
                    <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
                        <div className="w-[40%] h-full bg-[#ccc]"></div>
                    </div>
                    <ul className="mt-5 md:mt-10 flex flex-col gap-3">
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Father's Info:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Father's Phone No:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Mother's Info:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Mother's Phone No:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start justify-start mt-7 gap-3 md:mt-14 md:gap-7 mb-12">
                <div className="flex">
                    <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
                        <MailOutlineOutlinedIcon
                            className="text-white"
                            sx={{ scale: 2 }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex text-lg md:text-xl items-center lg:text-2xl justify-between">
                        <p className="flex flex-col">
                            <span>EMAIL ADDRESS</span>
                            <span className="text-sm md:text-base text-gray-500">
                                The email address to which all the notification
                                will be sent.
                            </span>
                        </p>
                        <button className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]">
                            Edit
                        </button>
                    </div>
                    <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
                        <div className="w-[40%] h-full bg-[#ccc]"></div>
                    </div>
                    <ul className="mt-5 md:mt-10 flex flex-col gap-3">
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Primary Email:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                        <li className="flex text-base md:text-lg lg:text-xl">
                            <span className="flex-1">Other:</span>
                            <span className="flex-1 text-gray-500">N/A</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const AddressesPage = (props) => {
    return (
        <div className="bg-white h-[90vh] md:h-full rounded-md p-4 md:px-14 md:py-5">
            <p className="text-base md:text-xl text-gray-500">
                <strong className="text-xl md:text-2xl block pb-1 text-black mr-4">
                    Addresses
                </strong>
                Keep Evaly updated about your postal address so that you do not
                miss any surprise gift!
            </p>
            <hr className="my-4 border-gray-400 md:my-5" />
            <ul className="mt-7">
                <li className="text-gray-500">
                    <p className="text-lg text-black font-bold md:text-xl">
                        Sheikh Swin
                    </p>
                    <p>Dhaka</p>
                    <p>01834419585</p>
                    <div>
                        <IconButton>
                            <TbEdit />
                        </IconButton>
                        <IconButton>
                            <MdDelete />
                        </IconButton>
                    </div>
                    <div>
                        <Switch sx={{ marginLeft: -1 }} defaultChecked />
                    </div>
                    <hr className="my-2 border-gray-400 md:my-3" />
                </li>
            </ul>
            <div className="mt-5 md:mt-7 flex justify-end">
                <button className="flex w-[55%] md:w-[40%] bg-red-600 text-white py-2 rounded-md items-center gap-2 justify-center">
                    <div>
                        <AiOutlinePlusCircle />
                    </div>
                    <p className="lg:text-lg">Add New address</p>
                </button>
            </div>
        </div>
    );
};

export const OrdersPage = (props) => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="bg-white rounded-md p-4 pb-7 md:px-14 md:py-5">
            <p className="text-base md:text-xl text-gray-500">
                <strong className="text-xl md:text-2xl text-black mr-4">
                    Orders
                </strong>
                Your order history in evaly
            </p>
            <hr className="my-4 border-gray-400 md:my-5" />
            <div className="shadow rounded-md pt-4">
                <div className="flex w-full justify-center items-center gap-1 md:gap-7">
                    <TextField
                        size="small"
                        sx={{ width: "50%",outline:'black' }}
                        className="px-2"
                        type={"text"}
                        autoComplete="off"
                        placeholder="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon color="inherit" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControl
                        sx={{ m: 1, minWidth: 140, width: "30%" }}
                        size="small"
                    >
                        <InputLabel id="demo-select-small">Filter</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={filter}
                            label="Filter"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={10}>All</MenuItem>
                            <MenuItem value={20}>Unpaid</MenuItem>
                            <MenuItem value={30}>Paid</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <InvoicesWidget />
                </div>
            </div>
        </div>
    );
};

const InvoicesWidget = (props) => {
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const [noOfPages] = useState(Math.ceil(invoicesData.length / itemsPerPage));

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <section className="pb-3">
            <div>
                <div className="flex justify-between text-center gap-2 text-sm lg:text-base font-semibold text-black items-center px-4 py-3">
                    <p className="flex-1">Order</p>
                    <p className="flex-1">Order Date</p>
                    <p className="flex-1">Amount</p>
                    <p className="flex-1">Payment</p>
                    <p className="flex-1">Status</p>
                </div>
                <List dense component="span">
                    {invoicesData
                        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map((projectItem) => {
                            return (
                                <ListItem
                                    key={projectItem.invoiceId}
                                    button
                                    onClick={() => {}}
                                    sx={{ padding: "3px 0px", borderBottom:'1px solid #ccc' }}
                                >
                                    <div className="w-full text-center flex items-center justify-between gap-2 text-sm px-4 py-3">
                                        <p className="flex-1 text-sky-500">
                                            #{projectItem.invoiceId}
                                        </p>
                                        <p className="flex-1">
                                            {projectItem.date}
                                        </p>
                                        <p className="flex-1">
                                            ${projectItem.amount}
                                        </p>
                                        <div className="flex-1 flex justify-center items-center">
                                            <p
                                                className={`
                                             uppercase px-[7px] lg:px-3 lg:py-1 text-[12px] lg:text-xs rounded-full ${
                                                 projectItem.status ===
                                                 "pending"
                                                     ? "text-red-700 bg-red-200"
                                                     : projectItem.status ===
                                                       "completed"
                                                     ? "text-green-700 bg-green-200"
                                                     : "text-red-700 bg-red-200"
                                             }`}
                                            >
                                                {projectItem.status ===
                                                "completed"
                                                    ? "PAID"
                                                    : projectItem.status ===
                                                      "pending"
                                                    ? "UNPAID"
                                                    : projectItem.status ===
                                                      "cancelled"
                                                    ? "UNPAID"
                                                    : "PAID"}
                                            </p>
                                        </div>
                                        <div className="flex-1 flex justify-center items-center">
                                            <p
                                                className={`
                                             uppercase px-[7px] lg:px-3 lg:py-1 text-[12px] lg:text-xs rounded-full ${
                                                 projectItem.status ===
                                                 "pending"
                                                     ? "text-red-700 bg-red-200"
                                                     : projectItem.status ===
                                                       "completed"
                                                     ? "text-green-700 bg-green-200"
                                                     : "text-red-700 bg-red-200"
                                             }`}
                                            >
                                                {projectItem.status ===
                                                "completed"
                                                    ? "DONE"
                                                    : "CANCEL"}
                                            </p>
                                        </div>
                                    </div>
                                </ListItem>
                            );
                        })}
                </List>
            </div>
            <div className="flex items-center pt-2 justify-center">
                <Box component="span">
                    <Pagination
                        size="small"
                        count={noOfPages}
                        page={page}
                        onChange={handleChange}
                        defaultPage={1}
                        classes={{ ul: "paginator" }}
                    />
                </Box>
            </div>
        </section>
    );
};

const invoicesData = [
    {
        invoiceId: 4985,
        projectName: "score",
        amount: 79521,
        date: "Sept 18",
        status: "completed",
    },
    {
        invoiceId: 5984,
        projectName: "score",
        amount: 79521,
        date: "Sept 17",
        status: "pending",
    },
    {
        invoiceId: 1553,
        projectName: "score",
        amount: 79521,
        date: "Sept 16",
        status: "completed",
    },
    {
        invoiceId: 1623,
        projectName: "score",
        amount: 79521,
        date: "Sept 15",
        status: "completed",
    },
    {
        invoiceId: 1735,
        projectName: "score",
        amount: 79521,
        date: "Sept 14",
        status: "completed",
    },
    {
        invoiceId: 1853,
        projectName: "score",
        amount: 79521,
        date: "Sept 13",
        status: "cancelled",
    },
    {
        invoiceId: 1955,
        projectName: "Marathon",
        amount: 79521,
        date: "Sept 12",
        status: "pending",
    },
    {
        invoiceId: 2053,
        projectName: "TestProject",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 24,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 25,
        projectName: "manu",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 26,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 27,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 28,
        projectName: "123",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 29,
        projectName: "1234",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 30,
        projectName: "Sample",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 31,
        projectName: "1",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 32,
        projectName: "1",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 33,
        projectName: "2",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 34,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 35,
        projectName: "TestProject2",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 36,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 37,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 38,
        projectName: "AWS ",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 39,
        projectName: "AWS TEST",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 40,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 41,
        projectName: "hahj",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 42,
        projectName: "hahj",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 44,
        projectName: "nnaj",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 46,
        projectName: "Best Western",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 50,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 51,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 52,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 53,
        projectName: "sample",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 54,
        projectName: "ABC",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 56,
        projectName: "sample project",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 57,
        projectName: "XYZProject",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 58,
        projectName: "test",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 59,
        projectName: "b",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 60,
        projectName: "test",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 61,
        projectName: "SAMPLE",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 62,
        projectName: "SAMPLE",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 63,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 64,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 65,
        projectName: "TestRandom",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 66,
        projectName: "RandomProjectName",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 67,
        projectName: "test",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 68,
        projectName: "Best Western International",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 69,
        projectName: "a",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 70,
        projectName: "RandomProjectName",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 71,
        projectName: "SecretProject",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 77,
        projectName: "score",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 79,
        projectName: "RandomProjectName2",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 80,
        projectName: "RandomProjectName2",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 82,
        projectName: "YetAnotherRandomProject",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 84,
        projectName: "Test Project 2",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 96,
        projectName: "CannotStopWithRandomProjects",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 111,
        projectName: "S.H.I.E.L.D",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 113,
        projectName: "Avengers",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 114,
        projectName: "Justice League",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 124,
        projectName: "TestProject",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 126,
        projectName: "Justice League",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 127,
        projectName: "Test Project",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
    {
        invoiceId: 133,
        projectName: "test project",
        amount: 79521,
        date: "Sept 19",
        status: "pending",
    },
];
