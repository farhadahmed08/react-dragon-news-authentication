import { useParams } from "react-router-dom";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/Navbar/Navbar";


const News = () => {

    const {id} = useParams();


    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 ">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
            
        </div>
    );
};

export default News;