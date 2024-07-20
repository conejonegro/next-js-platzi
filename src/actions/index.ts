"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation, CustomerCreateMutation   } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { redirect } from "next/navigation"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+52' + formDataObject.phone
    }
  }

  const { customerCreate } = await graphqlClient.request<CustomerCreateMutation >(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate
  console.log("hola customer", customer)
  console.log(customerUserErrors)
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  const accesToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
  console.log(accesToken)
  if(accesToken){
    console.log("hola accesss")
    redirect('/tienda')
  }
  else{
    console.log("error al logear")
  }
}