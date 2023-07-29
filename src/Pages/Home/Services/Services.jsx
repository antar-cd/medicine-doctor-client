import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-green-800">Services</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          molestiae architecto commodi unde, <br /> aperiam neque labore omnis
          fugit ab id praesentium expedita officiis ullam dolor, consequatur
          excepturi vel consectetur nostrum!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
