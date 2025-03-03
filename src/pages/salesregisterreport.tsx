import React, { useState } from 'react';
import authService from "../features/auth/authService";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { CircleChevronLeft } from 'lucide-react';

function SalesRegisterReport() {
      const navigate = useNavigate()
    const { report_name } = useParams(); // Extracting the id from the URL
    const decodedReportName = decodeURIComponent(report_name || "");
    console.log("Received ID:", report_name);
    // State for filters
    const [filters, setFilters] = useState({
        fromDate: "",
        toDate: "",
        name: "",
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    // Handle download with filters
    const handleDownload = async () => {
        await authService.fetchAndDownloadReportNew(filters,decodedReportName);
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
          <h1 className="text-2xl font-bold ">Stock Report</h1>
        </div>
                <h1>Sales Register Report</h1>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-1 md:gap-2 pt-2">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="fromDate" className="text-slate-600 ">From Date</Label>
                        <Input 
                            type="date" 
                            name="fromDate" 
                            className="border border-black focus:border-black focus:ring-0"
                            value={filters.fromDate} 
                            onChange={handleInputChange} 
                            max={new Date().toISOString().split("T")[0]} // Restrict to today or earlier
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="toDate" className="text-slate-600 ">To Date</Label>
                        <Input 
                            type="date" 
                            name="toDate" 
                            className="border border-black focus:border-black focus:ring-0"
                            value={filters.toDate} 
                            onChange={handleInputChange} 
                            max={new Date().toISOString().split("T")[0]} // Restrict to today or earlier
                        />
                    </div>
                    {/* <div className="flex flex-col gap-1">
                        <Label htmlFor="warehouse" className="text-slate-600 ">Ware House</Label>
                        <Input 
                            type="text" 
                            name="warehouse" 
                            placeholder="Warehouse" 
                            value={filters.name} 
                            onChange={handleInputChange} 
                        />
                    </div> */}
                    {/* <div className="flex flex-col gap-1">
                        <Label htmlFor="barcode" className="text-slate-600">Bar Code</Label>
                        <Input 
                            type="text" 
                            name="barcode" 
                            placeholder="Barcode" 
                            value={filters.barcode} 
                            onChange={handleInputChange} 
                        />
                    </div> */}
                </div>
            </div>
            <div className='flex gap-2'>
                <Button onClick={handleDownload} className='bg-emerald-400'>
                    <BsFillFileEarmarkExcelFill /> Download Excel
                </Button>
            </div>
        </div>
    );
}

export default SalesRegisterReport;
