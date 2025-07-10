import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

// Simple in-memory store for page views
let pageViews = 0;

export const GET: RequestHandler = async () => {
	return json({ count: pageViews });
};

export const POST: RequestHandler = async () => {
	pageViews++;
	return json({ count: pageViews });
}; 