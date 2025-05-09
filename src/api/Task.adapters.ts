import type {
	TTaskDTO,
	ITask,
	TGetTasksResponse,
	IUpdateTaskPayload,
	TUpdateTaskPayload,
	ICreateTaskPayload,
	TCreateTaskPayload,
	TGetTasksParams,
	IGetTasksParams
} from '../types'

export const adaptTaskDTO = (dto: TTaskDTO): ITask => {
	const {
		is_done: isDone,
		created_at: createdAt,
		updated_at: updatedAt,
		...restDto
	} = dto

	return {
		...restDto,
		isDone,
		createdAt,
		updatedAt
	}
}

export const adaptGetTasksParams = (
	params?: IGetTasksParams
): TGetTasksParams => ({
	is_done: params?.isDone
})

export const adaptGetTasksResponse = (response: TGetTasksResponse) =>
	response.data.map(adaptTaskDTO)

export const adaptCreateTaskPayload = (
	payload: ICreateTaskPayload
): TCreateTaskPayload => ({
	title: payload.title
})

export const adaptUpdateTaskPayload = (
	payload: IUpdateTaskPayload
): TUpdateTaskPayload => ({
	id: payload.id,
	title: payload.title,
	is_done: payload.isDone
})

export const adaptUpdateTaskResponse = (
	payload: IUpdateTaskPayload
): TUpdateTaskPayload => ({
	id: payload.id,
	title: payload.title,
	is_done: payload.isDone
})
