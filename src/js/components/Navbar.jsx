

//Navbar
export const Navbar = () => {

    //Componente
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <h1 className="navbar-brand" href="#">La caverna de Alcides</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </div>
            </div>
        </div>
    </nav>
    );
};
export default Navbar;
