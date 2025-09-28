import { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (title: string, content: string) => void;
}

export default function PostModal({ isOpen, onClose, onAddPost }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddPost(title, content);
      setTitle("");
      setContent("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-orange-500 rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
