import {FC} from "react";


interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className={"w-full px-4 mt-auto"}>
            <div className={"flex justify-center w-100 md:w-3/4 xl:w-1/2 mx-auto my-2"}>
                <button className={"flex-1 text-white py-1 px-2 rounded mx-3 bg-orange-600"}>Change font size</button>
                <button className={"flex-1 text-white py-1 px-2 rounded mx-3 bg-lime-500"}>Change contrast</button>
                <button className={"flex-1 text-white py-1 px-2 rounded mx-3 bg-blue-600"}>Need help?</button>
            </div>
            <div className={"flex justify-center m-2"}>
                <span className={"text-gray-500 text-xs text-center"}>&copy;Copyright - Plololub</span>
            </div>
        </footer>
    );
}

export default Footer;