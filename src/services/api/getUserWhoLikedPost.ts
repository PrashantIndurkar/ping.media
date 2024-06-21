import axios from "axios";

export const getUserWhoLikedPost = async (id: number) => {
  try {
    const response = await axios.get(`/api/like/${id}`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users who liked post:", error);
    return [];
  }
};
