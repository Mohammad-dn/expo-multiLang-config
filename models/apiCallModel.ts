type StatusCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500 | number;
export type StatusMessage =
	| 'OK'
	| 'Created'
	| 'No Content'
	| 'Bad Request'
	| 'Unauthorized'
	| 'Forbidden'
	| 'Not Found'
	| 'Internal Server Error'
	| string;
export const statusMessages: Record<StatusCode, StatusMessage> = {
	200: 'OK',
	201: 'Created',
	204: 'No Content',
	400: 'Bad Request',
	401: 'Unauthorized',
	403: 'Forbidden',
	404: 'Not Found',
	500: 'Internal Server Error',
} as const;
export interface ApiResponse<T> {
	data: T | null;
	error: string | null;
	status: StatusMessage;
	message?: string;
	statusCode?: number;
	success?: boolean;
}

export interface ApiError {
	message: string;
	status: number;
	code?: string;
}
