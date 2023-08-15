function Homepage({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-[124px] md:inset-y-0 bg-[#FF9933] z-[80]">
        Hello sidebar!
      </div>
      <main className="md:pl-[124px]">
        {children}
      </main>
    </div>
  );
}

export default Homepage;
