export function FooterContainer({ children }) {
  return (
    <div className="bg-primary text-white grid grid-cols-1 md:grid-cols-3 py-10 px-20 space-y-6 md:space-y-0 text-sm">
      {children}
    </div>
  );
}
