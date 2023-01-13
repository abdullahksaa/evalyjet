import { Bars } from "react-loader-spinner";
import { Inria_Sans } from "@next/font/google";

const inria_sans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const LoadingSpinner = (props) => {
    return (
        <div className={`flex flex-col items-center ${inria_sans.className}`}>
            <Bars
                height="80"
                width="60"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <p className="text-white text-xl">Please wait ...</p>
        </div>
    );
};

export default LoadingSpinner;
