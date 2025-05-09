export type TTaskDTO = {
	id: number
	title: string
	is_done: boolean
	created_at: string
	updated_at: string
}

export type TGetTasksParams = {
	is_done?: boolean
}

export type TGetTasksResponse = {
	message: string
	data: TTaskDTO[]
}

export type TCreateTaskPayload = Pick<TTaskDTO, 'title'>

export type TCreateTaskResponse = {
	message: string
	data: TTaskDTO
}

export type TUpdateTaskPayload = Partial<TCreateTaskPayload> &
	Pick<TTaskDTO, 'id' | 'is_done'>

export type TUpdateTaskResponse = TCreateTaskResponse
