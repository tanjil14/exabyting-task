import player from "../../assets/images/button-player.png"
import hero from "../../assets/images/hero-img.png"
const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row pl-6">
           <div className="flex flex-col items-center mt-5 px-6">
           <div>
            <h5 className="font-normal text-[126px] leading-[144px]">Lore <strong>ipsum.</strong> Dolor <strong>sit.</strong></h5>
            </div> 
            <div>
                <p className="font-normal text-2xl opacity-[0.7]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
            </div>
            <div className="flex gap-4 my-8">
                <button className="font-semibold text-lg border border-solid rounded-md border-[#1E1E1E] px-6 py-2">
                Viverra orci sagittis
                </button>
                <button className="flex gap-1 font-semibold text-lg  rounded-md bg-[#58BF73] px-6 py-2 text-white">
                         <img src={player} alt="player" />  Get a demo
                </button>
            </div>
            </div>
            <div className="mt-5 lg:mt-0">
                <img src={hero} className="w-full" alt="hero" />
            </div>
           
        </section>
    );
};

export default Hero;