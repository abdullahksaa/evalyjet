import "../styles/globals.css";
import Navigation from "../components/navigation";
import SimpleBottomNavigation from '../components/layouts/bottom-nav-mobile';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
            <SimpleBottomNavigation />
        </>
    );
}
