const Navbar = ({ setcategory }) => {
    return (
        <>
            <nav className="navbar  d-flex justify-content-between navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid ">
                    <i className="navbar-brand"><span className="text-light fs-3">GLOBAL<br /><small>Brief</small></span></i>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-10 fs-5 gap-3 ml-5">

                            <li className="nav-item">
                                <div className="nav-link" onClick={()=>setcategory("Technology")} style={{cursor: "pointer"}}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={()=>setcategory("Business")} style={{cursor: "pointer"}}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={()=>setcategory("Health")} style={{cursor: "pointer"}}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={()=>setcategory("Sports")} style={{cursor: "pointer"}}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={()=>setcategory("Entertainment")} style={{cursor: "pointer"}}>Entertainment</div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
