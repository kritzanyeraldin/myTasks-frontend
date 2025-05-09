import axios from 'axios'
import { env } from '../config'

export const axiosInstance = axios.create({
	baseURL: env.API_URL
})
