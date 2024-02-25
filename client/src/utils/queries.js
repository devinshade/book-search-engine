// This will hold the query GET_ME, which will execute the me query set up using Apollo Server.
// import gql from @apollo/client
import { gql } from '@apollo/client';

// Use the gql function to access the ME entrypoint and export it
export const GET_ME = gql`
    {
        me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
        }
    }
`;