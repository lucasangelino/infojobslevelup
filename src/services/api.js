import data from "../utils/informatica-telecomunicaciones-response.json";
const INFOJOBS_API_URL =
  "https://api.infojobs.net/api/9/offer?category=informatica-telecomunicaciones";

export const api = {
  getJobOffers: async () => {
    // const response = await fetch(INFOJOBS_API_URL, {
    //   headers: {
    //     mode: "no-cors",
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.json();
    console.log(data.offers);
    return data.offers;
  },
};
