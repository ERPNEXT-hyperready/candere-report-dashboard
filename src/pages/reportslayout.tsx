// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   BookmarkIcon,
//   Clipboard,
//   Cog,
//   Cpu,
//   CreditCard,
//   Database,
//   DollarSign,
//   FileText,
//   Heart,
//   Package,
//   Settings,
//   ShoppingBag,
//   UserCircle,
//   Users,
// } from "lucide-react";
// import "./Dashboard.css";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// const ReportsLayout = () => {
//   // const { report_name } = useParams(); 
//   const navigate = useNavigate(); // Initialize navigate function
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Reports</h1>
//       <div className="quick-access-section">
//         <div className="quick-access-header">
//           <div className="title">
//             <span className="icon yellow">★</span>
//             Quick Access
//           </div>
//           <span className="icon-info">ⓘ</span>
//         </div>

//         <div className="quick-access-grid">
//           <Card
//             className="quick-card"
//             onClick={() => navigate("/stockreport/Stock Report")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon green">
//                 <Package size={20} />
//               </span>
//               <span className="card-title">Stock Report</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/salesreport")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon blue">
//                 <ShoppingBag size={20} />
//               </span>
//               <span className="card-title">Sales Register report</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/salesreturn/GST Sales Return Register")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon green">
//                 <Clipboard size={20} />
//               </span>
//               <span className="card-title">Sales Return Register</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/stockoutward")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon orange">
//                 <FileText size={20} />
//               </span>
//               <span className="card-title">Stockoutward</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/stockinward")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon purple">
//                 <Users size={20} />
//               </span>
//               <span className="card-title">Stockinward</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/purchasereport")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon purple">
//                 <Cpu size={20} />
//               </span>
//               <span className="card-title">Purchasereport</span>
//             </CardContent>
//           </Card>

//           <Card
//             className="quick-card"
//             onClick={() => navigate("/purchasereturnreport")} // Redirect on click
//           >
//             <CardContent>
//               <span className="card-icon purple">
//                 <Cpu size={20} />
//               </span>
//               <span className="card-title">Purchasereturnreport</span>
//             </CardContent>
//           </Card>

//           {/* <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon orange">
//                     <Database size={20} />
//                   </span>
//                   <span className="card-title">Item Masters</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon blue">
//                     <CreditCard size={20} />
//                   </span>
//                   <span className="card-title">Invoicing</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon orange">
//                     <Cog size={20} />
//                   </span>
//                   <span className="card-title">Configuration & Rules</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon red">
//                     <Database size={20} />
//                   </span>
//                   <span className="card-title">VRM</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon blue">
//                     <FileText size={20} />
//                   </span>
//                   <span className="card-title">Order Management</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon red">
//                     <Heart size={20} />
//                   </span>
//                   <span className="card-title">Loyalty</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon orange">
//                     <Database size={20} />
//                   </span>
//                   <span className="card-title">Generic Masters</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon red">
//                     <Settings size={20} />
//                   </span>
//                   <span className="card-title">App Management</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon purple">
//                     <UserCircle size={20} />
//                   </span>
//                   <span className="card-title">CRM</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon green">
//                     <DollarSign size={20} />
//                   </span>
//                   <span className="card-title">Financial Accounting</span>
//                 </CardContent>
//               </Card>

//               <Card className="quick-card">
//                 <CardContent>
//                   <span className="card-icon red">
//                     <Settings size={20} />
//                   </span>
//                   <span className="card-title">Scheme</span>
//                 </CardContent>
//               </Card> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsLayout;

import { Card, CardContent } from "@/components/ui/card";
import { FileChartColumn} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportsLayout = () => {
  const navigate = useNavigate();

  // Define report routes with optional :id parameter
  const reportRoutes = [
    { path: "/stockreport", name: "Stock Report", bgColor: "bg-green-200" },
    { path: "/salesreport", name: "GST Sales Register", bgColor: "bg-blue-200" },
    { path: "/salesreturn", name: "GST Sales Return Register", bgColor: "bg-red-200" },
    { path: "/stockoutward", name: "Stock Outward Register", bgColor: "bg-yellow-200" },
    { path: "/stockinward", name: "Stock Inward Register", bgColor: "bg-purple-200" },
    { path: "/purchasereport", name: "Purchase Report", bgColor: "bg-pink-200" },
    { path: "/purchasereturnreport", name: "Purchase Return Report", bgColor: "bg-orange-200" },
  ];
//             onClick={() => navigate("/stockreport/Stock Report")} // Redirect on click

  return (
    <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Reports</h1>
    <div className="quick-access-section">
      <div className="quick-access-header">
        <div className="title">
          <span className="icon yellow">★</span>
          Quick Access
        </div>
        <span className="icon-info">ⓘ</span>
      </div>

      <div className="quick-access-grid">
        {reportRoutes.map((report, index) => (
          <Card
            key={index}
            className={`quick-card ${report.bgColor} p-4 rounded-lg cursor-pointer hover:shadow-lg`}
            onClick={() => navigate(`${report.path}/${encodeURIComponent(report.name)}`)}
            >
            <CardContent>
              <span className="card-icon green">
                <FileChartColumn size={20} />
              </span>
              <span className="card-title">{report.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ReportsLayout;
