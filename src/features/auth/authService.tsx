import axios from "axios";
import qs from "qs"; // Import qs for encoding
import { toast } from "sonner";
import * as XLSX from "xlsx";

const API_URL = "http://127.0.0.1:8000";

const login = async (userData: any) => {
  try {
    // const formData = new FormData();
    const encodedData = qs.stringify({
      cmd: "login",
      usr: userData.email,
      pwd: userData.password,
    });

    const response = await axios.post(`${API_URL}/login`, encodedData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Net Sales Report function
const getNetSalesReport = async (filters: {
  fromDate: string;
  toDate: string;
  warehouse: string;
  barcode: string;
}) => {
  try {
    // Retrieve the stored user token (if required)

    const payload = {
      report_name: "Net Sales Report",
      report_type: "csv",
      limit: "0",
      page: "1",
      from_date: filters.fromDate, // Pass filters
      to_date: filters.toDate,
      warehouse: filters.warehouse,
      barcode: filters.barcode,
    };

    const response = await axios.post(
      `${API_URL}/api/method/netSalesReport`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
        },
      }
    );

    console.log(response.data, "//////////////////////////////////////");
    return response.data;
  } catch (error) {
    throw error;
  }
};



const getReportData = async (filters:any,report_name:any) => {
  console.log(report_name,"nnnnnnnnnnnnnnnnnnnnnnnnnnn");
  
  try {
    const payload = {
      report_name: report_name,
      report_type: "json",
      limit:1000,
      offset:1,
      filters: [
        {
          from_date: filters.fromDate,
          to_date: filters.toDate,
          // name: filters.name,
        },
      ],
    };

    const response = await axios.post(`${API_URL}/api/method/getreport`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data, "Received Report Data");
    return response.data;
  } catch (error) {
    console.error("Error fetching report:", error);
    toast.error("Failed to fetch report data.");
    return null;
  }
};


export const fetchAndDownloadReportNew = async (filters:any, report_name:any) => {
  console.log(report_name,"rrrrrrrrrrrrrrrrrrrrrr");
  
  try {
    const reportData = await getReportData(filters,report_name);
    console.log(reportData,"vvvvvvvvvvvvvvvvvvvvvvvv");
    
    const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];

    if (!dataArray.length) {
      console.error("No data found for the report:", reportData);
      toast.error("No data available to download!");
      return;
    }

    handleDownloadExcel(dataArray, `${report_name}-Report`);
  } catch (error) {
    console.error("Error downloading report:", error);
  }
};




//Price Config api functions

