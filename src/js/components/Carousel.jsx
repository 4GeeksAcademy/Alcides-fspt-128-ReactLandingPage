
import wukonng from "../../img/Jumbo/black-desert-wukong-1920x1080-1.jpg"
import image2 from "../../img/Jumbo/Foto 1 Jumbo.jpg"
import image3 from "../..//img/Jumbo/Foto Jumbo2.jpg"
export const Carousel = () => {

    //Componente
    return (
        <>
            <div className="container-fluid px-0">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={wukonng}
                                className="d-block w-100"
                                style={{
                                    height: "420px",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    backgroundColor: "#050505b4"
                                }}
                                alt="Wukong"
                            />
                        </div>

                        <div className="carousel-item">
                            <img
                                src={image2}
                                className="d-block w-100"
                                style={{
                                    height: "420px",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    backgroundColor: "#050505b4"
                                }}
                                alt="Segundo"
                            />
                        </div>

                        <div className="carousel-item">
                            <img
                                src={image3}
                                className="d-block w-100"
                                style={{
                                    height: "420px",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    backgroundColor: "#050505b4"
                                }}
                                alt="Tercero"
                            />
                        </div>
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>

    );
};
export default Carousel;