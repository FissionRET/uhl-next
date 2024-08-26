"use client";

import { ColumnDef } from "@tanstack/react-table";

export type LichHoc = {
    id: string;
    schedule: string;
    mondayValue: string;
    tuesdayValue: string;
    wednesdayValue: string;
    thursdayValue: string;
    fridayValue: string;
    saturdayValue: string;
    sundayValue: string;
};

export const columns: ColumnDef<LichHoc>[] = [
    {
        accessorKey: "schedule",
        header: "Ca học",
    },
    {
        accessorKey: "monday",
        header: "Thứ 2",
    },
    {
        accessorKey: "tuesday",
        header: "Thứ 3",
    },
    {
        accessorKey: "wednesday",
        header: "Thứ 4",
    },
    {
        accessorKey: "thursday",
        header: "Thứ 5",
    },
    {
        accessorKey: "friday",
        header: "Thứ 6",
    },
    {
        accessorKey: "saturday",
        header: "Thứ 7",
    },
    {
        accessorKey: "sunday",
        header: "Chủ nhật",
    },
];
