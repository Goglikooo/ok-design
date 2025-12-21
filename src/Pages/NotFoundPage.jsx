import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Link to="/" className="mb-8">
        <button className="px-6 py-3 bg-[#548780] text-white rounded-md hover:bg-[#3e6b68] transition cursor-pointer">
          Go to Home Page
        </button>
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
}
