import React from 'react'

export default function Header() {
    const headerStyle = {
      backgroundColor: "#678c89",
      color: "#fff",
      padding: "10px 15px",
      textAlign: "center"
    }
  return (
    <header style={headerStyle}>
      <h1 style={{fontSize: "25px", lineHeight: "1.447em", margin: "0px"}}>
        RimiWeb What to do?
      </h1>
    </header>
  )
}
