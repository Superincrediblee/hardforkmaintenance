const API =
  process.env.NODE_ENV === 'production'
    ? 'https://hardfork.vercel.app/api'
    : 'http://localhost:3000/api';
module.exports = {
  API,
};
