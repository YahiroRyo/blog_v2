import Head from 'next/head'
import React from "react";

type Props = {
    children?: React.ReactNode,
    title?: string,
    description?: string,
}

const CommonMeta = ({title, description}: Props) => {
    const templateTitle = " | ヤッピー";
    return (
        <Head>
            <title>{title}{templateTitle}</title>
            <meta name="description" content={description} />
        </Head>
    );
}

export default CommonMeta;