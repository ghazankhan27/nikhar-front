import { BookAppointment } from "./subs/BookAppointment";
import { HomeContainer } from "./subs/HomeContainer";
import { ServiceCard } from "./subs/ServiceCard";
import { ServicesContainer } from "./subs/ServicesContainer";

export function HomeContent() {
  const services = [
    {
      name: "Makeup",
      image: "/images/makeup.jpg",
    },
    {
      name: "Hairstyling",
      image: "/images/hairstyling.jpg",
    },
    {
      name: "Facials",
      image: "/images/facial.jpg",
    },
  ];

  return (
    <HomeContainer>
      <ServicesContainer>
        {services.map((item, index) => (
          <ServiceCard key={index} object={item}></ServiceCard>
        ))}
      </ServicesContainer>
      <BookAppointment></BookAppointment>
    </HomeContainer>
  );
}
