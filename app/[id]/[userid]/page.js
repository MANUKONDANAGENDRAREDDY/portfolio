 

'use client'
import * as React from 'react'
 
export default function Page({ params }) {
  // asynchronous access of `params.id`.
  const { id } = React.use(params)
  return <p>ID: {id}</p>
}


//  export default function page(props){
//     console.log(props.params)           
//     return(         
//         <div>
//             random
//             {/* {props.params.userid} */}
//             {/* <div>
//                 id:{props.params.id}
//                 userid:{props.params.userid} */}
            
//             {/* </div> */}
//         </div>
//     )
//  }