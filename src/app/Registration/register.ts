import { RegisterFormData } from "@/Interface/formInput";
import { CREATE_USER } from "@/Graphql/usersQuery";
import client from "../../../apollo-client";

export const Register = async (form: RegisterFormData) => {
    try{
        const uid = Math.floor(Math.random() * 999999) + 1;
        const { data } = await client.mutate({
            mutation: CREATE_USER,
            variables: {
                    uid: uid,
                    email: form.email,
                    password: form.password,
                    first_name: form.first_name,
                    last_name: form.last_name,
                    birth_date: form.birth_date,
                    contact_number: form.contact_number,
                    address: form.address,
            },
        });
        console.log("User created successfully:", data.createUser);
        return data 
    }catch (error) {
        return error
    }
};