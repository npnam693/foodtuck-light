const dataPartners = [
    {
        image: "./images/home/partner_1.png"
    },
    {
        image: "./images/home/partner_2.png"
    },
    {
        image: "./images/home/partner_3.png"
    },
    {
        image: "./images/home/partner_4.png"
    },
    {
        image: "./images/home/partner_5.png"
    },
    {
        image: "./images/home/partner_6.png"
    },
]

const HomePartner = () => {
  return (
    <section className='mt-24 flex flex-col items-center relative mb-12'>
        <p className="relative font-attractive mb-2 text-lg text-primary">
            Partner & Clients
        </p>
        <p className="inline-block font-bold text-5xl text-text font-sans mb-8 relative
            after:content-limb  after:absolute after:-top-20 after:right-64 after:scale-75">
          We work with the best pepole
        </p>
        <div className='flex gap-x-16 mt-16'>
            {
                dataPartners.map((item, index:number) => { 
                    return (
                        <img src={item.image} alt="" key={index} loading="lazy" />
                    )
                })
            }
        </div>
    </section>
  )
}

export default HomePartner