import { PrimaryButton } from "../../PrimaryButton";
import { InputFieldForBooking } from "./InputFieldForBooking";
import { SelectField } from "./SelectField";

export function BookAppointment({ children }) {
  const options = [
    {
      key: "Makeup",
      value: "makeup",
    },
    {
      key: "Facial",
      value: "facial",
    },
    {
      key: "Hairstyling",
      value: "hairstyling",
    },
  ];

  return (
    <div className="flex justify-center my-24">
      <div className="flex flex-col items-center">
        <p className="text-xl md:text-3xl my-10">Book an appointment now!</p>
        <div className="flex flex-col space-y-4 md:space-x-8 md:flex-row">
          <InputFieldForBooking
            type="text"
            label="Your Name"
            placeholder="John Doe"
          ></InputFieldForBooking>
          <InputFieldForBooking
            type="date"
            label="Select Date"
          ></InputFieldForBooking>
          <SelectField options={options}></SelectField>
        </div>
        <PrimaryButton label="Book"></PrimaryButton>
        {children}
      </div>
    </div>
  );
}
