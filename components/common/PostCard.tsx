import { PostProps } from "../../interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white border shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
}
