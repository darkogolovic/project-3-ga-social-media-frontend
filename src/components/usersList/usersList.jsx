import React, { useState } from "react";


export default function UsersList() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Stefan", avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 2, name: "Nikola", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: 3, name: "Jovan", avatar: "https://i.pravatar.cc/150?img=19" },
    { id: 4, name: "Ana", avatar: "https://i.pravatar.cc/150?img=33" },
    { id: 5, name: "Milena", avatar: "https://i.pravatar.cc/150?img=56" },
  ];

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );


  const styles = {
    container: {
      height: "80vh",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "10px 16px",
      boxSizing: "border-box",
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
    <div className="prof">
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {filtered.map((u) => (
          <div key={u.id} style={styles.item}>
            <div style={styles.avatarWrapper}>
              <img src={u.avatar} alt={u.name} style={styles.avatar} />
            </div>

            <div style={styles.textBox}>
              <span style={styles.name}>{u.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
