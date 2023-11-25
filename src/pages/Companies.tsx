import {FC} from "react";

interface Review {
    username: string
    title: string
    content: string
}

interface CompaniesProps {

}


const industries = ["Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other", "Industry", "IT", "Banking", "Shops", "Other"]
const companies = ["Long company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company", "Company"]
const reviews: Review[] = Array(20)
    .fill({
            username: "Julian",
            title: "This company is great!",
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit non lorem pellentesque cursus vitae in enim. Aenean tristique magna in neque"
        }
    )

const Companies: FC<CompaniesProps> = ({}) => {
    return (
        <div className={"flex flex-row w-4/5 mx-auto"} style={{maxHeight: "80vh"}}>
            <div className={"flex-col border-2 border-orange-600 rounded px-3 py-1 m-1.5 overflow-y-auto"}>
                {industries.map((industry, index) => (
                    <span key={index} className={"flex"}>{industry}</span>
                ))}
            </div>
            <div className={"flex-col border-2 border-orange-600 rounded px-3 py-1 m-1.5 overflow-y-auto"}>
                {companies.map((company, index) => (
                    <span key={index} className={"flex"}>{company}</span>
                ))}
            </div>
            <div className={"flex flex-col overflow-y-auto"}>
                {reviews.map((review, index) => (
                    <div key={index} className={"border-2 border-orange-600 rounded px-2 py-1 m-1.5"}>
                        <div className={"flex flex-row"}>
                            <span className={"col-span-1 m-1 text-lg"}>{review.username}</span>
                            <span className={"col-span-4 mx-auto m-1 text-lg font-medium text-gray-800"}>
                                {review.title}
                            </span>
                        </div>
                        <div className={"m-1"}>
                            {review.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies;