import Menu from "@/comp/menu";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [page, setPage] = useState("companies");
  const [title, setTitle] = useState("All companies");
  const [companySearch, setCompanySearch] = useState("");
  const [company, setCompany] = useState("Addidas");
  const [companies, setCompanies] = useState(["Addidas","H&M","Nike","Puma","Reebok","Louis Vuitton","Hermes","Burberry","Givenchy","Alexander McQueen","Stella McCartney","Vivienne Westwood","Moschino","Jimmy Choo","Michael Kors","Tory Burch"]);
  const [sdgs, setSdgs] = useState([
    "SDG1: No Poverty",
    "SDG2: Zero Hunger",
    "SDG3: Good Health and Well-being",
    "SDG4: Quality Education",
    "SDG5: Gender Equality",
    "SDG6: Clean Water and Sanitation",
    "SDG7: Affordable and Clean Energy",
    "SDG8: Decent Work and Economic Growth",
    "SDG9: Industry, Innovation, and Infrastructure",
    "SDG10: Reduced Inequality",
    "SDG11: Sustainable Cities and Communities",
    "SDG12: Responsible Consumption and Production",
    "SDG13: Climate Action",
    "SDG14: Life Below Water",
    "SDG15: Life on Land",
    "SDG16: Peace, Justice, and Strong Institutions",
    "SDG17: Partnerships for the Goals"
  ]);

  const handlePageChange = (page) => {
    setPage(page);
    if (page === "companies") setTitle("All companies");
    if (page === "sdg") setTitle("Sustainable Development Goals");
    if (page === "metrics") setTitle("Metrics");
  };
  const handleCompanySearch = (e) => {
    setCompanySearch(e.target.value);
  }

  return (
    <main className={`flex items-center h-screen  text-black bg-white ${inter.className}`} >
      <div className="h-[100%] w-[100%] mx-auto flex p-2 rounded-md bg-[#F3F3FA]">

        <div className="w-[200px] relative">
          <div className=" h-[95%] absolute bottom-0 rounded-md w-[190px]">
            <Menu label={"companies"} active={page === "companies"} action={handlePageChange} />
            <Menu label={"sdg"} active={page === "sdg"} action={handlePageChange} />
            <Menu label={"metrics"} active={page === "metrics"} action={handlePageChange} />
          </div>
        </div>

        <div className="flex-1 rounded-md relative">
          <div className="bg-white w-full h-[95%] absolute bottom-0 rounded-md flex flex-col">
            <div className="h-[100px] flex items-center"><span className="ml-10 text-3xl">{title}</span></div>
            <div className=" flex-1 flex py-5">

              <div className=" w-[200px] flex flex-col">
                <span className="ml-2 h-8 -mb-2 w-full rounded text-sm italic text-gray-600/70">
                  Search
                </span>
                <div className="border mx-1 px-2 h-8 rounded overflow-auto">
                  <input value={companySearch} onChange={handleCompanySearch} placeholder="company name" className="text-sm outline-none w-full h-full"/>
                </div>
                <div className=" flex-1 mt-2 mx-1">
                {
                  companies.map((company, i) => {
                    if (company.toLowerCase().includes(companySearch.toLowerCase())) {
                      return(
                        <div key={i} className="border flex items-center py-[6px] my-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-1 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                          </svg>
                          <span className="text-sm truncate text-gray-600"> {company}</span>
                        </div>
                      )
                    }
                  })
                }
                </div>
              </div>

              <div className="border-l ml-2 flex-1 flex flex-col px-2">
                <div className="h-[200px] w-full flex items-center ml-2">
                  <div className="h-[150px] w-[150px] border rounded-full flex items-center justify-center text-4xl text-gray-500 bg-gray-500/10">{company.slice(0, 2)}</div>
                  <div className="h-[70%] ml-5 text-4xl text-gray-500 flex items-center justify-center">{company}</div>
                  <div className="ml-[300px]">
                    <div className="py-1 flex items-center  text-xl text-gray-500 px-5">WikirateID: xxxx</div>
                    <div className="py-1 flex items-center  text-xl text-gray-500  px-5">HQ: xxxx </div>
                    <div className="py-1 flex items-center  text-xl text-gray-500  px-5">Website:xxxxx</div>
                  </div>
                </div>
                <div className="flex-1 w-full border rounded-md p-5 flex gap-4 relative">
                  <div className="w-[220px] h-[220px] border bg-white rounded-md overflow-auto hover:scale-[110%] duration-300">
                    <div className="text-gray-700 font-semibold text-2xl mt-4 m-4">Answers</div>
                    <div className="text-gray-900 text-sm m-4">answer from this company and it represents all information. The data are pulled from many sources</div>
                    <div className="text-blue-700 text-3xl font-semibold m-4">#423</div>
                  </div>

                  <div className="w-[220px] h-[220px] border bg-white rounded-md overflow-auto hover:scale-[110%] duration-300">
                    <div className="text-gray-700 font-semibold text-2xl mt-4 m-4">Sources</div>
                    <div className="text-gray-900 text-sm m-4">answer from this company and it represents all information. The data are pulled from many sources</div>
                    <div className="text-blue-700 text-3xl font-semibold m-4">#8723</div>
                  </div>

                  <div className="w-[220px] h-[220px] border bg-white rounded-md overflow-auto hover:scale-[110%] duration-300">
                    <div className="text-gray-700 font-semibold text-2xl mt-4 m-4">Groups</div>
                    <div className="text-gray-900 text-sm m-4">answer from this company and it represents all information. The data are pulled from many sources</div>
                    <div className="text-blue-700 text-3xl font-semibold m-4">#13</div>
                  </div>

                  <div className="w-[220px] h-[220px] border bg-white rounded-md overflow-auto hover:scale-[110%] duration-300">
                    <div className="text-gray-700 font-semibold text-2xl mt-4 m-4">Data Sets</div>
                    <div className="text-gray-900 text-sm m-4">answer from this company and it represents all information. The data are pulled from many sources</div>
                    <div className="text-blue-700 text-3xl font-semibold m-4">#13</div>
                  </div>

                  <div className="w-[220px] h-[100px] border bg-white rounded-md overflow-auto hover:scale-[110%] duration-300 absolute bottom-10">
                    <div className="text-gray-700 font-semibold text-2xl mt-4 m-4">Data Sets</div>
                    <div className="text-gray-900 text-sm m-4">answer from this company and it represents all information. The data are pulled from many sources</div>
                    <div className="text-blue-700 text-3xl font-semibold m-4">#13</div>
                  </div>
                </div>
                  
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
