import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";


const Home: FC = () => {
    return (
        <div className={"flex flex-col justify-center w-1/2 mx-auto"}>
            <div className={"text-center text-4xl font-semibold my-2"}>
                Your place to share&read opinions about every job
            </div>
            <div className={"text-center text-gray-500 my-2"}>
                Let's make world a better place!
            </div>
            <div className={"text-center mb-2 mt-7"}>
                <input className={"bg-gray-100 rounded py-1.5 px-3 mx-1.5"} placeholder={"Type in company name"}/>
                <button className={"bg-orange-600 rounded p-1.5 text-white w-32"}>Search</button>
            </div>
            <div className={"text-center text-gray-500 text-xs my-2"}>
                {/*That's not how you spell anonymous TODO*/}
                You will always be as anonymus as you want to be
            </div>
            <div className={"text-center text-orange-600 font-bold text-xl mt-12"}>
                I want to see a full list of companies
                <FontAwesomeIcon className={"mx-2"} icon={faCircleChevronRight} />
            </div>
        </div>
    );
}

export default Home;