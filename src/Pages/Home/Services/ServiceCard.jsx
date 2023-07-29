import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { _id,specialty, name, image } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-12">

            <img src={image} className="rounded-xl" />

            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{specialty}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;