import { useRouter } from "next/router";
import Input from "../../../components/commons/Input";

const Blog = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Input type="button" id="edit">編集</Input>
            <Input type="button" id="delete">削除</Input>
        </>
    );
}

export default Blog;