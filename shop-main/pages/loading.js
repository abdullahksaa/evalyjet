import LoadingSpinner from "../components/ui/loading-spinner";

const LoadingSpinnerPage = props => {
    return (
        <div className="bg-black flex items-center justify-center h-[90vh]">
            <LoadingSpinner />
        </div>
    );
};

export default LoadingSpinnerPage;
