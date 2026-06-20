import Inputfield from "../components/inputCard/Inputfield";
import Navbar from "../components/navbar/Navbar"
import Outputfield from "../components/outputCard/Output";


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="main">

                <Outputfield />
                <Inputfield />
            </div>


        </>
    )
}
export default Home;