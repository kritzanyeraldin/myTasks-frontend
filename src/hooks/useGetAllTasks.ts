import type { IGetTasksParams, ITask } from '../types'
import { useState, useEffect, useCallback } from 'react'
import { getAllTasks } from '../api'

export const useGetAllTasks = () => {
	const [data, setData] = useState<ITask[]>()
	const [loading, setLoading] = useState(true)
	const [error] = useState()

	const _getAllTasks = useCallback(async (params?: IGetTasksParams) => {
		try {
			setLoading(true)
			const tasks = await getAllTasks(params)
			setData(tasks)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		_getAllTasks()
	}, [_getAllTasks])

	return {
		data,
		loading,
		error,
		refetch: _getAllTasks
	}
}
