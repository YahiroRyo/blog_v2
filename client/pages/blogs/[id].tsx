import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <></>
    );
}

export default Blog;