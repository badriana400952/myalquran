// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// // import Ayat from './ayat';
// const Home = (props) => {
//     const [surat, setSurat] = useState([])



//     const getApi = async () => {
//         const response = await axios.get("https://equran.id/api/v2/surat")
//         // console.log(">>>>>>>>>", response.data.data)
//         setSurat(response.data.data)
//     }
//     useEffect(() => {
//         getApi()
//     }, [])

//     const click = (id) => {
//         // console.log("ini klik", id )
//         props.history.push(`/${id}`)
//     }
     
//     return (
//         <Container>
//             <h1>Aplikasi Basis Website</h1>
//             <Row>
               
                
//             {surat.map((surat,index ) =>
//                 <Col xs={2} md={3} className="d-flex justify-content-center align-items-center mt-4 shadow">
//                 <Card border="success" style={{ width: '18rem' }} key={index} onClick={() => click(surat.nomor)}>
//                     <Card.Header>Surah {surat.namaLatin}</Card.Header>
//                     <Card.Body  >
//                         <Card.Title>{surat.nama}</Card.Title>
//                         <Card.Text>Jumlah Ayat : {surat.jumlahAyat} Nomor : {surat.nomor}</Card.Text>
//                         <Card.Text>Diturunkan : {surat.tempatTurun}</Card.Text>

//                     </Card.Body>
//                 </Card>
//                 </Col>

//             )}
//             </Row>
//             {/* <Ayat click="surat"/> */}

//         </Container>
//     )
// }

// export default Home