import Hero from "@/components/Home/Hero";
import Charities from "@/components/Home/Charities";
import Stories from "@/components/Home/Stories";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto ">
      <div className="absolute z-10 hero-bg h-[800px] w-[100vw] right-0"></div>
        <Hero />
        <Charities />
        <Stories />
      </div>
      {/* <div className="py-10 bg-white/20 mt-20 "> */}
        {/* <div className="container mx-auto flex flex-col gap-8 xl:gap-0 xl:flex-row justify-center xl:justify-between items-center "> */}
          {/* <div> */}
            {/* <h1 className="text-xl mb-4 font-bold">Get update on success stories</h1> */}
            {/* <p className="text-white/50">Get directly on your email</p> */}
          {/* </div> */}
          {/* <div className="flex flex-col xl:flex-row gap-4 items-center xl:items-start"> */}
            {/* input */}
              {/* <Input placeholder="Enter your email" /> */}
            {/* button */}
            {/* <Button variant="secondary" size="md" className="max-w-40"> */}
              {/* Subscribe */}
            {/* </Button> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Home;
