import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        width:"100%",
        top:"70vh"

    }
    return (
        <footer className="bg-dark text-light py-2" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; Mytodoslist.com
            </p>
        </footer>
    )
}
