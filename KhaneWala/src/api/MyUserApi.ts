import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";


const BASE_URL=import.meta.env.VITE_BASE_URL;




type CreateUser={
    auth0Id:string,
    email:string
}


 export const useCreateUser =()=>
    {

        const createUserRequest= async (user:CreateUser)=>{


            const response=await fetch(`${BASE_URL}/api/v1/user`,
                {
                    method:"POST",
                    headers:{
                        // Authorization:`Bearer ${accessToken}`,
                        "Content-Type":"application/json"
                    },
               
                body: JSON.stringify(user),
            }, 
            ) 

            if(!response.ok)
                {
                        throw new Error('Failed to create user');
                }
        };

        const {
            mutateAsync:createUser,
            isLoading,
            isError,
            isSuccess,
        }=useMutation(createUserRequest);

        return {
    createUser,
    isLoading,
    isError,
    isSuccess
};};
