import Tagline from "../assets/media/Tagline";
import roadmap from "../Data/Roadmap";
import { check2, grid, loading1 } from "../assets/media";

const Roadmap = () => (
  <div className="overflow-hidden">
    <div className="container md:pb-10">
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-md border border-[#521814]`}
              style={{
                background:
                  "radial-gradient(84.91% 164.25% at 51.7% -91.45%, #3F97FF 0%, #000000 100%)",
              }}
              key={item.id}
            >
              <div className="relative p-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                    loading="lazy"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 text-white">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-white rounded text-black">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                        loading="lazy"
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <h1 className="mb-4 text-white text-xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-dimWhite">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Roadmap;
