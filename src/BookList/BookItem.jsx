import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { Link } from 'react-router-dom';
import { Button, Flex, Link as StyledLink, Text } from "rebass/styled-components";
import { removeBook } from "../Api";

export const BookItem = ({author, title, id}) => {

    const queryClient = useQueryClient();
    
    const { mutateAsync, isLoading } = useMutation(removeBook);

    const remove = async () => {
        await mutateAsync(id);
        // Clear cache cũ đi => gọi lại api => refresh dữ liệu => Lấy ra danh sách books mới nhất 
        queryClient.invalidateQueries("books"); 
    }

    return (
        <Flex p={3} width="100%" alignItems="center">
            <Link component={StyledLink} to={`/update-book/${id}`} mr='auto'>{title}</Link>
            <Text>{author}</Text>
            <Button ml="5" onClick={remove}>
                {isLoading ? <Loader type="ThreeDots" color="#fff" height={10}/> : "Remove"}
            </Button>
        </Flex>
    );
};
