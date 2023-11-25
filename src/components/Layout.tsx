import {FC, ReactNode} from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => (
    <div className={"flex flex-col h-screen"}>
        <AppNavbar/>
        <div className={"my-8"}>
            {children}
        </div>
        <Footer/>
    </div>
);

export default Layout;