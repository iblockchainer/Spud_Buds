import React from "react";
import Timer from "../timer";
const Index = () => {
  return (
    <header className="bg-primary">
      <div className="container p-4">
        <div className=" w-full max-w-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
          <h1 className="text-md sm:text-xl mb-2 ">Mint Day</h1>
          <Timer />
          {/* <p className=" text-xl sm:text-2xl">30 Sepetember 2021</p> */}
        </div>
      </div>
    </header>
  );
};

export default Index;
