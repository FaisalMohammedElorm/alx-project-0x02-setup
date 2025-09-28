import { UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white border shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-500 text-sm">
        📍 {address.street}, {address.city}
      </p>
    </div>
  );
}
