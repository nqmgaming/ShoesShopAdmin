import React from 'react';

export const Dashboard: React.FC = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }
        }>
            <h1 style={
                {
                    fontSize: '3rem',
                    color: '#4D70EB',
                }
            }>Dashboard</h1>
            <img src="../logo.png" alt="logo" style={
                {
                    height: '100px',
                    width: '100px',
                }
            }/>
        </div>
    )
}

export default Dashboard
