import { useState, useCallback } from 'react'
import type { ICreateTaskPayload } from '../types'
import { useCreateTask } from '../hooks'
import { createTaskSchema } from '../schemas/task.schema'

const classNames = {
	form: 'flex w-full',
	input:
		'flex-[1] rounded-l-full py-2 px-4 focus-visible:outline-none focus-visible:border-pink-600 border-2 border-r-0 border-gray-300',
	button:
		'bg-pink-600 py-2 pl-5 pr-6 text-3xl text-white font-semibold rounded-r-full hover:bg-pink-700'
}

interface ICreateTaskFormProps {
	getAllTasksByStatus: (refetchTaskStatus?: string) => Promise<void>
}

const defaultTask: ICreateTaskPayload = {
	title: ''
}

export const CreateTaskForm = ({
	getAllTasksByStatus
}: ICreateTaskFormProps) => {
	const [newTask, setNewTask] = useState<ICreateTaskPayload>(defaultTask)
	const { mutation: createTask } = useCreateTask()

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = event.currentTarget

			setNewTask(previousNewTask => ({
				...previousNewTask,
				[name]: value
			}))
		},
		[]
	)

	const handleFormSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault()

			const validation = createTaskSchema.safeParse(newTask)
			if (!validation.success) {
				return console.error(validation.error.flatten().fieldErrors)
			}

			await createTask(validation.data)
			await getAllTasksByStatus()
			setNewTask(defaultTask)
		},
		[newTask, createTask, getAllTasksByStatus]
	)

	return (
		<form
			className={classNames.form}
			onSubmit={handleFormSubmit}
		>
			<input
				name='title'
				className={classNames.input}
				type='text'
				placeholder='Nombre de la tarea'
				value={newTask.title}
				onChange={handleInputChange}
			/>
			<button
				type='submit'
				className={classNames.button}
			>
				+
			</button>
		</form>
	)
}
