import { IconButton } from "@mui/material";
import { RxReload } from "react-icons/rx";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';

const TransactionsPage = props => {
    return (
        <>
             <div className="bg-white pb-9 md:h-full rounded-md p-4 md:px-14 md:py-5">
            <p className="text-base md:text-xl text-gray-500">
                <strong className="text-xl md:text-2xl pb-1 text-black mr-4">
                    Evaly Account
                </strong>
                Your account information.
            </p>
            <hr className="my-4 border-gray-400 md:my-5" />
            <div className="mt-5">
                <div className="flex items-center gap-3">
                    <p className="text-3xl">$ 0.00</p>
                    <IconButton>
                    <RxReload />
                    </IconButton>
                </div>
                <p className="text-gray-600 mt-2">Current Balance</p>
            </div>
            <hr className="my-4 border-gray-400 md:my-5" />
            <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="flex gap-4 shadow p-4 rounded-md">
                    <div><MonetizationOnOutlinedIcon sx={{height:35,color:'#0EA5E9'}} /></div>
                    <div className="text-lg">
                        <p className="text-gray-700">Account</p>
                        <p className="font-bold mt-1">$ 0.00</p>
                    </div>
                </div>
                <div className="flex gap-4 shadow p-4 rounded-md">
                    <div><MonetizationOnOutlinedIcon sx={{height:35,color:'#0EA5E9'}} /></div>
                    <div className="text-lg">
                        <p className="text-gray-700">Holding Balance</p>
                        <p className="font-bold mt-1">$ 0.00</p>
                    </div>
                </div>
                <div className="flex gap-4 shadow p-4 rounded-md">
                    <div><MonetizationOnOutlinedIcon sx={{height:35,color:'#0EA5E9'}} /></div>
                    <div className="text-lg">
                        <p className="text-gray-700">Gift Card Balance</p>
                        <p className="font-bold mt-1">$ 0.00</p>
                    </div>
                </div>
                <div className="flex gap-4 shadow p-4 rounded-md">
                    <div><MonetizationOnOutlinedIcon sx={{height:35,color:'#0EA5E9'}} /></div>
                    <div className="text-lg">
                        <p className="text-gray-700">Cashback Balance</p>
                        <p className="font-bold mt-1">$ 0.00</p>
                    </div>
                </div>
            </div>
            <div className="pt-5 lg:py-7">
                <h2 className="text-2xl font-bold">Transaction History</h2>
               <div className="pt-10 lg:pt-14">
               <div className="flex justify-center items-center flex-col gap-5">
                    <div>
                        <RequestPageOutlinedIcon style={{fontSize:100, borderRadius:'50%',background:"#f5f5f7",padding:20, color:'black'}} />
                    </div>
                    <div className="text-lg text-center">
                        <p className="font-bold">Sorry, No Data Found.</p>
                        <p className="font-light">Sorry, No Transaction Found.</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
        </>
    );
};

export default TransactionsPage;
