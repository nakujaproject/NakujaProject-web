import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { issue: issueNumber } = useParams();
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/nakujaproject/internship2024/issues/${issueNumber}`,
        );
        const data = await response.json();
        setIssue(data);
      } catch (error) {
        console.error("Error fetching issue:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/nakujaproject/internship2024/issues/${issueNumber}/comments`,
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchIssue();
    fetchComments();
  }, [issueNumber]);

  if (!issue) {
    return <div className="container mx-auto my-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 px-4 md:px-16">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>
        <div className="flex flex-wrap mb-4">
          {issue.labels.map((label) => (
            <p
              key={label.id}
              className="text-sm text-blue-500 uppercase mr-2 mb-2"
            >
              {label.name}
            </p>
          ))}
        </div>
        <div className="flex items-center mt-2 mb-6 pb-6 border-b border-gray-400">
          <img
            src={issue.user.avatar_url}
            alt={issue.user.login}
            className="w-8 h-8 rounded-full mr-2"
            loading="lazy"
          />
          <h3 className="text-sm font-bold">{issue.user.login}</h3>
        </div>
        <div className="mb-6 border-b border-gray-400 pb-6">
          <div className="text-gray-700 overflow-hidden">
            <ReactMarkdown>{issue.body}</ReactMarkdown>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Comments</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <div className="flex items-center mt-2">
                  <img
                    src={comment.user.avatar_url}
                    alt={comment.user.login}
                    className="w-8 h-8 rounded-full mr-2"
                    loading="lazy"
                  />
                  <h3 className="text-sm font-bold">{comment.user.login}</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded overflow-hidden border border-gray-300 hover:border-blue-500 mt-2">
                  <ReactMarkdown>{comment.body}</ReactMarkdown>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No comments yet.</p>
          )}
        </div>
        <div className="mt-8">
          <a
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Comment on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
