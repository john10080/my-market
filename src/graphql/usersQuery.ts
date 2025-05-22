import { gql } from '@apollo/client'

/**
 * Queries
 */
export const GET_USER_COUNT = gql`
    query QueryUsers {
        userCount
    }
`

/**
 * Mutations
 */
export const CREATE_USER = gql`
    mutation newUser(
        $uid: ID!,
        $email: String!,
        $password: String!,
        $first_name: String!,
        $last_name: String!,
        $birth_date: String!,
        $contact_number: String!,
        $address: String!
    ) {
        createUser(
            uid: $uid,
            email: $email,
            password: $password,
            first_name: $first_name,
            last_name: $last_name,
            birth_date: $birth_date,
            contact_number: $contact_number,
            address: $address
        ) {
            uid
            email
        }
    }
`