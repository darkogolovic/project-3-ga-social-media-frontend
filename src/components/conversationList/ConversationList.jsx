import React, { useState } from "react";
import { useConversations } from "../../hooks/useConversations";
import { data } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export default function ConversationList() {
  const [search, setSearch] = useState("");
   const { data: user } = useCurrentUser();
  const { data, isLoading, error } = useConversations(user?._id);

  const conversations = Array.isArray(data) ? data : [];

  const filtered = conversations.filter((c) =>
    c?.username?.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div className="p-4 text-slate-300">Loading conversations...</div>;
  if (error) return <div className="p-4 text-red-500">Failed to load conversations</div>;

  return (
    <div className="bg-slate-950 min-h-full px-4 py-6">
      <div className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Search conversations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        {filtered.length === 0 ? (
          <div className="text-slate-400 text-center py-10">
            No conversations found.
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-4 py-3 border-b border-slate-800 cursor-pointer hover:bg-slate-900/40 rounded-xl px-2 transition"
              >
                <div className="relative">
                  <img
                    src={c.image}
                    alt={c.username}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {c.active && (
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950" />
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-slate-100 font-semibold text-sm">{c.username}</span>
                  <span className="text-slate-400 text-xs">{c.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
