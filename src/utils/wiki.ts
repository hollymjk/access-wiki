import wiki from 'wikijs';
import config from "../config/config";

const client = wiki({apiUrl: config.defaults.defaultApi})

export const search = (term: string) => {
    return client.search(term);
}

export const page = (title: string) => {
    return client.page(title);
}