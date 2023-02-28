import home1 from "../assets/home-1.jpg"
import home2 from "../assets/home-2.jpg"
import Statistic from "./Statistic"

function Statistics() {
  return (
    <div className="mt-4 md:mb-24">
      <Statistic image={home1}>
        <p>50 000+ satisfied customers.</p>
        <p>250 000+ sold items.</p>
        <p>3 physical stores.</p>
      </Statistic>
      <Statistic image={home2} isEven>
        <p>Free refunds.</p>
        <p>Highest quality materials.</p>
        <p>Huge discounts.</p>
      </Statistic>
    </div>
  )
}

export default Statistics
