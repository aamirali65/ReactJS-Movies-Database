import axios from "axios";
import React, { useState } from "react";

const App = () => {

  const [movieData,setdata] = useState([]);



  const GetData = ()=>{
    const response = axios.get('')
    .then(
      setdata(Response.data),
      console.log(movieData)
    )
    .catch((err)=>{console.log(err)})
  }

  return (
    <div className="main w-full h-screen px-5 py-10">
      <div className="heading flex flex-col justify-center items-center gap-5 mb-5">
        <h1 className="text-white text-4xl uppercase">
          The Movie <strong>Library</strong> - Developed by Aamir Ali
        </h1>
        {/* <a
          href="https://github.com/aamirali65"
          className="text-white italic"
          target="_blank"
        >
          https://github.com/aamirali65
        </a> */}
      </div>
      <div className="flex gap-2 justify-center items-center search">
        <input
          type="text"
          placeholder="Search the Movie"
          className="w-full px-5 border text-white text-xl border-white outline-none py-3"
        />
        <button className="bg-red-700 text-white px-5 py-4 after:border-none">
          Search
        </button>
      </div>
      <div className="box-section mt-3 flex flex-wrap gap-5">
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
        <div className="card w-1/5 border border-1px">
          <img src="https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" className="w-[400px] object-cover" alt="" />
          <div className="context p-3 text-white text-center flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Movie Name</h1>
          <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore.</span>
          <button className="bg-yellow-400 w-full py-2">View</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
