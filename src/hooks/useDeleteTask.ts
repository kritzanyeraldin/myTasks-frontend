import { useState, useCallback } from 'react'
import { deleteTask } from '../api'

export const useDeleteTask = () => {
	const [loading, setLoading] = useState(false)
	const [error] = useState()

	const _deleteTask = useCallback(async (id: number) => {
		try {
			setLoading(true)
			await deleteTask(id)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])

	return {
		loading,
		error,
		mutation: _deleteTask
	}
}
