export const API_BASE = "https://portfolioapi.djdiptayan.in/api";

export const fetchFromApi = async (endpoint) => {
    try {
        const res = await fetch(`${API_BASE}${endpoint}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const response = await res.json();

        // Handle ApiResponse structure from backend
        if (response.success && response.data) {
            return response.data;
        }

        // Fallback for direct data or empty array
        return response.data || [];
    } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
        return [];
    }
};

export const parseDate = (dateStr) => {
    if (!dateStr || dateStr.toLowerCase() === 'present') return new Date();
    const [month, year] = dateStr.replace(',', '').split(' ');
    return new Date(`${month} 1, ${year}`);
};
