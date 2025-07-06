const requestsMap = new Map<string, { count: number; time: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 1000;

export async function applyRateLimit(ip: string): Promise<boolean> {
    const now = Date.now();
    const entry = requestsMap.get(ip);

    if (!entry) {
        requestsMap.set(ip, { count: 1, time: now });
        return false;
    }

    if (now - entry.time > WINDOW_MS) {
        requestsMap.set(ip, { count: 1, time: now });
        return false;
    }

    if (entry.count >= LIMIT) {
        return true;
    }

    entry.count += 1;
    requestsMap.set(ip, entry);
    return false;
}
