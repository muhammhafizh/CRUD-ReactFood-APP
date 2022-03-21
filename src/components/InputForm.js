import { Form, Button, FloatingLabel } from 'react-bootstrap';

const InputForm = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
  return (
    <Form onSubmit={handleSubmit}>
    <h3>{id ? "Edit Data" : "Tambah Data"}</h3>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Masukan Makanan" name="nama" defaultValue={nama} onChange={(event) => handleChange(event)}/>
    </Form.Group>

    <FloatingLabel controlId="floatingTextarea" label="Deskripsi Makanan" className="mb-3">
        <Form.Control as="textarea" name="deskripsi" defaultValue={deskripsi} onChange={(event) => handleChange(event)} />
    </FloatingLabel>

    <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Control type="number" placeholder="Masukan Harga Makanan" name="harga" defaultValue={harga} onChange={(event) => handleChange(event)} />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  )
}

export default InputForm