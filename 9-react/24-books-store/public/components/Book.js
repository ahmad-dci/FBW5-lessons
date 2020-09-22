import React from 'react' 
import {useParams} from 'react-router-dom'

const Book = () => {
    const params = useParams()
    console.log(params);
    return(
        <div>Book</div>
    )
}

export default Book