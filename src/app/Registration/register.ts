// /**
//  * PANG NODE JS TO. CHANGE ALL PAG GAGAMITIN SA PHP
//  */

// import { RegisterFormData } from "@/Interface/formInput";
// import { GET_USER_COUNT, CREATE_USER } from "@/Graphql/usersQuery";
// import client from "../../../apollo-client";

// export const Register = async (form: RegisterFormData) => {
//     try{
//         const { data } = await client.query({
//             query: GET_USER_COUNT
//         });
//         const userCount = data.userCount;
        
//         const { data: userData } = await client.mutate({
//             mutation: CREATE_USER,
//             variables: {
//                     uid: userCount + 1,
//                     email: form.email,
//                     password: form.password,
//                     first_name: form.first_name,
//                     last_name: form.last_name,
//                     birth_date: form.birth_date,
//                     contact_number: form.contact_number,
//                     address: form.address,
//             },
//         });
//         alert("User created successfully");
//         console.log("User created successfully:", userData.createUser);
//     }catch (error) {
//         alert("Error creating user");
//         console.error("Error creating user:", error);
//     }
// };

import {RegisterFormData} from "@/interface/formInput";
import React, {useState} from "react";
import axios from "axios";

