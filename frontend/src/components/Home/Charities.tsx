import { charities } from "@/constants";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Progress } from "../ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Charities = () => {
  return (
    <section className="">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="min-h-28 z-10">
          <div className="max-w-screen-lg mx-auto py-4">
            <h2 className="h2 text-center text-white font-display">
              Your Help Is Needed
            </h2>
            <ScrollArea className="w-[95vh] xl:w-full whitespace-nowrap rounded-md z-10">
              <div className="flex relative gap-6 mt-20">
                {charities.map((charity, index) => {
                  return (
                    <div
                      key={index}
                      className=" w-1/3 shadow rounded-lg overflow-hidden"
                    >
                      <img
                        src={charity.img}
                        className="object-cover h-52 w-full z-0"
                        alt=""
                      />
                      <div className="relative -top-5 p-4 mx-3 bg-secondary z-10 border-white/50 border-2">
                        <span
                          className={`${charity.color} w-fit bg-white/20 rounded-md px-2 py-1 font-semibold text-sm`}
                        >
                          {charity.categeory}
                        </span>
                        <h3 className="mt-3 font-bold text-md pb-4 ">
                          {charity.title}
                        </h3>
                        <div className="">
                          <Progress value={charity.progress} />
                        </div>
                        <div className="flex flex-row mt-4 gap-10 items-center pb-4 border-b border-white/50">
                          <div className="text-sm text-white/40">
                            <p>Goal</p>
                            <p className="text-[16px] text-white/60">
                              ${charity.goal}
                            </p>
                          </div>
                          <div className="text-sm text-white/40">
                            <p>Collected</p>
                            <p className="text-[16px] text-white/60">
                              ${charity.collected}
                            </p>
                          </div>
                          <div className="text-sm text-white/40">
                            <p>Remaining</p>
                            <p className="text-[16px] text-white/60">
                              ${charity.remaining}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4 mt-4">
                          <Button className="uppercase flex items-center gap-2 min-w-[200px]">
                            Donate
                            <FaHeart className=" text-xl text-accent" />
                          </Button>
                          <Link to="/donation">
                            <div className="flex justify-center items-center h-[45px] w-[45px] bg-accent rounded-full">
                              <IoArrowRedoOutline className="text-2xl relative -top-[1px] text-white " />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>

      <div className="absolute z-[0] w-[50%] h-[50%] left-40 bottom-40 blue__gradient" />
    </section>
  );
};

export default Charities;
