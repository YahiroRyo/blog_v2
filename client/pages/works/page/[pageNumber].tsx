import { useRouter } from "next/router";
import Articles from "../../../components/commons/Articles";
import CommonMeta from "../../../components/commons/CommonMeta";

const Works = () => {
    const router = useRouter();
    const {pageNumber} = router.query;

    return (
        <>
            <CommonMeta title="実績一覧" />
            <Articles isWork={true} />
        </>
    )
}

export default Works;