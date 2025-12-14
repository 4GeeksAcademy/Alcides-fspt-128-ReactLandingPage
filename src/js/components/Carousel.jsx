

export const Carousel = (props) => {

    //Componente
    return (
        <>
                    
                        <div className="carousel-item active">
                            <img
                                src={props.slides.imagenes}
                                className="d-block w-100"
                                style={{
                                    height: "420px",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                                alt={props.imagenes.nombre}
                            />
                        </div>
                    

                    
                
            
        </>

    );
};
export default Carousel;