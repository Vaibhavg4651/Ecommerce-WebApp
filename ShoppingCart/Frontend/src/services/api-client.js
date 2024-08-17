import axios from 'axios';

export async function apiClient(URL) {
    try {
        const response = await axios.get(URL,{withCredentials: true,});
        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err; // Re-throw the error if needed
    }
}
