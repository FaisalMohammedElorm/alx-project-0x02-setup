import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Users Page 👥</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
}
