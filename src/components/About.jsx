import { useState } from "react";
import { N2_interns, playicon } from "../assets/media";

const About = () => {
  const thumbnail =
    "https://mymodernmet.com/wp/wp-content/uploads/2022/11/Artemis-I-Rocket-Launch-thumbnail.jpg";
  const thumbnail1 =
    "https://cdn.arstechnica.net/wp-content/uploads/2017/05/test1.jpg";
  const thumbnail2 =
    "https://spaceplace.nasa.gov/satellite/en/NASA-Earth-observing-satellite-fleet.en.jpg";

  const video = "https://www.youtube.com/embed/gj_JO3fiMRg";
  const video1 = "https://www.youtube.com/embed/FgPUEDIpjJs";
  const video2 = "https://www.youtube.com/embed/nMmb7Ux7Qz0";

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoVisible1, setIsVideoVisible1] = useState(false);
  const [isVideoVisible2, setIsVideoVisible2] = useState(false);

  const toggleVideoVisibility = (index) => {
    if (index === 0) {
      setIsVideoVisible(!isVideoVisible);
      setIsVideoVisible1(false);
      setIsVideoVisible2(false);
    } else if (index === 1) {
      setIsVideoVisible1(!isVideoVisible1);
      setIsVideoVisible(false);
      setIsVideoVisible2(false);
    } else if (index === 2) {
      setIsVideoVisible2(!isVideoVisible2);
      setIsVideoVisible(false);
      setIsVideoVisible1(false);
    }
  };

  return (
    <div>
      <div className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="max-w-2xl mx-auto font-bold text-2xl text-gray-900 mb-5 md:text-2xl md:leading-normal">
            Nakuja project is a student-based technological project, with the
            aim of{" "}
            <span className="text-indigo-600">building and launching</span> a
            liquid fuel rocket.
          </h1>
          <p className="max-w-sm mx-auto text-base font-normal leading-7 text-gray-500 mb-9">
            Dr. Shohei Aoki is the project leader and coordinator.
          </p>
        </div>
      </div>

      <div className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="pb-5 pr-9 relative overflow-hidden rounded-2xl">
              <div className="relative">
                <img className="w-full object-contain" src={thumbnail} alt="" loading="lazy" />
                <button
                  className="absolute top-1/2 left-1/2 z-10 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 animate-pulse"
                  onClick={() => toggleVideoVisibility(0)}
                >
                  <img src={playicon} alt="" loading="lazy" />
                </button>
              </div>

              {isVideoVisible && (
                <div className="absolute left-0 top-0 z-10 h-full w-full">
                  <iframe
                    className="h-full w-full"
                    allowFullScreen
                    src={video}
                  ></iframe>
                </div>
              )}
            </div>

            <div className="lg:pl-12 lg:flex lg:items-center">
              <div className="data w-full">
                <h2 className="font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Nakuja is a team of students from Kenya. We are focused on
                  learning as we design, build and launch a rocket into the
                  earths orbit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-12 lg:flex lg:items-center">
              <div className="data w-full">
                <h2 className="font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Our goal
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Our project began in June 2019 with the main objective of
                  designing a rocket powered by liquid propellant, which remains
                  our primary focus. However, as we continue to develop our
                  liquid propellant rocket engine, we initiated a test launch
                  using a solid motor rocket. The final launch of our project is
                  anticipated to take place in 2025, utilizing the liquid
                  propellant engine.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src={N2_interns}
                alt="N2 interns"
                className="block rounded-lg"
                loading="lazy"
              />
              <small className="text-sm italic text-gray-400">
                Visit to Broglio Space Center in April 2022 supported by Kenya
                Space Agency (KSA)
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-4xl text-center text-gray-900 mb-14">
            Our stats
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:w-1/3 bg-gray-50 p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-bold text-2xl text-indigo-600">100+</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Interns Involved
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    From 2019 to 2024, over 100 interns have contributed to our
                    projects success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:w-1/3 bg-gray-50 p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-bold text-2xl text-indigo-600">4</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Main Project Teams
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We operate with four main teams: Liquid Propulsion, Solid
                    Propulsion, Avionics and Airframe.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:w-1/3 bg-gray-50 p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-bold text-2xl text-indigo-600">2025</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Expected Launch Year
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our first launch using the liquid propellant engine is
                    expected in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="pb-5 pr-9 relative overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="w-full object-contain"
                  src={thumbnail1}
                  alt=""
                  loading="lazy"
                />
                <button
                  className="absolute top-1/2 left-1/2 z-10 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 animate-pulse"
                  onClick={() => toggleVideoVisibility(1)}
                >
                  <img src={playicon} alt="" loading="lazy"  />
                </button>
              </div>

              {isVideoVisible1 && (
                <div className="absolute left-0 top-0 z-10 h-full w-full">
                  <iframe
                    className="h-full w-full"
                    allowFullScreen
                    src={video1}
                  ></iframe>
                </div>
              )}
            </div>

            <div className="pb-5 pr-9 relative overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="w-full object-contain"
                  src={thumbnail2}
                  alt=""
                  loading="lazy"
                />
                <button
                  className="absolute top-1/2 left-1/2 z-10 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 animate-pulse"
                  onClick={() => toggleVideoVisibility(2)}
                >
                  <img src={playicon} alt="" loading="lazy" />
                </button>
              </div>

              {isVideoVisible2 && (
                <div className="absolute left-0 top-0 z-10 h-full w-full">
                  <iframe
                    className="h-full w-full"
                    allowFullScreen
                    src={video2}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          {/* gradient start */}
          <div className="absolute z-[10] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[5] w-[50%] h-[50%] left-0 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </div>
    </div>
  );
};

export default About;
