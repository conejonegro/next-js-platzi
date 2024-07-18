import { gql } from "graphql-request"

export type CreateCustomerMutation = {
    customerCreate: {
      customer: {
        firstName: string
        lastName: string
        email: string
        phone: string
      }
      customerUserErrors: {
        field: string
        message: string
        code: string
      }[]
    }
  }

export const createUserMutation = gql`
mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
        customer {
            firstName
            lastName
            email
            phone
        }
        customerUserErrors {
            field
            message
            code
        }
    }
}
`