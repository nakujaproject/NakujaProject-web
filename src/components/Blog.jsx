import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard.jsx";

const Blog = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [activeTag, setActiveTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/nakujaproject/NakujaProject-web/issues?labels=Published&per_page=100&page=${currentPage}`,
        );
        const data = await response.json();
        const linkHeader = response.headers.get("Link");
        const totalPages = linkHeader
          ? parseInt(linkHeader.match(/&page=(\d+)>; rel="last"/)?.[1], 10)
          : 1;

        if (Array.isArray(data)) {
          setIssues(data);
          setFilteredIssues(data);
        } else {
          console.error("Invalid data received:", data);
        }

        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, [currentPage]);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    const filtered = issues.filter((issue) =>
      issue.labels.some(
        (label) => label.name.toLowerCase() === tag.toLowerCase(),
      ),
    );
    setFilteredIssues(filtered);
  };

  const handleIssueClick = (issue) => {
    navigate(`/blog-detail/${issue.number}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    filterIssues(event.target.value);
  };

  const filterIssues = (query) => {
    const filtered = issues.filter(
      (issue) =>
        issue.title.toLowerCase().includes(query.toLowerCase()) ||
        issue.user.login.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredIssues(filtered);
  };

  const tags = [
    "Solid Propulsion",
    "Liquid Propulsion",
    "Airframe",
    "Avionics",
    // Add other tags here
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by title or author..."
              className="w-full px-3 py-1 rounded-md border border-blue-500"
            />
          </div>
          <div className="flex flex-wrap">
            <button
              className={`mr-2 mb-2 md:mb-0 px-3 py-1 rounded-md ${
                activeTag === "" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => {
                setActiveTag("");
                setFilteredIssues(issues);
              }}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`mr-2 mb-2 md:mb-0 px-3 py-1 rounded-md ${
                  activeTag === tag ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredIssues.map((issue) => (
            <BlogCard
              key={`${issue.title}-${issue.id}`}
              issue={issue}
              onIssueClick={handleIssueClick}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="mr-2 px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="ml-2 px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