export const price_config = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/method/priceConfig`);

    console.log(response.data, "Received Price Config Report Data");
    return response.data;
  } catch (error) {
    console.error("Error fetching price config report:", error);
    toast.error("Failed to fetch price config report data.");
    return null;
  }
}


















const getGstSalesReturnReport = async (filters: {
  fromDate: string;
  toDate: string;
  name: string;
},report_name:any) => {
  try {
    // Retrieve the stored user token (if required)

    const payload = {
      report_name: report_name,
      report_type: "json",
      filters: [
        {
          from_date: filters.fromDate, // Pass filters
          to_date: filters.toDate,
          name: filters.name,
        },
      ],
    };

    const response = await axios.post(
      `${API_URL}/api/method/gst_sales_return_report`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Length":"<calculated when request is sent>",
          "Host": "<calculated when request is sent>",
          "User-Agent":"PostmanRuntime/7.43.0",
          "Accept": "*/*",
          "Accept-Encoding": "gzip,deflate,br",
          "Connection": "Keep-Alive"
          // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
        },
      }
    );

    console.log(response.data, "//////////////////////////////////////");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getGstSalesRegisterReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
  }) => {
    try {
      // Retrieve the stored user token (if required)
  
      const payload = {
        report_name: "GST Sales Register",
        report_type: "json",
        filters: [
          {
            from_date: filters.fromDate, // Pass filters
            to_date: filters.toDate,
            name: filters.name,
          },
        ],
      };
  
      const response = await axios.post(
        `${API_URL}/api/method/gst_sales_register`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Length":"<calculated when request is sent>",
            "Host": "<calculated when request is sent>",
            "User-Agent":"PostmanRuntime/7.43.0",
            "Accept": "*/*",
            "Accept-Encoding": "gzip,deflate,br",
            "Connection": "Keep-Alive"
            // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
          },
        }
      );
  
      console.log(response.data, "//////////////////////////////////////");
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  const getNetStockReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
    // barcode: string;
  }) => {
    try {
      // Retrieve the stored user token (if required)
  
      const payload = {
        report_name: "Stock Report",
        report_type: "json",
        limit: "0",
        page: "1",
        from_date: filters.fromDate, // Pass filters
        to_date: filters.toDate,
        warehouse: filters.name,
        // barcode: filters.barcode,
      };
  
      const response = await axios.post(
        `${API_URL}/api/method/getreport`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
          },
        }
      );
  
      console.log(response.data, "//////////////////////////////////////");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // stock_inward_register
  const stock_inward_register = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
    // barcode: string;
  }) => {
    try {
      // Retrieve the stored user token (if required)
  
      const payload = {
        report_name: "Stock Inward Register",
        report_type: "json",
        limit: "0",
        page: "1",
        from_date: filters.fromDate, // Pass filters
        to_date: filters.toDate,
        warehouse: filters.name,
        // barcode: filters.barcode,
      };
  
      const response = await axios.post(
        `${API_URL}/api/method/getreport`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
          },
        }
      );
  
      console.log(response.data, "//////////////////////////////////////");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const stock_outward_register = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
    // barcode: string;
  }) => {
    try {
      // Retrieve the stored user token (if required)
  
      const payload = {
        report_name: "Stock Outward Register",
        report_type: "json",
        limit: "0",
        page: "1",
        from_date: filters.fromDate, // Pass filters
        to_date: filters.toDate,
        warehouse: filters.name,
        // barcode: filters.barcode,
      };
  
      const response = await axios.post(
        `${API_URL}/api/method/getreport`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user.token}`, // Add token if authentication is required
          },
        }
      );
  
      console.log(response.data, "//////////////////////////////////////");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
const handleDownload = (csvData: string, filename: string) => {
  if (csvData && csvData?.length) {
    const blob = new Blob([csvData], { type: "text/csv" }); // Convert CSV string to Blob
    const url = window.URL.createObjectURL(blob); // Create URL for Blob
    const link = document.createElement("a"); // Create a link element
    link.href = url;
    link.setAttribute("download", filename); // Set filename for download
    document.body.appendChild(link); // Append link to document body
    link.click(); // Trigger download
    URL.revokeObjectURL(url); // Clean up
    toast.success("Downloaded Successfully",{ duration: 2000});
  } else {
    toast.error("CSV Download Failed!!!", { duration: 2000 });
  }
};




//EXCEL//
const handleDownloadExcel = (jsonData: any, filename: string) => {
  if (!jsonData || jsonData.length === 0) {
    toast.error("Excel Download Failed!!!", { duration: 2000 });
    return;
  }

  try {
    // Create a new worksheet
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Stock Report");

    // Trigger download
    XLSX.writeFile(workbook, `${filename}.xlsx`);
    
    toast.success("Downloaded Successfully", { duration: 2000 });
  } catch (error) {
    console.error("Excel download error:", error);
    toast.error("Excel Download Failed!!!", { duration: 2000 });
  }
};

// const handleDownloadExcel = (jsonData: any, filename: string) => {
//   try {
//     if (!jsonData || !jsonData.message || !jsonData.message.columns) {
//       toast.error("Excel Download Failed!!!", { duration: 2000 });
//       return;
//     }

//     const headers = jsonData.message.columns; // Extract column headers
//     let rows: any[] = [];

//     if (jsonData.message.data.length > 0 && Object.keys(jsonData.message.data[0]).length > 0) {
//       // Convert data objects to arrays matching the header order
//       rows = jsonData.message.data.map((row: any) =>
//         headers.map((header: string) => row[header] || "")
//       );
//     } else {
//       // If data is empty, ensure at least one empty row
//       rows.push(Array(headers.length).fill(""));
//     }

