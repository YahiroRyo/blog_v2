import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import Str from "../../utils/str";
import DetailArticle from "../../components/commons/DetailArticle";

type Props = {
    title: string,
    description: string,
    contents: string,
    createdAt: string,
};

const Work: NextPage<Props> = ({title, description, contents, createdAt}) => {
    return (
        <DetailArticle
            title={title}
            description={description}
            contents={contents}
            createdAt={createdAt}
        />
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let title = "";
    let description = "";
    let contents = "";
    let createdAt = "";
    
    const {id} = context.query;
    try {
        const response = await axios.get<{
            title: string,
            description: string,
            contents: string,
            created_at: string,
        }>(`${Str.apiUrl()}/works/${id}`);
        title = response.data.title;
        description = response.data.description;
        contents = response.data.contents;
        createdAt = response.data.created_at;
    } catch(e) {
    }
    
    return {
        props: {
            title: title,
            description: description,
            contents: contents,
            createdAt: createdAt,
        }
    }
}

export default Work;