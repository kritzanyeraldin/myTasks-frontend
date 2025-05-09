import { useCallback, useEffect, useState } from 'react'
import type { ITask, IUpdateTaskPayload } from '../types'
import { useDebounce } from '../hooks'
import { updateTaskSchema } from '../schemas/task.schema'
import clsx from 'clsx'

const classNames = {
	card: 'flex flex-row items-center border-2 w-full p-3 rounded-md border-gray-200 gap-2',
	doneCard: 'bg-green-100 border-green-300',
	checkbox: 'w-5 h-5 accent-green-600',
	input: 'flex-[1] p-2 focus-visible:outline-none',
	doneInput: 'line-through',
	deleteButton:
		'bg-red-100 text-red-500 hover:bg-red-200 rounded-md font-semibold text-2xl w-8 h-8 flex items-center justify-center ml-2'
}

const DEBOUNCE_TIME = 500

interface ITaskCardProps {
	task: ITask
	deleteTask: (taskId: number) => Promise<void>
	updateTask: (task: IUpdateTaskPayload) => Promise<void>
	getAllTasksByStatus: (refetchTaskStatus?: string) => Promise<void>
}

export const TaskCard = ({
	task,
	deleteTask,
	getAllTasksByStatus,
	updateTask
}: ITaskCardProps) => {
	const [readableTask, setReadableTask] = useState(task)
	const [editableTask, setEditableTask] = useState(task)
	const debouncedTask = useDebounce(editableTask, DEBOUNCE_TIME)

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value, type, checked } = event.target

			if (name === 'title' && value.length > 0) {
				setReadableTask(previousReadableTask => ({
					...previousReadableTask,
					[name]: value
				}))
			}

			setEditableTask(previousEditableTask => ({
				...previousEditableTask,
				[name]: type === 'checkbox' ? checked : value
			}))
		},
		[]
	)

	const handleInputBlur = useCallback(
		(event: React.FocusEvent<HTMLInputElement>) => {
			const value = event.target.value

			if (!value || value.length === 0) {
				setEditableTask(previousEditableTask => ({
					...previousEditableTask,
					title: readableTask.title
				}))
			}
		},
		[readableTask.title]
	)

	const handleDeleteButton = useCallback(async () => {
		await deleteTask(task.id)
		await getAllTasksByStatus()
	}, [task, deleteTask, getAllTasksByStatus])

	useEffect(() => {
		const hasChanged =
			debouncedTask.title !== task.title || debouncedTask.isDone !== task.isDone

		if (!hasChanged) return

		const validation = updateTaskSchema.safeParse(debouncedTask)
		if (!validation.success) {
			return console.error(validation.error.flatten().fieldErrors)
		}

		updateTask({
			id: debouncedTask.id,
			title: debouncedTask.title,
			isDone: debouncedTask.isDone
		})
	}, [debouncedTask, task, updateTask])

	return (
		<div
			className={clsx(
				classNames.card,
				editableTask.isDone && classNames.doneCard
			)}
		>
			<input
				type='checkbox'
				name='isDone'
				checked={editableTask.isDone}
				onChange={handleInputChange}
				className={classNames.checkbox}
			/>
			<input
				className={clsx(
					classNames.input,
					editableTask.isDone && classNames.doneInput
				)}
				name='title'
				type='text'
				value={editableTask.title}
				placeholder='Titulo'
				onChange={handleInputChange}
				readOnly={editableTask.isDone}
				onBlur={handleInputBlur}
			/>
			<button
				onClick={handleDeleteButton}
				className={classNames.deleteButton}
			>
				&#xd7;
			</button>
		</div>
	)
}
