"use client";

import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import * as cheerio from "cheerio";

export default function Lich() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

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
            <Table className="mx-auto w-2/4 border">
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px] border-r">Ca Học</TableHead>
                            <TableHead className="text-center border-r">Thứ 2</TableHead>
                            <TableHead className="text-center border-r">Thứ 3</TableHead>
                            <TableHead className="text-center border-r">Thứ 4</TableHead>
                            <TableHead className="text-center border-r">Thứ 5</TableHead>
                            <TableHead className="text-center border-r">Thứ 6</TableHead>
                            <TableHead className="text-center border-r">Thứ 7</TableHead>
                            <TableHead className="text-center">Chủ Nhật</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-center border-r">
                                Sáng
                            </TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-center border-r">
                                Chiều
                            </TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                            <TableCell className="text-center border-r"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </main>
        </div>
    );
}
