import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { location, specialty, image } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const password = form.password.value;
        const bookings = {
            customerName: name,
            email,
            date,
            specialty: specialty,
            password,
            location,
            image

        }
        console.log(bookings);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (

        <div>
            <h2 className="text-center text-3xl font-bold">special treatment: {specialty}</h2>
            <form onSubmit={handleBookService} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="Date" name="date" placeholder="Date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" placeholder="password" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-success btn-block" type="submit" value="Booking Now" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default CheckOut;