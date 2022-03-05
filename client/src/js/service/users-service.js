import { BASE_URL } from '../config/service-config';

export const fetchAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error('Service is unreachable');
    }

    return response.json();
};
