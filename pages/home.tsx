// pages/home.tsx
import { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import Header from "../components/layout/Header";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card One", content: "This is the first reusable card component." },
    { title: "Card Two", content: "This card is displaying different content dynamically." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Welcome to the Home Page 
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </main>
    </>
  );
}
