const is_production = false;

export const BASE_URL =  is_production?'http://localhost:3000/':'http://localhost:3000/'
export const API_BASE_URL = `${BASE_URL}/api`