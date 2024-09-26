import Navbar from "../components/navbar";
import Header from "../components/header";
import Stories from "../components/home/stories";
import BarceNews from "@/components/home/news";
import Jersey from "@/components/home/jersey";

function Home(){
    return(
        <main className="flex-row bg-gradient-to-b from-blue-400 to-red-400">
            <Navbar />
            <Header/>
            <Stories/>
            <BarceNews />
            <Jersey/>
        </main>
    )
}
export default Home;

