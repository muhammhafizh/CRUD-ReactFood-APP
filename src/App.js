import React, { Component } from 'react'
import InputForm from './components/InputForm'
import TableList from './components/TableList'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      makanans : [],
      nama : "",
      deskripsi : "",
      harga: 0,
      id: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    } else {
      const makananSelainPilihan = this.state.makanans
      .filter((makanan) => makanan.id !== this.state.id)
      .map((filterMakanan) => {
        return filterMakanan
      })

      this.setState({
        makanans: [
          ...makananSelainPilihan,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    }
    

    this.setState({
      nama : "",
      deskripsi : "",
      harga: 0,
      id: ""
    })
  }

  editData = (id) => {
    const makananPilihan = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan
      })

      this.setState({
        nama : makananPilihan[0].nama,
        deskripsi : makananPilihan[0].deskripsi,
        harga: makananPilihan[0].harga,
        id: makananPilihan[0].id
      })
  }

  hapusData = (id) => {
    const makananBaru = this.state.makanans
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan
    })

    this.setState({
      makanans: makananBaru
    })
  }

  render() {
    console.log(this.state.makanans);
    return (
      <>
        <div className='container mt-3'>
          <TableList makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
          <InputForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
      </>
    )
  }
}

