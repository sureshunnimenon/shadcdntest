const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="dark:bg-[#111827] bg-sky-50 overflow-auto"> 
  <div className="w-full mx-auto max-w-screen-xl ">
    {children}
  </div>
  </main>;
};

export default LandingLayout;
