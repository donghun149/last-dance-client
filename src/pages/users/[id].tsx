import {useRouter} from "next/router";
import React from "react";

const UserPage = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            `this is {id} user page`
        </div>
    )
}

export default UserPage