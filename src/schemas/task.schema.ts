import { z } from 'zod'

export const getTasksSchema = z.object({
	isDone: z.boolean().optional()
})

export const createTaskSchema = z.object({
	title: z.string().min(1, 'El título es requerido')
})

export const updateTaskSchema = createTaskSchema.partial().extend({
	isDone: z.boolean().optional()
})
