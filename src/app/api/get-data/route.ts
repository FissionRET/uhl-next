import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from "path";

export async function GET(req: NextRequest) {
    if (req.method === 'GET') {
        try {
            const file = await fs.readFile('/tmp/data.json', 'utf8');
            const data = JSON.parse(file);

            return NextResponse.json({
                week: data.scheduleWeek,
                data: data.scheduleData
            }, { status: 200 });
        } catch (err) {
            console.error(err);
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    } else {
        return NextResponse.json({
            error: 'Method not allowed'
        }, { status: 405 });
    }
}