
const STATISTICS = [
    {
        image: './images/menu/statistics_1.svg',
        title: 'Professional Chefs',
        amount: "420",
    },
    {
        image: './images/menu/statistics_2.svg',
        title: 'Items Of Food',
        amount: "320",
    },
    {
        image: './images/menu/statistics_3.svg',
        title: 'Years Of Experienced',
        amount: "30+",
    },
    {
        image: './images/menu/statistics_4.svg',
        title: 'Happy Customers',
        amount: "200"
    }
]

const MenuStatistics = () => {
  return (
    <section>
        <div className="relative w-screen -left-[300px] bg-[url('./images/menu/bg-statictis.png')] h-[500px] bg-cover">
            <div className="h-full bg-[rgba(0,0,0,.8)] flex justify-between px-[300px] items-center">
                {
                    STATISTICS.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.title} className="w-24 mx-auto" />
                            <p className="text-white text-center mt-10 text-4xl font-bold">{item.amount}</p>
                            <p className="text-white text-center text-2xl font-bold mt-5">{item.title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default MenuStatistics