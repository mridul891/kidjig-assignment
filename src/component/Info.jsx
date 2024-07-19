import Button from "./Button";

const Info = () => {
  return (
    <div>
      <h1>
        Empowering Lives Through <br></br>Innovative AI Technologies.
      </h1>
      <p>
        Finding new horizons for visionaries to accelerate their innovation and
        progress.
      </p>
      <div className="flex gap-10">
        <Button title={"Explore Our Services"} classes={"bg-[#6A35FF]"} />
        <Button title={"Learn More"} classes={"border border-1 border-[#6881FF]"} />
      </div>
    </div>
  );
};

export default Info;
