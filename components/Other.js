import AmenitiesAndMeals from "./AmenitiesAndMeals";
import Footer from "./Footer";
import Location from "./Location";
import Price from "./Price";
import RealMoment from "./RealMoment";
import Rooms from "./Rooms";

export default function Other(){
    return(
        <div>
            <AmenitiesAndMeals/>
            <RealMoment/>
            <Location/>
            <Rooms/>
            <Footer/>
            <Price/>
        </div>
    )
}