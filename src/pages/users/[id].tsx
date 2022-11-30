import React from "react";
import userService from "../../apis/userService";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

const UserPage = ({userData}: InferGetServerSidePropsType<GetServerSideProps>) => {
    console.log(userData)

    return (
        <div>
            {userData !== null && (
                <div>{userData.company}</div>
            )}
        </div>
    )
}

export default UserPage

export type UsersQuery = {
    id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const usersQuery = context.query as UsersQuery
    const id = usersQuery.id

    let userData = {}
    await userService.getUserByUserName((id || '').toString()).then(response => {
        userData = response.data
    })

    return {
        props: {userData}
    }
}