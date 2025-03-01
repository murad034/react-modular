import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/bank/add`;
// console.log('API_BASE_URL', API_BASE_URL);
console.log("Bank Services js above");

export const getBank = async () => {
    console.log("Bank Services js ");
};

export const createBank = async (bankData) => {
    try {
        const response = await axios.post(API_URL, bankData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
