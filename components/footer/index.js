import { FooterContainer } from "./subs/FooterContainer";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <p className="font-bold mb-2">Contact</p>
        <p>Phone: 03331111222</p>
        <p>Email: john.doe@gmail.com</p>
      </div>
      <div>
        <p className="font-bold mb-2">Services</p>
        <p>Makeup</p>
        <p>Hairstyling</p>
        <p>Facial</p>
      </div>
      <div>
        <p className="font-bold mb-2">Address</p>
        <p>Someplace, somestreet, somephase, somecity, Pakistan</p>
      </div>
    </FooterContainer>
  );
}
