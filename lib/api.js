export const API_BASE = "https://portfolioapi.djdiptayan.in";

export const fetchFromApi = async (endpoint) => {
    try {
        const res = await fetch(`${API_BASE}${endpoint}`);
        const data = await res.json();
        return data.data || [];
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
