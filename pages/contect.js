import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const contect = () => {
  return (
    <section className="bg-black sm:px-16 px-6  ">
      <NavBar con={false} cont={false} allp={true} />
      {/* <ContentForm /> */}
      <div className="mb-28">
        <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white  text-center">
          Contact Ether
        </h1>
        <Footer
       
          twitter="https://twitter.com/ether"
          discord="https://discord.gg/etherproject" 
        />
      </div>
      <div>
        <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white  text-center">
          Contact Me
        </h1>
        <Footer
          twitter="https://twitter.com/sivareddy1112"
          mail="sivareddy40430@gmail.com"
          insta="https://www.instagram.com/sivareddy.eth/"
        />
      </div>
    </section>
  );
};

export default contect;
