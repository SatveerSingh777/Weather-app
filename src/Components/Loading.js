import React from 'react'

export default function Loading() {
    return (
        <div className="spinner-border d-flex justify-content-center align-items-center my-2" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
