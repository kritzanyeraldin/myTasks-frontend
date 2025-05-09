export type TTaskStatus = 'ALL' | 'COMPLETED' | 'PENDING'

export interface ITask {
	id: number
	title: string
	isDone: boolean
	createdAt: string
	updatedAt: string
}

export type IGetTasksParams = {
	isDone?: boolean
}

export type IGetTasksResponse = ITask[]

export type ICreateTaskPayload = Pick<ITask, 'title'>

export type IUpdateTaskPayload = Partial<ICreateTaskPayload> &
	Pick<ITask, 'id' | 'isDone'>
