export function ServicesContainer({ children }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {children}
    </div>
  );
}
