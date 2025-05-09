import type { ITask, IUpdateTaskPayload } from '../types'
import { useState, useCallback } from 'react'
import { updateTask } from '../api'

export const useUpdateTask = () => {
	const [data, setData] = useState<ITask>()
	const [loading, setLoading] = useState(false)
	const [error] = useState()

	const _updateTask = useCallback(async (payload: IUpdateTaskPayload) => {
		try {
			setLoading(true)
			const task = await updateTask(payload)
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
		mutation: _updateTask
	}
}
