"use client";

import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/footer";

interface DaySchedule {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

interface ScheduleRow {
    time: string;
    days: DaySchedule;
}

export default function Lich() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    const [scheduleWeek, setScheduleWeek] = useState("");
    const [scheduleData, setScheduleData] = useState<ScheduleRow[]>([]);

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/get-data");
                const data = await response.json();

                if (Array.isArray(data.data)) {
                    setScheduleWeek(data.week);
                    setScheduleData(data.data);
                } else {
                    console.error(
                        "API response does not contain scheduleData as an array"
                    );
                }
            } catch (error) {
                console.error("Failed to fetch schedule data", error);
            }
        }

        fetchData();
    }, []);

    const dayNames = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];

    const formatText = (text: string) => {
        // Replace common delimiters with line breaks
        const formattedText = text
            .replace(/Tiết học:/g, "\nTiết học:")
            .replace(/Mã lớp:/g, "\nMã lớp:")
            .replace(/GV:/g, "\nGV:")
            .replace(/Phòng:/g, "\nPhòng:")
            .replace(/Hình thức học:/g, "\nHình thức học:")
            .trim();

        // Split by newline and create <p> tags
        return formattedText
            .split("\n")
            .map((line, index) => <p key={index}>{line}</p>);
    };

    if (!Array.isArray(scheduleData) || scheduleData.length === 0) {
        return (
            <div className="relative min-h-screen overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Particles
                    className="absolute inset-0"
                    quantity={25}
                    ease={70}
                    color={color}
                    refresh
                />

                <main className="relative flex flex-col items-center justify-between">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Handler</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Fetching data...</p>
                        </CardContent>
                    </Card>
                </main>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Particles
                className="absolute inset-0"
                quantity={25}
                ease={70}
                color={color}
                refresh
            />

            <main className="relative flex flex-col items-center justify-between">
                <Table className="mx-auto w-4/5 border">
                    <TableCaption>{scheduleWeek}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px] border-r">
                                Ca Học
                            </TableHead>
                            {[
                                "Thứ 2",
                                "Thứ 3",
                                "Thứ 4",
                                "Thứ 5",
                                "Thứ 6",
                                "Thứ 7",
                                "Chủ Nhật",
                            ].map((day, index) => (
                                <TableHead
                                    key={index}
                                    className="w-[100px] text-center border-r"
                                >
                                    {day}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {scheduleData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                <TableCell className="font-medium text-center border-r">
                                    {row.time}
                                </TableCell>
                                {dayNames.map((dayName) => (
                                    <TableCell
                                        key={dayName}
                                        className="text-center border-r"
                                    >
                                        {formatText(
                                            row.days[
                                                dayName as keyof DaySchedule
                                            ]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>

            <Footer/>
        </div>
    );
}
