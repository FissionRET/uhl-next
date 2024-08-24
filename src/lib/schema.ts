"use client";

import {z} from "zod";

export const loginSchema = z.object({
    userid: z.string().min(1, {
        message: "Mã sinh viên phải ít nhất 1 ký tự"
    }).max(9, {
        message: "Mã sinh viên chỉ có tối đa 9 ký tự"
    }),
    password: z.string().min(1, {
        message: "Mật khẩu phải ít nhất 1 ký tự"
    })
})