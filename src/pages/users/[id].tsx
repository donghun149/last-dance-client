import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import userService, {UserResponse} from "../../apis/userService";

const UserPage = () => {
    const router = useRouter()
    const {id} = router.query

    const [user, setUser] = useState<any>(null)

    useEffect(()=> {
        async function getUser() {
            console.log(id)
            // @ts-ignore
            await userService.getUserByUserName(id.toString())
                .then((response: any) => {
                    console.log(response);
                    setUser(response.data);
                })
                .catch((e: any) => {
                    console.log(e);
                });
        }
        getUser()
    },[])

    return (
        <div>
            `this is {id} user page`
            {user !== null && (
                <div>{user.company}</div>
            )}
        </div>
    )
}

export default UserPage