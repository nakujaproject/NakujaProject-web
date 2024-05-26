import { useNavigate } from "react-router-dom";

const BlogCard = ({ issue }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog-detail/${issue.number}`);
  };

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div
      className="container px-4 py-4 mx-auto cursor-pointer"
      onClick={handleClick}
    >
      <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md">
        <div className="p-4 lg:flex lg:items-center">
          <div className="lg:mt-0 lg:ml-6">
            <div className="flex flex-wrap mt-2">
              {issue.labels.map((label) => (
                <span
                  key={label.id}
                  className="text-sm text-blue-500 mr-2 mb-2"
                >
                  #{label.name}
                </span>
              ))}
            </div>
            <h2 className="block mt-4 font-semibold text-gray-800 hover:underline md:text-lg">
              {issue.title}
            </h2>
            <div className="flex items-center mt-6">
              <div className="mx-4">
                <h1 className="text-sm text-gray-700">{issue.user.login}</h1>
                <p className="text-sm text-gray-500">
                  {formatDate(issue.created_at)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
