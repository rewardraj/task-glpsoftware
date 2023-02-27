import React from 'react'

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f6f5f5',
        }}>
            <h1>
                Welcome!
            </h1>
            <p style={{fontSize: '18px', padding:'var(--default) 0'}}>kindly Navigate through this project using the nav menu!</p>
        </div>

    )
}

export default Home
