import { Card, CardContent } from "@/components/ui/card";
import { CircleChevronLeft, FileChartColumn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportsLayout = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // Define report routes with optional :id parameter
  const reportRoutes = [
    // { path: "/stockreport", name: "Stock", bgColor: "bg-green-200" },
    { path: "/salesreport", name: "GST Sales Register", bgColor: "bg-blue-200" },
    {
      path: "/salesreturn",
      name: "GST Sales Return",
      bgColor: "bg-red-200",
    },
    {
      path: "/stockoutward",
      name: "Stock Outward",
      bgColor: "bg-yellow-200",
    },
    {
      path: "/stockinward",
      name: "Stock Inward",
      bgColor: "bg-purple-200",
    },
    {
      path: "/purchasereport",
      name: "Purchase Report",
      bgColor: "bg-pink-200",
    },
    {
      path: "/purchasereturnreport",
      name: "Purchase Return Report",
      bgColor: "bg-orange-200",
    },
    {
      path: "/employeedetails",
      name: "Employee Details",
      bgColor: "bg-lime-200",
    },
    {
      path: "/invoicewisecollectionsummary",
      name: "Invoice Wise Collection Summary",
      bgColor: "bg-emerald-200",
    },
    {
      path: "/allstores",
      name: "All Stores",
      bgColor: "bg-teal-200",
    },
    {
      path: "/prevdaystockreport",
      name: "Prev Day Stock Report",
      bgColor: "bg-neutral-200",
    },
    {
      path: "/itemmastercandere",
      name: "Item Master Candere",
      bgColor: "bg-stone-200",
    },
    {
      path: "/netsalesreportcdr",
      name: "Net Sales Report CDR",
      bgColor: "bg-sky-200",
    },
    {
      path: "/bankbookreport",
      name: "Bank Book",
      bgColor: "bg-rose-200",
    },
    {
      path: "/cashbookreport",
      name: "Cash Book",
      bgColor: "bg-red-200",
    }
  ];

  // const reportRoutes = [
  //   { path: "/stockreport", name: "Stock Report" },
  //   { path: "/salesreport", name: "GST Sales Register" },
  //   { path: "/salesreturn", name: "GST Sales Return Register"},
  //   { path: "/stockoutward", name: "Stock Outward Register"},
  //   { path: "/stockinward", name: "Stock Inward Register" },
  //   { path: "/purchasereport", name: "Purchase Report" },
  //   { path: "/purchasereturnreport", name: "Purchase Return Report" },
  // ];
  //             onClick={() => navigate("/stockreport/Stock Report")} // Redirect on click


  // useEffect(() => {
  //   localStorage.setItem("lastVisitedPage", location.pathname);
  // }, [location]);
  
  return (
    <div className="p-4  h-full w-full ">
      <div className="flex gap-2">
        <div
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          onClick={() => navigate("/dashboard")}
        >
          <CircleChevronLeft className="text-gray-700" size={24} />
        </div>
        <h1 className="text-xl font-bold mb-4">Reports</h1>
      </div>
      <div className="quick-access-section">
        {/* <div className="quick-access-header">
        <div className="title">
          <span className="icon yellow">★</span>
          Quick Access
        </div>
        <span className="icon-info">ⓘ</span>
      </div> */}

        <div className="quick-access-grid">
          {reportRoutes.map((report, index) => (
            <Card
              key={index}
              className={`quick-card ${report.bgColor} p-4 rounded-lg cursor-pointer font-bold hover:shadow-lg`}
              // className={`quick-card p-4 rounded-lg cursor-pointer hover:shadow-lg `}

              onClick={() =>
                navigate(`${report.path}/${encodeURIComponent(report.name)}`)
              }
            >
              <CardContent>
                <span className="card-icon green">
                  <FileChartColumn size={20} />
                </span>
                <span className="card-title font-bold">{report.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ReportsLayout;
