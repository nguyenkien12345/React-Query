import Loader from 'react-loader-spinner';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Flex, Heading } from 'rebass';
import { getBook, updateBook } from '../Api';
import { BookForm } from '../Shared/BookForm';
import { Container } from '../Shared/Container';

export const UpdateBook = () => {

    const { id } = useParams();   // Lấy ra id trên đường dẫn

    const history = useHistory(); // Xử lý chuyển trang

    const { data, error, isError, isLoading } = useQuery(["book", {id}], getBook);

    // Chúng ta đã có cờ isLoading từ useQuery nên ở đây chúng ta sẽ đổi tên cờ isLoading của useMutation để tránh bị trùng lặp (đổi tên từ isLoading thành isMutating)
    const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

    const onFormSubmit = async (data) => {
        await mutateAsync({...data, id})
        history.push("/")
    }

    if(isLoading){
        return (
            <Container>
              <Flex py="5" justifyContent="center">
                <Loader type="ThreeDots" color="#ccc" height={30} />
              </Flex>
            </Container>
          );
    }

    if(isError){
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    Error: {error.message}
                </Flex>
            </Container>
        )
    }

    return (
        <Container>
            <Box sx={{py: 3}}>
                <Heading sx={{marginBottom: 3}}>Update Book</Heading>
                <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
            </Box>
        </Container>
    );
}