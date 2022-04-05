import { useRouter } from "next/router";
import Articles from "../../../components/commons/Articles";
import CommonMeta from "../../../components/commons/CommonMeta";

const Works = () => {
    const router = useRouter();
    const {pageNumber} = router.query;
    let axiosPageNumber = parseInt(pageNumber as string);
    if (!axiosPageNumber) {
        axiosPageNumber = 1;
    }

    return (
        <>
            <CommonMeta title="実績一覧" />
            <Articles isWork={true} />
        </>
    )
}

export default Works;