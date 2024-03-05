// const { default: axios } = require("axios");

// axios.interceptors.request.use(
//   (res) => res,
//   (err) => Promise.reject(err)
// );

// axios.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalConfig = err.config;
//     if (err.response.status === 401 && !originalConfig._retry) {
//       originalConfig._retry = true;
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`,
//           { withCredentials: true }
//         );
//         if (data) return axios(originalConfig);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(err);
//   }
// );
