import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Style.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Tafsir = () => {
  const [tafsir, setTafsir] = useState([])

  const respons = async () => {
    await axios("https://api.hadith.gading.dev/books/bukhari?range=300-500")
      .then(res => {
        console.log(res.data.data.hadiths)
        setTafsir(res.data.data.hadiths)
      })
  }

  useEffect(() => {
    respons()
  }, [])
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carou"
            src={"bg.webp"}
            alt="First"
          />
          <Carousel.Caption>
          <h2 className="text-center my-5 juidul_bukhari">Hadis Al-Bukhari</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-5">
      {tafsir && tafsir.map((hadist) =>
        <Card className="mt-4 p-4 shadow" key={hadist.number}>
              <blockquote className="blockquote mb-0">
                <p>Nomor Hadist {hadist.number} </p>
                <p className='font'>{hadist.arab}</p>
                <footer className="blockquote-footer">
                  <p>{hadist.id}</p>
                </footer>
              </blockquote>
        </Card>
          )}

      </Container>
    </>
  )
}

export default Tafsir