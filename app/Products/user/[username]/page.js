"use client"

const page = ({params}) => {

    console.log("getting dynamic value", params)
    return (
        <div>
            <h1>Username is {params.username}</h1>
        </div>
    );
}

export default page;