import React from "react";
import userService from "../../apis/userService";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import ProfileImage from "../../components/ProfileImage";

const UserPage = ({userData}: InferGetServerSidePropsType<GetServerSideProps>) => {
    console.log(userData)

    return (
        <div>
            <ProfileImage url={userData.avatarUrl}/>
            {(
                <div>{userData.company}</div>
            )}
        </div>
    )
}

export default UserPage

export type UsersQuery = {
    id: string
}

export type UserData = {
    avatarUrl: string
    company: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const usersQuery = context.query as UsersQuery
    const id = usersQuery.id

    let userData : UserData = {
        avatarUrl : "empty",
        company : "empty"
    }

    await userService.getUserByUserName((id || '').toString()).then(response => {
        userData = response.data as UserData
    })

    return {
        props: {userData}
    }
}