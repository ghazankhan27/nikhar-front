export function SelectField({ options }) {
  return (
    <div className="flex flex-col">
      <p className="text-md md:text-lg">For</p>
      <select className="px-2 py-1 w-56 rounded bg-white border border-black">
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.key}
          </option>
        ))}
      </select>
    </div>
  );
}
