import Head from 'next/head'
import React from "react";

type Props = {
    children?: React.ReactNode,
    title?: string,
    description?: string,
}

const CommonMeta = ({title, description}: Props) => {
    return (
        <Head>
            <title>{title} | ヤッピー</title>
            <meta name="description" content={description} />
        </Head>
    );
}

export default CommonMeta;