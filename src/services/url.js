import axios from "axios";

export const createShortUrl = async (data) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/url/createShortUrl`, data);

    console.log(res)
    return {
      status: res.status,
      message: res.data.message,
      data: res.data.data
    };
  } catch (error) {
    return {
      status: error?.status ? error.status : 500,
      message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
    };
  }
};

export const getOriginalUrl = async (shortUrl) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/url/getOriginalUrl/${shortUrl}`);
      console.log(res)  
      return {
        status: res.status,
        message: res.data.message,
        originalUrl: res.data.data.originalUrl
      };
    } catch (error) {
      return {
        status: error?.status ? error.status : 500,
        message: error?.response?.data?.message ? error.response.data.message : "Something went wrong"
      };
    }
  };
  
