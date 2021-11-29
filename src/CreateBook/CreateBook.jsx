import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { Box, Heading } from "rebass";
import { createBook } from "../Api";
import { BookForm } from "../Shared/BookForm";
import { Container } from "../Shared/Container";

export const CreateBook = () => {
    const history = useHistory();

    const {mutateAsync, isLoading} = useMutation(createBook);

    const onFormSubmit = async (data) => {
        await mutateAsync(data);
        history.push("/");
    };

    return (
        <Container>
            <Box sx={{ py: 3 }}>
                <Heading sx={{marginBottom:3}}>Create New Book</Heading>
                <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </Box>
        </Container>
    )
}
