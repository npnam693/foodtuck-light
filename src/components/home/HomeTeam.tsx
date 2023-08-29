
const HomeTeam = () => {
  return (
    <section className="mt-24 flex flex-col items-center">
        <img src='./decoration /cabbage.png' alt='team' className="absolute right-0"/>
        <img src='./images/bg-team.png' alt='bg-team' className="w-screen absolute"/>
        <div className="relative mt-40">
            <p className="font-bold text-5xl text-white font-san mb-2 text-center
            after:block after:content-limb after:bottom-10 after:right-32 after:absolute
            ">
            Team member
            </p>
            <p className="text-white text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Varius sed pharetra dictum neque massa congue</p>
        </div>
    </section>
  )
}

export default HomeTeam