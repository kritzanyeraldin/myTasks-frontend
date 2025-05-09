import type { ITask, ICreateTaskPayload } from '../types'
import { useState, useCallback } from 'react'
import { createTask } from '../api'

export const useCreateTask = () => {
	const [data, setData] = useState<ITask>()
	const [loading, setLoading] = useState(false)
	const [error] = useState()

	const _createTask = useCallback(async (payload: ICreateTaskPayload) => {
		try {
			setLoading(true)
			const task = await createTask(payload)
			setData(task)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])

	return {
		data,
		loading,
		error,
		mutation: _createTask
	}
}
