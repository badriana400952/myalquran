import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./App.css"
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
// import Carousel from 'react-bootstrap/Carousel';


const Hero = () => {
  // console.log("ini hero ", surat)

  const [search, setSearch] = useState("")
  const [surat, setSurat] = useState([])

  const getApi = async () => {
    await axios.get("https://equran.id/api/v2/surat")
      .then(res => {
        // console.log(">>>>>>>>>", res.data.data)
        setSurat(res.data.data)

      })
  }
  useEffect(() => {
    getApi()
  }, [])

  // console.log("ini surat search", search)
  return (
    <div className="bg_conten">
      <Container>

        <Row className=" mt-5 pt-5 search_tengah  ">
          <Col xs={6} md={6} >
            <InputGroup className="mb-3">
              <Form.Control aria-label="Default" type="text" className="from_input shadow" placeholder="Search The Surah..." onChange={(e) => setSearch(e.target.value)} />
            </InputGroup>
          </Col>
        </Row>
        <Row >
          {/* {
          surat.filter((surat) =>
            surat.namaLatin.toLowerCase().includes(search)).map((shurat) =>
              <Col xs={6} md={3} className="d-flex justify-content-center align-items-center mt-4 shadow  py-3 " >
                <Card border="success "  style={{ width: '18rem' }}>
                  <Card.Body key={shurat.toString()}  >
                    <Card.Header className='judul_surat'>Surah {shurat.namaLatin}</Card.Header>
                    <Card.Title className="googlefont mt-3 text-success">{shurat.nama}</Card.Title>
                    <Card.Text className="googlefont2">Jumlah Ayat : {shurat.jumlahAyat} </Card.Text>
                    <Card.Text className="googlefont2">Diturunkan : {shurat.tempatTurun}</Card.Text>
                    <Link to={`/${shurat.nomor}`} className="text-decoration-none text-success">Baca Surat</Link>
                  </Card.Body>
                </Card>
              </Col>
            )} */}

          <Table striped bordered hover size="sm">
            <thead >
              <tr>
                <th className='text-center px-2'>Nomor Surat</th>
                <th className='text-center'>Jumlah Surat</th>
                <th className='text-center'>Diturunkan</th>
                <th className='text-center'>Nama Surat</th>
                <th className='text-center'>Details</th>
                <th className='text-center'>Nama Surat</th>

              </tr>
            </thead>
            <tbody >
              {surat.filter((surat) =>
                surat.namaLatin.toLowerCase().includes(search)).map((shurat) =>
                  <tr key={shurat.nomor} >
                    <td className='text-center py-3 px-2'>{shurat.nomor}</td>
                    <td className="googlefont2 text-center py-3">{shurat.jumlahAyat}</td>
                    <td className="googlefont2 text-center py-3">{shurat.tempatTurun}</td>
                    <td className='judul_surat text-center py-3'>{shurat.namaLatin}</td>
                    <td className='text-center py-3'> <Link to={`/${shurat.nomor}`} className="text-decoration-none text-success ">Baca Surat</Link></td>
                    <td className="googlefont mt-3 text-success text-center py-3">{shurat.nama}</td>
                  </tr>
                )}
            </tbody>
          </Table>
          
        </Row>

      </Container>
    </div>
  )
}

export default Hero
