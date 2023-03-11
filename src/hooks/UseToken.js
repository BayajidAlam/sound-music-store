import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log(email, "start");
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://sound-music-server-bayajidalam.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
            console.log(data.accessToken, "under");
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
