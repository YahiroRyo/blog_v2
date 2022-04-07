import { NextPage } from "next";
import Head from 'next/head'
import Articles from "../../../components/commons/Articles";

const Works: NextPage = () => {
    return (
        <>
            <Head>
                <title>実績一覧 | ヤッピー</title>
            </Head>
            <Articles isWork={true} />
        </>
    )
}

export default Works;