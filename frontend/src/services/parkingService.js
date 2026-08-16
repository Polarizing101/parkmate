import axios from "axios";

const API_URL =
  "http://localhost:8080/api/parking-spots";

export const getParkingSpots = async () => {
  return axios.get(API_URL);
};

export const createParkingSpot = async (
  parkingSpot
) => {
  return axios.post(
    API_URL,
    parkingSpot
  );
};

export const getNearbyParkingSpots =
  async (
    latitude,
    longitude,
    radius
  ) => {
    return axios.get(
      `${API_URL}/nearby`,
      {
        params: {
          latitude,
          longitude,
          radius,
        },
      }
    );
  };
  