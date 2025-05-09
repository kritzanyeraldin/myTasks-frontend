import { useCallback, useState } from 'react'
import { CreateTaskForm, TaskCard, TaskFilters } from './components'
import { useDeleteTask, useGetAllTasks, useUpdateTask } from './hooks'
import { TASK_STATUSES } from './constants'

const classNames = {
	mainSection: 'bg-pink-50 grid place-items-center',
	content:
		'font-regular h-screen w-full max-w-[480px] flex flex-col items-center justify-center gap-4',
	title: 'font-heading text-5xl text-pink-500 text-center mb-2',
	cardContainer: 'flex flex-col gap-4 w-full h-[50%] overflow-y-auto px-2',
	taskCard:
		'flex flex-row items-center border-2 w-full p-3 rounded-md border-gray-200 gap-2',
	noDataMessage:
		'text-center text-lg font-medium text-gray-700 mt-4 flex items-center justify-center gap-2',
	emoji: 'text-3xl'
}

const emptyMessage = (
	<p className={classNames.noDataMessage}>
		No se encontró tareas <span className={classNames.emoji}>&#128532;</span>
	</p>
)

function App() {
	const { data: tasks, refetch: getAllTasks } = useGetAllTasks()
	const { mutation: updateTask } = useUpdateTask()
	const { mutation: deleteTask } = useDeleteTask()
	const [taskStatus, setTaskStatus] = useState(TASK_STATUSES.ALL)

	const getAllTasksByStatus = useCallback(
		async (refetchTaskStatus?: string) => {
			const _taskStatus = refetchTaskStatus ?? taskStatus

			let isDone: boolean | undefined

			if (_taskStatus === TASK_STATUSES.COMPLETED) {
				isDone = true
			} else if (_taskStatus === TASK_STATUSES.PENDING) {
				isDone = false
			}

			await getAllTasks({
				isDone
			})
		},
		[getAllTasks, taskStatus]
	)

	const handleTaskStatusChange = (taskStatus: string, refetch = false) => {
		setTaskStatus(taskStatus)

		if (refetch) {
			getAllTasksByStatus(taskStatus)
		}
	}

	return (
		<section className={classNames.mainSection}>
			<div className={classNames.content}>
				<h1 className={classNames.title}>Mis tareas pendientes</h1>
				<CreateTaskForm getAllTasksByStatus={getAllTasksByStatus} />
				<TaskFilters
					taskStatus={taskStatus}
					handleTaskStatusChange={handleTaskStatusChange}
				/>
				{tasks?.length !== 0 ? (
					<div className={classNames.cardContainer}>
						{tasks?.map(task => (
							<TaskCard
								key={task.id}
								task={task}
								deleteTask={deleteTask}
								updateTask={updateTask}
								getAllTasksByStatus={getAllTasksByStatus}
							/>
						))}
					</div>
				) : (
					emptyMessage
				)}
			</div>
		</section>
	)
}

export default App
