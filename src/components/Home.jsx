import { globe, building, partnership, people } from "../assets/media";
import TagLine from "../assets/media/Tagline";
import styles from "../style";
import ImageCollage from "./ImageCollage";
import Roadmap from "./Roadmap";

const Home = () => {

  const intership = "https://github.com/nakujaproject/NakujaProject-web/issues/3";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            ></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-gradient"> Design.</span> Make.
            <span className="text-blue-600">Launch.</span>
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600">
            Nakuja project aims to build a liquid-fuel rocket to bring small
            satellites into the orbit. We are based in Jomo Kenyatta University
            of Agriculture and Technology <TagLine>JKUAT </TagLine>
          </h2>

          <div className="mt-10 flex items-center justify-center md:inline-flex">
            <a
              className="border border-blue-500  rounded-3xl mb-10 inline-flex items-center justify-center text-[14px]"
              href={intership}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">
                {" "}
                Apply for internship! Join Us!
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}

      <ImageCollage />

      <div
        className={`align-center relative mx-auto flex h-full w-full max-w-[1990px] flex-col ${styles.boxWidth}`}
      >
        {/* -----------Rocket development in Kenya----------------- */}

        <div className="relative z-10 mt-0 flex h-[90vh] w-full flex-col md:h-[90vh]">
          <div className="relative grid h-[300px] w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div
                className="h-full w-[3px]"
                style={{
                  background:
                    "linear-gradient(0deg, #FFDB94, #FFAA00, #000000)",
                }}
              ></div>
              <div className="col-span-7"></div>
            </div>
          </div>

          <div className="relative grid h-full w-full grid-cols-8 overflow-y-visible">
            <div className="relative z-20 col-span-1 flex h-full flex-col items-center">
              <div className="relative my-9 md:my-8">
                <div className="absolute left-[50%] top-[50%] h-[26px] w-[26px] translate-x-[-50%] translate-y-[-50%] bg-[#FFB31A] blur-[18px] md:h-[34px] md:w-[34px]"></div>
                <img
                  src={globe}
                  className="relative h-[20px] w-[20px] md:h-[34px] md:w-[34px]"
                  loading="lazy"
                />
              </div>
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(180deg, #FFDB94, #FFAA00, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="relative z-20 col-span-7 mt-8 flex w-full flex-col items-start justify-start gap-7 md:col-span-4 lg:max-w-[40vw]">
              <div className="relative flex flex-col justify-start gap-7 md:sticky md:bottom-24 md:top-48">
                <h2 className="text-xl font-semibold text-black md:text-xl">
                  Rocket development in Kenya
                </h2>
                <h3 className="leading-1 text-3xl font-bold md:text-3xl lg:text-2xl">
                  <span className="text-[#FFB31B]">
                    We are a university-based
                  </span>{" "}
                  amateur rocketry group in Kenya.
                </h3>
                <p className="mb-20 whitespace-pre-line text-lg text-gray-600 md:text-xl">
                  Our goal is to create a liquid-propellants rocket that can
                  bring nanosatellites into the low earth orbit.
                  <br />
                  <br />
                  The purpose of the project is to nurture the talent to drive
                  the science and technology innovation in the continent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------Low cost and open source----------- */}
        <div className="relative z-10 mt-6 flex h-full w-full flex-col">
          <div className="relative grid h-[50px] w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(0deg, #3280FF, #0044B0, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="col-span-7"></div>
          </div>

          <div className="relative grid h-full w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div className="relative my-9 md:my-8">
                <div className="absolute left-[50%] top-[50%] h-[26px] w-[26px] translate-x-[-50%] translate-y-[-50%] bg-[#3280FF] blur-[18px] md:h-[34px] md:w-[34px]"></div>
                <img
                  src={people}
                  className="relative h-[24px] w-[23px] md:h-[34px] md:w-[34px]"
                  loading="lazy"
                />
              </div>
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(180deg, #3280FF, #0044B0, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="relative col-span-7 mt-8 flex w-full flex-col justify-start gap-7 md:col-span-4 lg:max-w-[40vw]">
              <h2 className="text-xl font-semibold text-black md:text-xl">
                Low Cost
              </h2>
              <h3 className="leading-1 text-3xl font-bold md:text-3xl lg:text-2xl">
                <span className="text-[#3280FE]">Low cost</span> projects.
              </h3>
              <p className="mb-20 text-lg text-gray-600 md:text-xl">
                As a student-centered initiative, we prioritize utilizing
                resources available within our school environment to keep
                expenses to a minimum.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* ---------open source----------- */}
        <div className="relative z-10 mt-6 flex h-full w-full flex-col">
          <div className="relative grid h-[50px] w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(0deg, #FA7970, #E1271B, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="col-span-7"></div>
          </div>

          <div className="relative grid h-full w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div className="relative my-9 md:my-8">
                <div className="absolute left-[50%] top-[50%] h-[26px] w-[26px] translate-x-[-50%] translate-y-[-50%] bg-[#FA7970] blur-[18px] md:h-[34px] md:w-[34px]"></div>
                <img
                  src={building}
                  className="relative h-[20px] w-[20px] md:h-[34px] md:w-[34px]"
                  loading="lazy"
                />
              </div>
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(180deg, #FA7970, #E1271B, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="relative col-span-7 mt-8 flex w-full flex-col justify-start gap-7 md:col-span-4 lg:max-w-[40vw]">
              <h2 className="text-xl font-semibold text-black md:text-xl">
                Building in Open
              </h2>
              <h3 className="leading-1 text-3xl font-bold md:text-3xl lg:text-2xl">
                <span className="text-[#FA7970]">Opensource.</span>
              </h3>
              <p className="mb-20 text-lg text-gray-600 md:text-xl">
                All of our code and project proceedings are open source, hosted
                on Github.
              </p>
            </div>
          </div>
        </div>

        {/* ---------Partnership----------- */}
        <div className="relative z-10 mt-6 flex h-full w-full flex-col">
          <div className="relative grid h-[50px] w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(0deg, #56D364, #2DA042, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="col-span-7"></div>
          </div>

          <div className="relative grid h-full w-full grid-cols-8">
            <div className="col-span-1 flex h-full flex-col items-center">
              <div className="relative my-9 md:my-8">
                <div className="absolute left-[50%] top-[50%] h-[26px] w-[26px] translate-x-[-50%] translate-y-[-50%] bg-[#56D364] blur-[18px] md:h-[34px] md:w-[34px]"></div>
                <img
                  src={partnership}
                  className="relative h-[20px] w-[20px] md:h-[34px] md:w-[34px]"
                  loading="lazy"
                />
              </div>
              <div
                className="h-full w-[3px] bg-white"
                style={{
                  background:
                    "linear-gradient(180deg, #56D364, #2DA042, #FFFFFF)",
                }}
              ></div>
            </div>
            <div className="relative col-span-7 mt-8 flex w-full flex-col justify-start gap-7 md:col-span-4 lg:max-w-[40vw]">
              <h2 className="text-xl font-semibold text-black md:text-xl">
                Partnership
              </h2>
              <h3 className="leading-1 text-3xl font-bold md:text-3xl lg:text-2xl">
                <span className="text-[#7DE787]">
                  Nakuja project works with the Kenya Space Agency
                </span>
                {/* --> can help the world as much as our careers. */}
              </h3>
              <p className="mb-20 text-lg text-gray-600 md:text-xl">
                The Nakuja project works with the Kenya Space Agency (KSA),
                which promotes space development in Kenya. KSA supported us to
                visit Broglio Space Center in Malindi to study the ground
                station facility. KSA kindly allowed us to participate in the
                Kenya Space Expo and Conference in Nairobi in June 2022 to
                showcase our achievement. KSA also facilitated the launch of our
                N-2 and N-3 rockets.
              </p>
            </div>
          </div>
        </div>

        {/* partnership section */}
        <section className="py-24 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h4 className="text-xl text-gray-800 text-center font-medium">
                Our Partners
              </h4>
            </div>
            <div className="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
              <a href="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src="https://ksa.go.ke/assets/images/ksa-logo-new.png-web2-207x165.png"
                  alt="Client logo"
                  loading="lazy"
                />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img
                  className="h-9"
                  src="https://www.jkuat.ac.ke/directorates/dipuil/wp-content/uploads/2015/11/jkuat-logo.png"
                  alt="Client logo"
                  loading="lazy"
                />
              </a>

              {/* Add more partners logos here */}
            </div>
          </div>
        </section>

        <div className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl text-gray-800 text-center font-medium mb-4">
            Our Roadmap
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Our final goal is to launch a liquid propellants rocket to bring
            nanostellites into orbit. We set a couple of milestones to progress
            our project in time. We developed three solid model rockets: N-1,
            N-2, and N-3 rockets. We also started the development of a test
            stand for the liquid rocket engine.
          </p>
          <Roadmap />
        </div>
      </div>
    </section>
  );
};

export default Home;
