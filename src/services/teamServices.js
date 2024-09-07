import {
  defaultStatusTypeOptionIds,
  defaultTaskTypeOptionIds,
} from "@/lib/defaultData";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
console.log(API_URL);

export const createTeam = async ({ title, description }) => {
  try {
    const response = await axios({
      url: `${API_URL}/teams`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        title,
        description,
        status: defaultStatusTypeOptionIds,
        type: defaultTaskTypeOptionIds,
      },
    });
    return response.data;
  } catch (error) {
    console.error("createTeam", error);
    // throw error.response.data;
  }
};
