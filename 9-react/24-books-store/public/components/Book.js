import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {getBookPost} from '../services/api'

const Book = () => {
  const params = useParams()
  //console.log(params);

  useEffect(() => {
    getBookPost(params.id).then(data => {
      console.log(data);
    })
  }, [])

  return (
    <div>Book</div>
  )
}

export default Book