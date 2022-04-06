import { useEffect } from "react";
import axios from 'axios'
import Str from '../utils/str';
import { useRouter } from "next/router";

const Auth = () => {
    const router = useRouter();

    useEffect(() => {
        const func = () => {
            return new Promise(async (resolve, reject) => {
                const url = router.pathname;
                if (url.indexOf("/admin") === -1 || url === "/admin/login") return reject();
                const token = sessionStorage.getItem("token");
                if (!token) reject();
                try {
                    await axios.get(`${Str.apiUrl()}/admin/is_auth`, {
                        headers: {
                            Authorization: token!
                        }
                    });
                    resolve(true);
                } catch(e) {
                    router.replace("/admin/login");
                    reject();
                }
            })
        }
        func();
    });

    return <></>
}

export default Auth;