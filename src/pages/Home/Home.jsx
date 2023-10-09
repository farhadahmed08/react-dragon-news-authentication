import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

  const news = useLoaderData();
  // console.log(news)


  return (
    <div>
      <Header></Header>
      <BreakingNews/>
      <Navbar />
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div>
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2 ">
            {
              news?.map(aNews=> <NewsCard key={aNews._id} news ={aNews}></NewsCard>

              )
            }
        </div>
        <div> 
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
