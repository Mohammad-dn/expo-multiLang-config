// apiService.ts

// Define a generic type for API responses
import { ApiResponse, StatusMessage } from '../models/apiCallModel.js';
// Base configuration
const BASE_URL = ''; // Replace with your API URL

// Default headers
const defaultHeaders = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
};

// GET request
export const get = async <T>(
	endpoint: string,
	params?: Record<string, string>,
	customHeaders?: Record<string, string>,
): Promise<ApiResponse<T>> => {
	try {
		const url = new URL(`${BASE_URL}${endpoint}`);

		// Add query params if provided
		if (params) {
			Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
		}

		const headers = { ...defaultHeaders, ...customHeaders };

		const response = await fetch(url.toString(), {
			method: 'GET',
			headers,
		});

		const data = await response.json();

		return {
			data,
			error: null,
			status: response.status as unknown as StatusMessage,
		};
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
			status: 500 as unknown as StatusMessage,
		};
	}
};

// POST request
export const post = async <T>(
	endpoint: string,
	body: unknown,
	customHeaders?: Record<string, string>,
): Promise<ApiResponse<T>> => {
	try {
		const headers = { ...defaultHeaders, ...customHeaders };

		const response = await fetch(`${BASE_URL}${endpoint}`, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});

		const data = await response.json();

		return {
			data,
			error: null,
			status: response.status as unknown as StatusMessage,
		};
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
			status: 500 as unknown as StatusMessage,
		};
	}
};

// PUT request
export const put = async <T>(
	endpoint: string,
	body: unknown,
	customHeaders?: Record<string, string>,
): Promise<ApiResponse<T>> => {
	try {
		const headers = { ...defaultHeaders, ...customHeaders };

		const response = await fetch(`${BASE_URL}${endpoint}`, {
			method: 'PUT',
			headers,
			body: JSON.stringify(body),
		});

		const data = await response.json();

		return {
			data,
			error: null,
			status: response.status as unknown as StatusMessage,
		};
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
			status: 500 as unknown as StatusMessage,
		};
	}
};

// DELETE request
export const del = async <T>(endpoint: string, customHeaders?: Record<string, string>): Promise<ApiResponse<T>> => {
	try {
		const headers = { ...defaultHeaders, ...customHeaders };

		const response = await fetch(`${BASE_URL}${endpoint}`, {
			method: 'DELETE',
			headers,
		});

		const data = await response.json();

		return {
			data,
			error: null,
			status: response.status as unknown as StatusMessage,
		};
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
			status: 500 as unknown as StatusMessage,
		};
	}
};
