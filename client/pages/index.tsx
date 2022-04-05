import type { NextPage } from 'next'
import Link from 'next/link'
import CommonMeta from '../components/commons/CommonMeta'
import styles from '../styles/pages/Index.module.scss'

const Index: NextPage = (pageProps) => {
  return (
    <>
      <CommonMeta title="テスト" />
      <Link href={'/blogs/page/1'}>
        <a>ブログ一覧</a>
      </Link>
    </>
  )
}

export default Index
