// api.js - Adapted for Remix.js
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "~/config";
import { getSession } from "~/sessions";
import { redirect } from "remix";

const api = async (method = "get", uri, body = {}, request = null) => {
  // API Call
  const url = baseUrl + uri;

  let token;

  if (request) {
    const session = await getSession(request.headers.get("Cookie"));
    token = session.get("token");
  } else if (typeof window !== "undefined") {
    token = localStorage.getItem("Brandtoken") || localStorage.getItem("token");
  }

  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("Making API request: ===========>", { method, url, token });

  return new Promise((resolve, reject) => {
    axios[method](url, body)
      .then((res) => resolve(res.data))
      .catch((err) => {
        if (err?.response?.status === 403) {
          if (typeof window !== "undefined") {
            localStorage.setItem("token", "");
            window.location.href = "/auth/login";
          } else {
            throw redirect("/auth/login");
          }
        } else {
          console.error("API Error --------> ", err);
          if (typeof window !== "undefined") {
            toast.error(err?.response?.data?.message || err?.message);
          }
          reject(err);
        }
      });
  });
};

export default api;
