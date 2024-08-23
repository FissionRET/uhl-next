"use client";

import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
export default function Login() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
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
        <main className="flex flex-col items-center justify-between p-24 z-10 relative">
          <Card className="absolute w-[350px] bg-opacity-25 dark:bg-opacity-25">
            <CardHeader>
              <CardTitle>Đăng Nhập</CardTitle>
              <CardDescription>
                Sử dụng mã sinh viên và mật khẩu của nhà trường
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Mã sinh viên</Label>
                    <Input
                      className="bg-opacity-25 dark:bg-opacity-25"
                      id="msv"
                      name="msv"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Mật Khẩu</Label>
                    <Input
                      className="bg-opacity-25 dark:bg-opacity-25"
                      id="password"
                      name="password"
                      placeholder=""
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="bg-opacity-25 dark:bg-opacity-25"
                      id="terms"
                    />
                    <Label htmlFor="terms">Nhớ mật khẩu trong hệ thống</Label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end px-5">
              <Button
                className="bg-opacity-25 dark:bg-opacity-25"
                variant="outline"
              >
                Đăng Nhập
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}
