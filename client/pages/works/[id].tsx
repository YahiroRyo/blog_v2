import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import Str from "../../utils/str";
import DetailArticle from "../../components/commons/DetailArticle";

type Props = {
    title: string,
    description: string,
    contents: string,
    createdAt: string,
    thumbnail?: string,
};

const Work: NextPage<Props> = ({title, description, contents, createdAt, thumbnail}) => {
    return (
        <DetailArticle
            title={title}
            description={description}
            contents={contents}
            createdAt={createdAt}
            thumbnail={thumbnail}
        />
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let title = "";
    let description = "";
    let contents = "";
    let createdAt = "";
    let thumbnail = "";
    
    const {id} = context.query;
    try {
        const response = await axios.get<{
            title: string,
            description: string,
            contents: string,
            created_at: string,
            thumbnail: string
        }>(`${Str.apiUrl()}/works/${id}`);
        title = response.data.title;
        description = response.data.description;
        contents = response.data.contents;
        createdAt = response.data.created_at;
        thumbnail = response.data.thumbnail;
    } catch(e) {
    }
    
    return {
        props: {
            title: title,
            description: description,
            contents: contents,
            createdAt: createdAt,
            thumbnail: thumbnail
        }
    }
}

export default Work;