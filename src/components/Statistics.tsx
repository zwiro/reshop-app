import Statistic from "./Statistic"

function Statistics() {
  const images = {
    home1:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
    home2:
      "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  }

  return (
    <div className="mt-4 md:mb-24">
      <Statistic image={images.home1}>
        <p>50 000+ satisfied customers.</p>
        <p>250 000+ sold items.</p>
        <p>3 physical stores.</p>
      </Statistic>
      <Statistic image={images.home2} isEven>
        <p>Free refunds.</p>
        <p>Highest quality materials.</p>
        <p>Huge discounts.</p>
      </Statistic>
    </div>
  )
}

export default Statistics
