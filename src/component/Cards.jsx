import { Link } from "react-router-dom"

function Cards({ id, image, name, desc, price, mrp, discount }) {
    return (
        <>
            {/* <div className="col-4"> */}
            <div class="card text-center mb-2">
                <img src={image} class="card-img-top p-4" alt="..." />
                <div class="card-body p-0">
                    <h5 class="card-title">{name}</h5>
                    <a href="#" class="card-text">{desc}</a>
                    <div className="card-price my-2  d-flex justify-content-between align-items-center">
                        <div className="about-price">
                            <i class="fa-solid fa-indian-rupee-sign"></i> <span>{price}</span></div>
                        <div className="about-mrp">
                            M.R.P: <del>{mrp}</del></div>
                        <div className="about-discunt">
                            {discount}
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Cards