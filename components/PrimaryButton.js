export function PrimaryButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="my-8 text-md md:text-lg px-4 py-1 border border-black rounded bg-secondary text-black transition hover:bg-primary hover:text-white"
    >
      {label}
    </button>
  );
}
