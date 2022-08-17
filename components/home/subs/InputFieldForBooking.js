export function InputFieldForBooking({ label, type, placeholder }) {
  return (
    <div className="flex flex-col">
      <p className="text-md md:text-lg">{label}</p>
      <input
        placeholder={placeholder}
        className="border-black border rounded px-2 py-1 w-56"
        type={type}
      ></input>
    </div>
  );
}
