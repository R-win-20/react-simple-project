const Notfound = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-bold">Oops, 404</h1>
        <p className="text-lg font-light">
          The page you are looking for is not found
        </p>
        <a
          href="/"
          className="bg-[#b7e3fa] px-4 py-2 w-fit rounded-md text-black"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Notfound;
