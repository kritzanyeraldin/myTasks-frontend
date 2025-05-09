import type {
	ICreateTaskPayload,
	IGetTasksParams,
	IUpdateTaskPayload
} from '../types'
import {
	getTasks,
	postTask,
	updateTask as _updateTask,
	deleteTask as _deleteTask
} from './Task.data'
import {
	adaptCreateTaskPayload,
	adaptGetTasksParams,
	adaptGetTasksResponse,
	adaptTaskDTO,
	adaptUpdateTaskPayload
} from './Task.adapters'

export const getAllTasks = async (params?: IGetTasksParams) => {
	const response = await getTasks(adaptGetTasksParams(params))
	return adaptGetTasksResponse(response)
}

export const createTask = async (payload: ICreateTaskPayload) => {
	const response = await postTask(adaptCreateTaskPayload(payload))
	return adaptTaskDTO(response.data)
}

export const updateTask = async (payload: IUpdateTaskPayload) => {
	const response = await _updateTask(adaptUpdateTaskPayload(payload))
	return adaptTaskDTO(response.data)
}

export const deleteTask = async (id: number) => {
	await _deleteTask(id)
}
