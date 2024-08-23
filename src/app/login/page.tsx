"use client";

import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { z } from "zod";
import { loginSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast"

import axios from "axios";
import {wrapper} from "axios-cookiejar-support";
import tough from "tough-cookie";
import * as cheerio from "cheerio";
import qs from "qs";

export default function Login() {
    const { theme } = useTheme();
	const { toast } = useToast();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    // Form handler

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            userid: "",
            password: "",
        },
    });
	
	const cookieJar = new tough.CookieJar();
	const client = wrapper(axios.create({
		jar: cookieJar,
		withCredentials: true
	}));	

    function onLoginSubmit(values: z.infer<typeof loginSchema>) {
		client.get('http://daotao.daihochalong.edu.vn/Login.aspx')
		.then(response => {
			console.log(response.data);
		})

		// const requestData = {
		// 	__VIEWSTATE: "",
		// 	__VIEWSTATEGENERATOR: "",
		// 	__EVENTVALIDATION: "",
		// 	txtusername: values.userid.toString(),
		// 	txtpassword: values.password.toString(),
		// 	btnDangnhap: "Đăng nhập"
		// }

		// client.post('http://daotao.daihochalong.edu.vn/Login.aspx', qs.stringify(requestData))
		// .then(response => {
		// 	toast({
		// 		title: "Successfully logged in !",
		// 		description: `Authenticated on ${values.userid}`
		// 	});

		// 	return client.get('http://daotao.daihochalong.edu.vn/wfrmLichHocSinhVienTinChi.aspx');
		// })
		// .then(response => {
		// 	const $ = cheerio.load(response.data);

		// 	toast({
		// 		title: "Fetched data !",
		// 		description: `Received table data for user ${$('#nav1_lblHo_ten').text()}`
		// 	});
		// })
		// .catch(err => {
		// 	console.error('Error: ', err);
		// });       
    }

    return (
        <>
            <div className="relative min-h-screen overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Particles
                    className="absolute inset-0"
                    quantity={25}
                    ease={70}
                    color={color}
                    refresh
                />

                <main className="relative flex flex-col items-center justify-between">
                    <Card className="w-1/4 md:w-1/3">
                        <CardHeader>
                            <CardTitle>Đăng nhập</CardTitle>
                            <CardDescription>
                                Tài khoản sinh viên
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Form {...loginForm}>
                                <form
                                    onSubmit={loginForm.handleSubmit(
                                        onLoginSubmit
                                    )}
                                    className="space-y-8"
                                >
                                    <FormField
                                        control={loginForm.control}
                                        name="userid"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Mã sinh viên
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="22DH01234"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Mã sinh viên của bạn.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={loginForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Mật khẩu
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="..."
														type="password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Mật khẩu tài khoản của bạn.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit">Đăng nhập</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </>
    );
}
