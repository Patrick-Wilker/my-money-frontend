import React from 'react'

export default function Footer(){
    const year = new Date().getFullYear()
    return (
        <footer className='main-footer'>
            <strong>
                Copyright &copy; {year}
                <a href="https://github.com/Patrick-Wilker" target='_blank'> Patrick</a>.
            </strong>
        </footer>
    )
}