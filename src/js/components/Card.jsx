
export const Card = (props) => {
console.log(props);

    return (

        <div className="col-sm-6 col-md-4">
            <div className="card h-100 p-2">
                <img src={props.juego.imagen} className="card-img-top" alt="Card 1" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">
                        {props.juego.descripcion}
                    </p>
                    <a href={props.juego.link} className="btn btn-primary">Link a su web</a>
                </div>
            </div>
        </div>


    )

}
