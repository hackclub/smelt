import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

// Store IP addresses and their last visit timestamps
const ipVisits = new Map<string, number>();

export const GET: RequestHandler = async ({ request }) => {
	const clientIP = getClientIP(request);
	return json({ count: ipVisits.size });
};

export const POST: RequestHandler = async ({ request }) => {
	const clientIP = getClientIP(request);
	const now = Date.now();
	const oneDayMs = 24 * 60 * 60 * 1000;
	
	// Check if this IP has visited in the last 24 hours
	const lastVisit = ipVisits.get(clientIP);
	if (!lastVisit || (now - lastVisit) > oneDayMs) {
		// New visit or visit after 24 hours
		ipVisits.set(clientIP, now);
	}
	
	return json({ count: ipVisits.size });
};

function getClientIP(request: Request): string {
	// Try to get real IP from headers (for proxy/load balancer setups)
	const forwarded = request.headers.get('x-forwarded-for');
	const realIP = request.headers.get('x-real-ip');
	
	if (forwarded) {
		return forwarded.split(',')[0].trim();
	}
	
	if (realIP) {
		return realIP;
	}
	
	// Fallback to a default for local development
	return 'localhost';
} 