import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";

export default function UsersList() {
  const [search, setSearch] = useState("");

  const { data: users = [], isLoading, error } = useUsers();

  const filtered = users?.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto h-[80vh] overflow-y-auto">
      <input
        type="text"
        placeholder="Search users"
        className="w-full p-3 rounded-xl bg-gray-100 border border-gray-300 mb-4 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Failed to load users.</p>}

      {filtered.map((u) => (
        <div
          key={u.id}
          className="flex items-center gap-3 py-2 border-b border-gray-200 cursor-pointer"
        >
          <img
            src={u.image}
            alt={u.username}
            className="w-14 h-14 rounded-full object-cover"
          />

          <span className="font-semibold text-[15px]">{u.username}</span>
        </div>
      ))}
    </div>
  );
}
