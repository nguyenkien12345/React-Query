import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { Flex } from "rebass/styled-components";
import { getAllBooks } from "../Api";
import { Container } from "../Shared/Container";
import { BookItem } from "./BookItem";

export const BookList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map(({ author, title, id }) => (
            <BookItem key={id} author={author} title={title} id={id}/>
        ))}
      </Flex>
    </Container>
  );
};
