import React from 'react'

export default function SearchBar(props) {
    return (
        <div >
            <div className="card-header my-3" style={{width:"100%"}}>
                <form className="d-flex" onSubmit={props.handleSubmit}>
                    <input
                        className="form-control me-2"
                        placeholder="Search your city"
                        value={props.text}
                        onChange={props.handleOnChange}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}
