import { useEffect } from "react";
import { useRouter } from "next/router";
import { Inria_Sans } from "@next/font/google";

const inriaSans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

import { AddressesPage, BasicInformationMenuPage, OrdersPage } from ".";
import { TransactionsPage } from "../../components/profile";

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

export default function ProfileMenuPage () {
    const router = useRouter();

    useEffect(()=>{
        if (window && window.innerWidth > 768) {
            router.push('/profile');
        }
    });

    const content = SIDEBAR_MENU.find(menu => menu.href === router.query.slug);
    return <div className={`${inriaSans.className} md:hidden p-3 pb-20 md:pb-0`}>
        {content?.title === SIDEBAR_MENU[0].title && <BasicInformationMenuPage />}
        {content?.title === SIDEBAR_MENU[1].title && <AddressesPage />}
        {content?.title === SIDEBAR_MENU[2].title && <OrdersPage />}
        {content?.title === SIDEBAR_MENU[8].title && <TransactionsPage />}
    </div>
}
