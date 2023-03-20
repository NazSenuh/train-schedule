import axios from 'axios'

export class HttpService {
    getFullUrl(url: string): string {
        return `${process.env.REACT_APP_BASE_URL}/${url}`
    }

    async get<T>(url: string): Promise<T> {
        const res = await axios.get<T>(this.getFullUrl(url))
        return res.data
    }

    async post<T, D>(url: string, data: D): Promise<T> {
        const res = await axios.post<T>(this.getFullUrl(url), data)
        return res.data
    }

    async put<T, D>(url: string, data: D): Promise<T> {
        const res = await axios.put<T>(this.getFullUrl(url), data)
        return res.data
    }

    async delete<T>(url: string): Promise<T> {
        const res = await axios.delete<T>(this.getFullUrl(url))
        return res.data
    }
}
