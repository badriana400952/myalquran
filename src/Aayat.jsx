import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Aayat = () => {
  const { id } = useParams()
  //  console.log(nomorAyat)
  const [kumpulansurat, setKumpulansurat] = useState([])



  const getApidua = async () => {
    await axios.get(`https://equran.id/api/v2/surat/${id}`)
      .then(res => {
        // console.log("ini data ayat", res.data.data.audioFull)
        setKumpulansurat(res.data.data.ayat)

      })
  }
  useEffect(() => {
    getApidua()
  })


  return (
    <div className="mt-5 pt-5">
      <Container className="py-5">
        {kumpulansurat && kumpulansurat.map((data) => (
          <div key={data.nomorAyat} className=" font0">
            <p><span className='font '> {data.teksArab}</span> <span className='font2'>({data.nomorAyat})</span> </p>
            <p className="arti">Artinya : {data.teksIndonesia} </p>
            <hr />
          </div>

        )
        )}

      </Container>
    </div>
  )
}

export default Aayat


