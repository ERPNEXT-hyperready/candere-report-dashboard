import { Button } from "@/components/ui/button";
import authService from "../features/auth/authService";
import { useState } from "react";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

import DateRangePicker from "@/components/fromtodate/romtodate";
const Stockreport = () => {
  const getCurrentDate = () => new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const { report_name } = useParams();
  const decodedReportName = decodeURIComponent(report_name || "");
  console.log("Received ID in stock:", report_name);
  const [filters, setFilters] = useState({
    fromDate: getCurrentDate(),
    toDate: getCurrentDate(),
    // name: "",
  });
  console.log("filters", filters);



  // Handle download with filters
  const handleDownload = async () => {
    await authService.fetchAndDownloadReportNew(filters, decodedReportName);
  };
  return (
    <div className=" flex flex-col gap-2 h-full p-2 ">
      <div className="flex gap-2">
        <div
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500 pt-1"
          onClick={() => navigate("/reports")}
        >
          <CircleChevronLeft className="text-gray-700" size={24} />
        </div>
        <h1 className="text-2xl font-bold ">Stock Report</h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:grid md:grid-cols-1 md:gap-2 pt-2">
        <div className="flex flex-col gap-1">
          <DateRangePicker
            // className="flex items-center gap-1"
            fromLabel="Start Date"
            toLabel="End Date"
            fromValue={filters.fromDate}
            toValue={filters.toDate}
            onFromChange={(date) => setFilters({ ...filters, fromDate: date })}
            onToChange={(date) => setFilters({ ...filters, toDate: date })}
            required={true}
            disableFutureDates={true}
          />
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

export default Stockreport;
