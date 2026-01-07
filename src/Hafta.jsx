import React from 'react'
import {useParams} from "react-router-dom";

const Hafta = () => {
    const {haftaID} = useParams();
    const {haftaDate} = useParams();
  return (
    <div>
        <h1>Salom bu foylanuvchi ID si: {haftaID}</h1>
        <h3>Bu kun : {haftaDate}</h3>
    </div>
  )
}

export default Hafta;