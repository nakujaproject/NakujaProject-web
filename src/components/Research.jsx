import research from "../Data/Research";

const Research = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">Research</h1>
          <p className="text-gray-700 mb-8">
            Nakuja project is conducting the necessary researches to achieve the
            goal of the project. We also seek postgraduate students who are
            interested in conducting the research under the Nakuja project.
          </p>
          <h2 className="text-2xl font-bold mb-4">Publications</h2>
          <p className="text-gray-700 mb-8">
            All the works were supported by Jomo Kenyatta University of
            Agriculture and Technology (JKUAT), Kenya Space Agency (KSA), and
            the AFRICA-ai-JAPAN Project (JICA).
          </p>
          <ol className="list-decimal ml-8 space-y-4">
            {research.map((publication, index) => (
              <li key={index} className="text-gray-700">
                {publication.authors.join(", ")}, &quot; {publication.title}{" "}
                &quot;, in <em>Proceedings of the {publication.conference}</em>,{" "}
                {publication.year}.
                {publication.pages && ` pp. ${publication.pages}.`}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Research;
