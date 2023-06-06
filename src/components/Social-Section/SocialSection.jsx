
import social from "../../assets/images/social-icons.png"
const SocialSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-4/5 px-10">
                <h3 className="font-medium text-[51px] text-[#181F1B]">Sed ut perspiciatis unde omnis iste natus error.<strong>Try out!</strong></h3>
                <p className="text-2xl opacity-[0.7] my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ullamco esse cillium</p>
                <button className="button rounded-md bg-[#58BF73] font-semibold text-lg px-8 py-2 text-white mt-8">Try Out Now!</button>
            </div>
            <div>
                <img src={social} alt="social" />
            </div>
        </section>
    );
};

export default SocialSection;