import { NextPage } from "next";
import Head from 'next/head'
import Articles from "../../../components/commons/Articles";

const Blogs: NextPage = () => {
    return (
        <>
            <Head>
                <title>ブログ一覧 | ヤッピー</title>
            </Head>
            <Articles isBlog={true} />
        </>
    );
}

export default Blogs;