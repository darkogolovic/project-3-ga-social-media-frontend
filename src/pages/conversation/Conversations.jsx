import React, { useState } from "react";

export default function ConversationList() {
  const [search, setSearch] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Alex",
      status: "Seen Sunday",
      active: false,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Marko",
      status: "Sent Sunday",
      active: false,
      avatar: "https://i.pravatar.cc/150?img=52"
    },
    {
      id: 3,
      name: "Aleksandar",
      status: "Sent Sunday",
      active: false,
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    {
      id: 4,
      name: "Marija",
      status: "Active 8m ago",
      active: true,
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      id: 5,
      name: "Danilo",
      status: "Active 24m ago",
      active: true,
      avatar: "https://i.pravatar.cc/150?img=36"
    }
  ];

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    container: {
      width: "100%",
      maxWidth: 480,
      margin: "0 auto",
      padding: "10px 16px",
      boxSizing: "border-box"
    },
    search: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 10,
      border: "1px solid #ddd",
      background: "#f1f1f1",
      fontSize: 14,
      outline: "none",
      marginBottom: 16
    },
    item: {
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
      gap: 12,
      cursor: "pointer",
      borderBottom: "1px solid #eee"
    },
    avatarWrapper: {
      position: "relative"
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      objectFit: "cover"
    },
    activeDot: {
      position: "absolute",
      right: 3,
      bottom: 3,
      width: 14,
      height: 14,
      backgroundColor: "#4cd137",
      borderRadius: "50%",
      border: "2px solid white"
    },
    textBox: {
      display: "flex",
      flexDirection: "column"
    },
    name: {
      fontWeight: 600,
      fontSize: 15
    },
    status: {
      fontSize: 13,
      color: "#777"
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {filtered.map((c) => (
        <div key={c.id} style={styles.item}>
          <div style={styles.avatarWrapper}>
            <img src={c.avatar} alt={c.name} style={styles.avatar} />

            {/* ACTIVE DOT */}
            {c.active && <div style={styles.activeDot}></div>}
          </div>

          <div style={styles.textBox}>
            <span style={styles.name}>{c.name}</span>
            <span style={styles.status}>{c.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
