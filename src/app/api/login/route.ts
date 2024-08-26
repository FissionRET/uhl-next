import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import tough from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';
import qs from "qs";

interface RequestParams {
    txtusername: string;
    txtpassword: string;
    __VIEWSTATE: string;
    __VIEWSTATEGENERATOR: string;
    __EVENTVALIDATION: string;
    btnDangNhap: string;
}

export async function POST(req: NextRequest) {
    try {
        // Extract body data
        const body = await req.json();

        const cookieJar = new tough.CookieJar();
        const client = wrapper(axios.create({
            jar: cookieJar,
            withCredentials: true
        }));

        // Initialize request params

        const requestParams: RequestParams = {
            txtusername: body.userid,
            txtpassword: body.password,
            __VIEWSTATE: '',
            __VIEWSTATEGENERATOR: '',
            __EVENTVALIDATION: '',
            btnDangNhap: 'Đăng nhập'
        };

        // Perform initial GET request to retrieve hidden form values then bind it to interface

        const loginPage = await client.get('http://daotao.daihochalong.edu.vn/Login.aspx');
        const $ = cheerio.load(loginPage.data);

        requestParams.__VIEWSTATE = $('#__VIEWSTATE').val();
        requestParams.__VIEWSTATEGENERATOR = $('#__VIEWSTATEGENERATOR').val();
        requestParams.__EVENTVALIDATION = $('#__EVENTVALIDATION').val();

        // Perform login POST request with form data and stringify form data as query string
        await client.post('http://daotao.daihochalong.edu.vn/Login.aspx', qs.stringify(requestParams));

        // Fetch the whole god damn lich hoc page after login
        const protectedData = await client.get('http://daotao.daihochalong.edu.vn/wfrmLichHocSinhVienTinChi.aspx');

        const $t = cheerio.load(protectedData.data);
        const username = $t('#nav1_lblHo_ten').text();
        const tableLichHoc = $t('table.GridViewStyle').parent().html();

        return NextResponse.json({
            username: username,
            data: tableLichHoc 
        }, { status: 200 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}