import { IoIosArrowRoundForward } from "react-icons/io";

const Stories = () => {
  return (
    <section className="relative mt-10 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-2 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 xl:grid-rows-6 xl:grid-flow-col xl:min-h-[1200] z-10">
        <div
          className="xl:col-span-3 xl:row-span-2 xl:h-[200px] p-6 flex flex-col gap-2 justify-center items-start relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxzdG9yaWVzfGVufDB8fHx8MTY4NzU5ODg1Mw&ixlib=rb-1.2.1&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="relative bg-white/20 rounded-sm capitalize text-accent text-xl font-extrabold w-fit p-2">
            Success Stories
          </h3>
          <p className="relative text-white text-xl">By you It’s happened</p>
          <p className="relative text-white/80 text-sm">
            Your generosity transforms lives. Every donation, no matter how small, contributes to real change.
          </p>
        </div>
        <div
          className="xl:col-span-3 xl:row-span-4 relative bg-cover mask-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535043883-2548fb805573?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className="leading-loose relative">Amina's Dream Realized</h1>
            <p className="text-sm text-white/50 mb-2 relative">
              Regular supplies keep Amina in school daily. Now top of her class, she aspires to become a doctor.
            </p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm relative">
              Know more <IoIosArrowRoundForward className="text-accent text-3xl" />
            </p>
          </div>
        </div>
        <div
          className="xl:col-span-2 xl:row-span-3 relative bg-cover mask-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1655737617209-df00e8728f42?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className="leading-loose relative">Clean Water Brings Dignity</h1>
            <p className="text-sm text-white/60 mb-2 relative">
              New sanitation at Makena Primary boosts attendance. Students attend without fear or discomfort.
            </p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm relative">
              Know more <IoIosArrowRoundForward className="text-accent text-3xl" />
            </p>
          </div>
        </div>
        <div
          className="xl:col-span-2 xl:row-span-3 relative bg-cover mask-image bg-right-top bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1690715541830-8146074eab02?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top right',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className="leading-loose relative">Kibera's Transformation</h1>
            <p className="text-sm text-white/60 mb-2 relative">
              Our program increased student's attendance by 35%. Mothers now see brighter futures for their children.
            </p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm relative">
              Know more <IoIosArrowRoundForward className="text-accent text-3xl" />
            </p>
          </div>
        </div>
        <div
          className="xl:col-span-2 xl:row-span-3 relative bg-cover mask-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHNjaG9vbHxlbnwwfHx8fDE2ODc1OTg4NTM&ixlib=rb-1.2.1&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className="leading-loose relative">Sarah: From Student to Mentor</h1>
            <p className="text-sm text-white/50 mb-2 relative">
              Consistent support led Sarah to graduate as valedictorian. Now she mentors younger students, spreading
              empowerment.
            </p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm relative">
              Know more <IoIosArrowRoundForward className="text-accent text-3xl" />
            </p>
          </div>
        </div>
        <div
          className="xl:col-span-2 xl:row-span-3 relative bg-cover mask-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className="leading-loose relative">Breaking Barriers Together</h1>
            <p className="text-sm text-white/50 mb-2 relative">
              Our inclusive program in Laikipia saw both girls and boys championing menstrual health. School attendance
              rose 50%, with boys actively supporting their female classmates.
            </p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm relative">
              Know more <IoIosArrowRoundForward className="text-accent text-3xl" />
            </p>
          </div>
        </div>
      </div>

      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
    </section>
  );
};

export default Stories;

