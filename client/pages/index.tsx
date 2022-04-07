import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sns from '../components/commons/Sns'
import styles from '../styles/pages/Index.module.scss'
import Str from '../utils/str'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップページ | ヤッピー</title>
        <meta name="description" content="専門学生 19歳です。WEBだったりAtCoderを最近はやってます。Vue.js/Nuxt.js/Next.js/Laravel/Golang使ってます。FPSや格ゲーが好きです。" />
      </Head>
      <div className={Str.joinClassName(styles.index__main, "inner")}>
        <div className={styles.index__main__profile}>
          <div className={styles.index__main__profile__icon} >
            <Image src="/icon.jpg" layout="fill" alt="アイコン"objectFit="cover"  />
          </div>
          <div className={styles.index__main__profile__sns}>
            <Sns href="https://twitter.com/Yappisec" src="/icons/twitter.png" alt="twitter" />
            <Sns href="https://github.com/YahiroRyo" src="/icons/github.png" alt="github" />
          </div>
          <p className={styles.index__main__profile__description}>
            専門学生 19歳です。<br/>
            WEBだったりAtCoderを最近はやってます。<br/>
            FPSや格ゲーが好きです。<br/>
          </p>
        </div>
      </div>
    </>
  )
}

export default Index;