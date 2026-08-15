import axios from "axios";

const API_URL = "http://localhost:8080/api/parking-spots";

export const getAllParkingSpots = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
