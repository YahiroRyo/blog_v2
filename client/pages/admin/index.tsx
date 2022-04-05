import Link from "next/link";

const Index = () => {
    return (
        <>
            <Link href="/admin/blogs/page/1">
                <a>ブログ一覧</a>
            </Link>
            <Link href="/admin/works/page/1">
                <a>実績一覧</a>
            </Link>
        </>
    )
}

export default Index;