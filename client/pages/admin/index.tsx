import Link from "next/link";
import CommonMeta from "../../components/commons/CommonMeta";

const Index = () => {
    return (
        <>
            <CommonMeta title="管理者用トップページ" />
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