// import { Button } from "@/components/ui/button";
// import authService from "../features/auth/authService";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
// import { useNavigate, useParams } from "react-router-dom";
// import { CircleChevronLeft } from "lucide-react";

// const Stockinward = () => {
//    const navigate = useNavigate();
//    const { report_name } = useParams(); // Extracting the id from the URL
//     const decodedReportName = decodeURIComponent(report_name || "");
//     console.log("Received ID:", report_name);
//   const [filters, setFilters] = useState({
//     fromDate: "",
//     toDate: "",
//     name: "",

// });

// // Handle input change
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
// };

// // Handle download with filters
// const handleDownload = async () => {
//   await authService.fetchAndDownloadReportNew(filters,decodedReportName);
// };

// return (
//     <div className="flex flex-col gap-2 h-full p-2 gradient">
//         <div className="text-xl font-bold">
//         <div className="flex gap-2">
//           <div
//             className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
//             onClick={() => navigate("/reports")}
//           >
//             <CircleChevronLeft className="text-gray-700" size={24} />
//           </div>
//           <h1 className="text-2xl font-bold ">Stock Report</h1>
//         </div>
//             <h1>Sales Inward Report</h1>
//             <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-1 md:gap-2 pt-2">
//                 <div className="flex flex-col gap-1">
//                     <Label htmlFor="fromDate" className="text-slate-600 ">From Date</Label>
//                     <Input 
//                         type="date" 
//                         name="fromDate" 
//                         value={filters.fromDate} 
//                         className="border border-black focus:border-black focus:ring-0"
//                         onChange={handleInputChange} 
//                     />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <Label htmlFor="toDate" className="text-slate-600 ">To Date</Label>
//                     <Input 
//                         type="date" 
//                         className="border border-black focus:border-black focus:ring-0"
//                         name="toDate" 
//                         value={filters.toDate} 
//                         onChange={handleInputChange} 
//                         max={new Date().toISOString().split("T")[0]} // Restrict to today or earlier
//                     />
//                 </div>
//                 {/* <div className="flex flex-col gap-1">
//                     <Label htmlFor="warehouse" className="text-slate-600 ">Ware House</Label>
//                     <Input 
//                         type="text" 
//                         name="warehouse" 
//                         placeholder="Warehouse" 
//                         value={filters.name} 
//                         onChange={handleInputChange} 
//                         max={new Date().toISOString().split("T")[0]} // Restrict to today or earlier
//                     />
//                 </div> */}
//                 {/* <div className="flex flex-col gap-1">
//                     <Label htmlFor="barcode" className="text-slate-600">Bar Code</Label>
//                     <Input 
//                         type="text" 
//                         name="barcode" 
//                         placeholder="Barcode" 
//                         value={filters.barcode} 
//                         onChange={handleInputChange} 
//                     />
//                 </div> */}
//             </div>
//         </div>
//         <div className='flex gap-2'>
//             <Button onClick={handleDownload} className='bg-emerald-400'>
//                 <BsFillFileEarmarkExcelFill /> Download Excel
//             </Button>
//         </div>
//     </div>
// )

// }

// export default Stockinward


import { Button } from "@/components/ui/button";
import authService from "../features/auth/authService";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

const Stockinward = () => {
  const navigate = useNavigate();
  const { report_name } = useParams();
  const decodedReportName = decodeURIComponent(report_name || "");
  
  // State with date format dd/mm/yyyy
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    name: "",
  });

  // Convert dd/mm/yyyy to yyyy-mm-dd for the input field
  const formatDateForInput = (date: string) => {
    if (!date) return "";
    const parts = date.split("/");
    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : date;
  };

  // Convert yyyy-mm-dd to dd/mm/yyyy for storing in state
  const formatDateForState = (date: string) => {
    if (!date) return "";
    const parts = date.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : date;
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: formatDateForState(value), // Store in dd/mm/yyyy format
    }));
  };

  // Handle download with filters
  const handleDownload = async () => {
    await authService.fetchAndDownloadReportNew(filters, decodedReportName);
  };

  return (
    <div className="flex flex-col gap-2 h-full p-2 gradient">
      <div className="text-xl font-bold">
        <div className="flex gap-2">
          <div
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
            onClick={() => navigate("/reports")}
          >
            <CircleChevronLeft className="text-gray-700" size={24} />
          </div>
          <h1 className="text-2xl font-bold">Stock Report</h1>
        </div>
        <h1>Sales Inward Report</h1>
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-1 md:gap-2 pt-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="fromDate" className="text-slate-600">
              From Date
            </Label>
            <Input
              type="date"
              name="fromDate"
              value={formatDateForInput(filters.fromDate)}
              className="border border-black focus:border-black focus:ring-0"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="toDate" className="text-slate-600">
              To Date
            </Label>
            <Input
              type="date"
              className="border border-black focus:border-black focus:ring-0"
              name="toDate"
              value={formatDateForInput(filters.toDate)}
              onChange={handleInputChange}
              max={new Date().toISOString().split("T")[0]} // Restrict to today or earlier
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleDownload} className="bg-emerald-400">
          <BsFillFileEarmarkExcelFill /> Download Excel
        </Button>
      </div>
    </div>
  );
};

export default Stockinward;
