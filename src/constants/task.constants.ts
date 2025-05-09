import type { TTaskStatus } from '../types'

export const TASK_STATUSES: Record<TTaskStatus, string> = {
	ALL: 'ALL',
	COMPLETED: 'COMPLETED',
	PENDING: 'PENDING'
}
