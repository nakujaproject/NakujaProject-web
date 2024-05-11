/* eslint-disable react/prop-types */
import rockets from "../Data/Rocket";

const Rocket = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Rockets
        </h1>
        <div className="">
          {rockets.map((rocket, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {rocket.name}
              </h2>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{rocket.description}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Rocket Specifications
                </h3>
                {rocket.specifications.length > 0 ? (
                  <table className="w-full table-auto">
                    <thead></thead>
                    <tbody className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {rocket.specifications.map((spec, specIndex) => (
                        <tr key={specIndex}>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Name
                            </td>
                            <td className="px-4 py-2 border">{spec.name}</td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Airframe Material
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.airframeMaterial}
                            </td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Length
                            </td>
                            <td className="px-4 py-2 border">{spec.length}</td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Diameter
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.diameter}
                            </td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Dry Mass
                            </td>
                            <td className="px-4 py-2 border">{spec.dryMass}</td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Total Mass
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.totalMass}
                            </td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Simulated Apogee
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.simulatedApogee}
                            </td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Propellant
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.propellant}
                            </td>
                          </tr>
                          <tr className="even:bg-gray-100">
                            <td className="px-4 py-2 border font-medium">
                              Simulated Impulse
                            </td>
                            <td className="px-4 py-2 border">
                              {spec.simulatedImpulse}
                            </td>
                          </tr>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-600">No specifications available.</p>
                )}
                <div className="mb-6 mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Launch Dates
                  </h3>
                  {Array.isArray(rocket.launchDate) ? (
                    <ul className="list-disc pl-4">
                      {rocket.launchDate.map((date, dateIndex) => (
                        <li key={dateIndex} className="text-gray-600">
                          {date}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{rocket.launchDate}</p>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Internship Report
                  </h3>
                  <p className="text-gray-600">
                    The presentation for the final presentation is here.{" "}
                    <a
                      href={rocket.internshipReport}
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  </p>
                </div>

                {rocket.video && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Video
                    </h3>
                    <iframe
                      className="w-full h-96"
                      src={rocket.video}
                      title={`${rocket.name} Video`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {rocket.image && (
                    <img
                      src={rocket.image}
                      alt={`${rocket.name} Image`}
                      className="w-full h-auto object-cover rounded-lg"
                      loading="lazy"
                    />
                  )}
                  {rocket.image1 && (
                    <img
                      src={rocket.image1}
                      alt={`${rocket.name} Image 1`}
                      className="w-full h-auto object-cover rounded-lg"
                      loading="lazy"
                    />
                  )}
                  {rocket.image2 && (
                    <img
                      src={rocket.image2}
                      alt={`${rocket.name} Image 2`}
                      className="w-full h-auto object-cover rounded-lg"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rocket;
