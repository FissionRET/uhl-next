"use client";

import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { z } from "zod";
import { loginSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'

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
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/footer";

export default function Login() {
    const { theme } = useTheme();
    const { toast } = useToast();
    const router = useRouter();
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
    
    async function onLoginSubmit(values: z.infer<typeof loginSchema>) {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: values.userid.toString(),
                    password: values.password.toString(),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                toast({
                    title: 'Authentication from UHL successfully !',
                    description: `Logged in as ${data.username}.`
                });

                router.push('/lich-hoc');
            } else {
                toast({
                    title: 'Authentication failed !',
                    description: 'Something went wrong.'
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
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
                    <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
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
                                    className="space-y-6"
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
                                                <FormLabel>Mật khẩu</FormLabel>
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

                                    <Button type="submit" className="w-full">Đăng nhập</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </main>

                <Footer/>
            </div>
        </>
    );
}
