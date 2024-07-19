import Button from "./Button";
import Marquee from "react-fast-marquee";
import Slider from "./Slider";
import Slider2 from "./Slider2";
const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[90vh] ">
      <div className="mr-[10rem] gap-4 flex flex-col items-start ">
        <h1 className="text-5xl font-large leading-[4rem]">
          Empowering Lives Through <br></br>Innovative{" "}
          <span className="font-bold underline underline-offset-2 decoration-[#6881FF]">
            AI
          </span>{" "}
          Technologies.
        </h1>
        <p className="text-xl text-gray-400">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>
        <div className="flex gap-10">
          <Button
            title={"Explore Our Services"}
            classes={"bg-[#6A35FF] font-semibold  text-lg rounded-lg p-3"}
          />
          <Button
            title={"Learn More"}
            classes={"border border-1 border-[#6881FF] rounded-lg px-10"}
          />
        </div>
        <div className="w-[40rem] rounded-lg text-2xl ">
          <Marquee gradient={"400px"} gradientColor="#141414">
            <Slider />
            <Slider2 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Info;
