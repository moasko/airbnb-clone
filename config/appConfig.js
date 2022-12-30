const is_production = false;

export const BASE_URL =  is_production?'https://airbnb-clone-moasko.vercel.app/':'http://localhost:3000/'
export const API_BASE_URL = `${BASE_URL}/api`