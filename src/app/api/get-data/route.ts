import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from "path";

export async function GET(req: NextRequest) {
    try {
        if (req.method === 'GET') {
            const path = join(process.cwd() + '/public/data.json');
            const file = await fs.readFile(path, 'utf8');
            const data = JSON.parse(file);

            return NextResponse.json({
                week: data.scheduleWeek,
                data: data.scheduleData
            }, { status: 200 });
        } else {
            return NextResponse.json({
                error: 'Method not allowed'
            }, { status: 403 });
        }
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}