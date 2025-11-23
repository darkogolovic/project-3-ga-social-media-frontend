import { useEffect, useState } from "react";
import { socket } from "../socket";

export const useOnlineUsers = (currentUser) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    socket.connect();          
    socket.emit("userOnline", currentUser._id);

    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("onlineUsers");
    };
  }, [currentUser]);

  return onlineUsers;
};