import ItemMember from "../../../components/home/ItemMember"

const HomeTeam = () => {
  return (
    <section className="mt-24 flex flex-col items-center">
        <div className="absolute w-screen">
            <img src='./decoration/cabbage.png' alt='team' loading="lazy" className="absolute right-0 z-10 -top-[380px]"/>
            <img src='./images/bg-team.png' alt='bg-team' loading="lazy" className="w-screen absolute"/>
        </div>
        <div className="relative mt-40">
            <p className="font-bold text-5xl text-white font-san mb-2 text-center
            after:block after:content-limb after:bottom-10 after:right-32 after:absolute
            ">
            Team member
            </p>
            <p className="text-white text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Varius sed pharetra dictum neque massa congue</p>
        </div>

        <div className="z-10 flex justify-between w-full">
            <ItemMember image="./images/home/member_1.png" name="Mark Henry" role="Owner"/>
            <ItemMember image="./images/home/member_1.png" name="Mark Henry" role="Owner"/>
            <ItemMember image="./images/home/member_1.png" name="Mark Henry" role="Owner"/>
            <ItemMember image="./images/home/member_1.png" name="Mark Henry" role="Owner"/>
        </div>
    </section>
  )
}

export default HomeTeam