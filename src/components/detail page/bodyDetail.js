import HeaderDetail from "./header/headerDetail";
import BodyWrap from "./body/bodyWrap";
import BuyNow from "./buyNow/buyNow";
function BodyDetail({handleBuySuccess}) {
    return (
        <div>
           <HeaderDetail onHandleBuySuccess={handleBuySuccess}/>
           <BodyWrap/>
        </div>
     );
}

export default BodyDetail;
