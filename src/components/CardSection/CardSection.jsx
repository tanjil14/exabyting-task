import Card from "../card/Card";
import logo1 from "../../assets/images/card-logo-1.png"
import logo2 from "../../assets/images/card-logo-2.png"
import logo3 from "../../assets/images/card-logo-3.png"
const CardSection = () => {
    return (
        <section className="my-10 flex flex-col md:flex-row items-center  justify-center gap-4">
            <Card img={logo1} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" desc="Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore"/>
            <Card img={logo2} title="Sed do eiusmod tempor incididunt ut labore " desc="Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel"/>
            <Card img={logo3} title="Quis autem vel eum iure reprehenderit qui in ea voluptate" desc="Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your"/>
        </section>
    );
};

export default CardSection;