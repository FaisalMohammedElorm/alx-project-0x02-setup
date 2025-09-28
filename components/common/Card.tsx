
import { CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-orange shadow-md rounded-lg p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-white-800 mb-2">{title}</h2>
      <p className="text-white-600">{content}</p>
    </div>
  );
}
