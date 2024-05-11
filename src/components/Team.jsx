/* eslint-disable react/prop-types */
import teams from "../Data/Teams";

const TeamCard = ({ name, position, education, image }) => (
  <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-md hover:border border-blue-500">
    <div className="flex justify-center">
      {image ? (
        <img className="w-32 h-32 rounded-full" src={image} alt={name} loading="lazy" />
      ) : (
        <img
          className="w-32 h-32 rounded-full border hover:border-blue-500"
          src="https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image"
          alt="Placeholder"
          loading="lazy"
        />
      )}
    </div>

    <div className="px-6 py-4 flex flex-col justify-between">
      <div className="text-l font-bold">{name}</div>
      <p className="text-gray-600 text-sm">{position || education}</p>
    </div>
  </div>
);

const Team = () => (
  <section className="container mx-auto px-4 py-16 relative overflow-hidden">
    <div
      className="absolute left-4 h-full w-[3px] bg-white"
      style={{
        background:
          "linear-gradient(180deg, #EFF6FF, #3280FF, #0044B0, #FFDB94, #FFAA00, #FA7970, #E1271B, #56D364, #2DA042, #FFFFFF)",
      }}
    ></div>
    <h2 className="text-3xl font-bold text-center mb-8 relative pl-4">
      Our Teams
    </h2>
    {teams.map((team) => (
      <div key={team.name} className="mb-10 mt-8 relative">
        <div className="flex items-center justify-start mb-4">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -z-10"></div>
          <div className="h-[3px] w-12 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <h3 className="text-2xl font-bold pl-3">{team.name}</h3>
        </div>
        <p className="text-gray-700 mb-4 pl-3">{team.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6 gap-4 pl-3">
          {team.members.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    ))}

    <div className="mt-10 mb-8">
      <h3 className="text-2xl font-bold pl-3">Nakuja Alumni</h3>
      <p className="text-gray-700 mb-4 pl-3">
        Nakuja alumni are active in various parts of the world.
      </p>
      <iframe
        className="w-full h-96"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRIW63rx345Fz-yVue82F69w_TtD29Os-ypI5X9kV1kaGkRloZIAsXla9sBHx_5XBdrfyoyxLJA8Hp_/pubhtml?gid=0&single=true&header=false&widget=false&chrome=false"
        // allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default Team;