//     // Create worksheet and workbook
//     const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Stock Report");

//     // Trigger download
//     XLSX.writeFile(workbook, `${filename}.xlsx`);

//     toast.success("Downloaded Successfully", { duration: 2000 });
//   } catch (error) {
//     console.error("Excel download error:", error);
//     toast.error("Excel Download Failed!!!", { duration: 2000 });
//   }
// };


const fetchAndDownloadReport = async (filters: {
  fromDate: string;
  toDate: string;
  warehouse: string;
  barcode: string;
}) => {
  try {
    const reportData = await getNetSalesReport(filters); // Pass filters here
    handleDownload(reportData, "stockReport.csv");
  } catch (error) {
    console.error("Error fetching net sales report:", error);
  }
};

const fetchAndDownloadGstSalesReturnReport = async (filters: {
  fromDate: string;
  toDate: string;
  name: string;
},report_name:any) => {
  try {
    const reportData = await getGstSalesReturnReport(filters,report_name); // Pass filters here
    const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];
  
    if (!dataArray.length) {
      console.error("No data found for the report:", reportData);
      toast.error("No data available to download!");
      return;
    }

    handleDownloadExcel(dataArray, "GstSalesReturnReport");
  } catch (error) {
    console.error("Error fetching net stock report:", error);
  }
};

const fetchAndDownloadGstSalesRegisterReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
  }) => {
    try {
      const reportData = await getGstSalesRegisterReport(filters); // Pass filters here
      const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];
  
      if (!dataArray.length) {
        console.error("No data found for the report:", reportData);
        toast.error("No data available to download!");
        return;
      }
  
      handleDownloadExcel(dataArray, "GstSalesRegisterReport");
    } catch (error) {
      console.error("Error fetching net stock report:", error);
    }
  };


  const fetchAndDownloadStockReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
  }) => {
    try {
      const reportData = await getNetStockReport(filters);
      console.log("Fetched Report Data:", reportData);
  
      // Extract 'message' array from the API response
      const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];
  
      if (!dataArray.length) {
        console.error("No data found for the report:", reportData);
        toast.error("No data available to download!");
        return;
      }
  
      handleDownloadExcel(dataArray, "GstStockReport");
    } catch (error) {
      console.error("Error fetching net stock report:", error);
    }
  };
  
  const fetchAndDownloadStockInwardReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
  }) => {
    try {
      const reportData = await stock_inward_register(filters);
      console.log("Fetched Report Data:", reportData);
  
      // Extract 'message' array from the API response
      const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];
  
      if (!dataArray.length) {
        console.error("No data found for the report:", reportData);
        toast.error("No data available to download!");
        return;
      }
  
      handleDownloadExcel(dataArray, "GstStockInWardReport");
    } catch (error) {
      console.error("Error fetching net stock report:", error);
    }
  };

  const fetchAndDownloadStockOutwardReport = async (filters: {
    fromDate: string;
    toDate: string;
    name: string;
  }) => {
    try {
      const reportData = await stock_outward_register(filters);
      console.log("Fetched Report Data:", reportData);
  
      // Extract 'message' array from the API response
      const dataArray = Array.isArray(reportData?.message) ? reportData.message : [];
  
      if (!dataArray.length) {
        console.error("No data found for the report:", reportData);
        toast.error("No data available to download!");
        return;
      }
  
      handleDownloadExcel(dataArray, "GstStockOutWardReport");
    } catch (error) {
      console.error("Error fetching net stock report:", error);
    }
  };fetchAndDownloadStockOutwardReport

const authService = {
  login,
  getNetSalesReport,
  fetchAndDownloadReport, // Export function to be used in components
  fetchAndDownloadGstSalesReturnReport,
  fetchAndDownloadGstSalesRegisterReport,
  fetchAndDownloadStockReport,
  fetchAndDownloadStockInwardReport,
  fetchAndDownloadStockOutwardReport,

  // Final Report Api
  fetchAndDownloadReportNew,
  //Price Config api
  price_config
};

export default authService;
