import clsx from 'clsx'

const classNames = {
	filterButton:
		'bg-gray-200 py-1 px-4 text-md text-gray-600 font-semibold rounded-full hover:bg-gray-300',
	filterButtonActive:
		'bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700'
}

type TTaskStatus = 'ALL' | 'COMPLETED' | 'PENDING'

const TASK_STATUSES: Record<TTaskStatus, string> = {
	ALL: 'ALL',
	COMPLETED: 'COMPLETED',
	PENDING: 'PENDING'
}

interface ITaskFiltersProps {
	taskStatus: string
	handleTaskStatusChange: (taskStatus: string, refetch?: boolean) => void
}

export const TaskFilters = ({
	taskStatus,
	handleTaskStatusChange
}: ITaskFiltersProps) => {
	const handleButtonClick = (taskStatus: string) => {
		handleTaskStatusChange(taskStatus, true)
	}

	return (
		<div className='flex justify-center gap-2'>
			<button
				className={clsx(
					classNames.filterButton,
					taskStatus === TASK_STATUSES.ALL && classNames.filterButtonActive
				)}
				onClick={() => handleButtonClick(TASK_STATUSES.ALL)}
			>
				Todas
			</button>
			<button
				className={clsx(
					classNames.filterButton,
					taskStatus === TASK_STATUSES.COMPLETED &&
						classNames.filterButtonActive
				)}
				onClick={() => handleButtonClick(TASK_STATUSES.COMPLETED)}
			>
				Completadas
			</button>
			<button
				className={clsx(
					classNames.filterButton,
					taskStatus === TASK_STATUSES.PENDING && classNames.filterButtonActive
				)}
				onClick={() => handleButtonClick(TASK_STATUSES.PENDING)}
			>
				Pendientes
			</button>
		</div>
	)
}
