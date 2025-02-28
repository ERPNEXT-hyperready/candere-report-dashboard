import React, { useState } from 'react';
import authService from "../features/auth/authService";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';

function SalesRegisterReport() {
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
        <div className="flex flex-col gap-2 h-full">
            <div className="text-xl font-bold">
                <h1>Sales Register Report</h1>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-1 md:gap-2 pt-2">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="fromDate" className="text-slate-600">From Date</Label>
                        <Input 
                            type="date" 
                            name="fromDate" 
                            value={filters.fromDate} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="toDate" className="text-slate-600">To Date</Label>
                        <Input 
                            type="date" 
                            name="toDate" 
                            value={filters.toDate} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="warehouse" className="text-slate-600">Warehouse</Label>
                        <Input 
                            type="text" 
                            name="warehouse" 
                            placeholder="Warehouse" 
                            value={filters.name} 
                            onChange={handleInputChange} 
                        />
                    </div>
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
