import type {
	TGetTasksResponse,
	TCreateTaskPayload,
	TCreateTaskResponse,
	TUpdateTaskPayload,
	TUpdateTaskResponse,
	TGetTasksParams
} from '../types'
import { axiosInstance } from '../config/api'

export const getTasks = async (params: TGetTasksParams) => {
	const response = await axiosInstance.get<TGetTasksResponse>('/tasks', {
		params
	})
	return response.data
}

export const postTask = async (payload: TCreateTaskPayload) => {
	const response = await axiosInstance.post<TCreateTaskResponse>(
		'/tasks',
		payload
	)
	return response.data
}

export const updateTask = async (payload: TUpdateTaskPayload) => {
	const { id, ...restPayload } = payload
	const response = await axiosInstance.patch<TUpdateTaskResponse>(
		`/tasks/${id}`,
		restPayload
	)
	return response.data
}

export const deleteTask = async (id: number) => {
	await axiosInstance.delete(`/tasks/${id}`)
}
