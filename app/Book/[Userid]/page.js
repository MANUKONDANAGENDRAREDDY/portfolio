import React from 'react';

function page(props) {
    console.log(props.params)
    return (
        <div>
            random
            <div>
            userid:{props.params.userid}
            </div>
        </div>
    );
}

export default page;