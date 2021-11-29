import { Link } from 'react-router-dom';
import { Box, Flex, Link as StyledLink } from 'rebass/styled-components';
import { Container } from './Container';

export const Navbar = () => {
    return (
        <Flex bg='black' color='white' justifyContent='center'>
            <Container>
                <Flex px={2} width="100%" alignItems="center">
                    <Link component={StyledLink} variant='nav' to='/'>React Query CRUD</Link>
                    <Box mx='auto'/>
                    <Link component={StyledLink} variant='nav' to='/create-book'>+ Add new book</Link>
                </Flex>
            </Container>
        </Flex>
    )
}