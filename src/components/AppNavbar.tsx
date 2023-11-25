import {FC} from "react";


interface AppNavbarProps {

}

const AppNavbar: FC<AppNavbarProps> = ({}) => {
    return (
        <div className={"flex justify-between"}>
            <a className={"flex"} href={"/"}>
                <div className={"rounded-full bg-orange-600 h-9 w-9 m-3"}>&nbsp;</div>
                <div className={"text-xl mx-1 my-auto"}>WalkJob</div>
            </a>

            <div className={"flex mx-3"}>
                <button className={"bg-orange-600 my-auto p-2 w-40"}>
                    <span className={"text-white"}>Login</span>
                </button>
                <button className={"border-2 my-auto p-2 w-40"}>
                    <span>Register</span>
                </button>
            </div>
        </div>
    );
}

export default AppNavbar;