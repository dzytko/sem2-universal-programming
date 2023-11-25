import {FC} from "react";


interface ReviewAddProps {

}

const ReviewAdd: FC<ReviewAddProps> = ({}) => {
    return (
        <div className={"flex flex-col mx-auto w-1/2 text-center"}>
            <div className={"font-medium text-lg"}>New opinion for a company</div>
            <div className={"font-medium text-lg mb-3"}>Company name</div>
            <input className={"bg-gray-100 rounded px-2 py-1.5 my-1"} type="text" placeholder={"Opinion title"}/>
            <textarea  className={"bg-gray-100 rounded px-2 py-1.5 my-1"} cols={20} placeholder={"Type your opinion here"}/>
            <button className={"bg-orange-600 rounded text-white py-1.5 my-3"}>Submit</button>
            <button className={"bg-blue-500 rounded text-white py-1.5 my-1"}>Go back</button>
        </div>
    );
}

export default ReviewAdd;