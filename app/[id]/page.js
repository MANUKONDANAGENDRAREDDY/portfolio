 
export default function Page({ params }) {
    // direct access of `params.id`.
    return <p>ID: {params.id}</p>
  }


//  export default function page(props){
//     return(
//         <div>
//             random
//             {props.params.id}
//         </div>
//     )
//  }