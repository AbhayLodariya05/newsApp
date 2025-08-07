import React from 'react'

const NewsItems = ({ title, description, src, url }) => {
    return (
        <>
            <div className="d-inline" style={{borderRadius: "20px" }}>
                <div className="d-inline-block bg-dark text-light  mb-3 my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px', margin: '10px', borderRadius: "20px" }}>
                    <img src={src} className="card-img-top" style={{ height: "200px", width: "327px", borderRadius: "20px 20px 0 0" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 50)}</h5>
                        <p className="card-text">{description ? description.slice(0, 90) : "No description available"}</p>
                        <a href={url} className="btn btn-primary my-3">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewsItems
