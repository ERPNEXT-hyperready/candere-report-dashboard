import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DollarSign,
  Proportions,
  Gem,
  Database,
  ShoppingBasket,
} from "lucide-react"; // Import necessary icons
import { useEffect, useState } from "react";
import authService from "../features/auth/authService";
// import DailyUpdateComponent from "./DailyUpdates";
import ApexChart from "@/components/apexchart/ApexChart";

// const companies = [
//   {
//     name: "Apple",
//     id: 1,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Apple_logo.svg/1024px-Apple_logo.svg.png",
//   },
//   {
//     name: "Google",
//     id: 2,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
//   },
//   {
//     name: "Amazon",
//     id: 3,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
//   },
//   {
//     name: "Microsoft",
//     id: 4,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Microsoft_Logo_2012.svg/1024px-Microsoft_Logo_2012.svg.png",
//   },
//   {
//     name: "Facebook",
//     id: 5,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png",
//   },
//   {
//     name: "Tesla",
//     id: 6,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors_Logo.svg/1024px-Tesla_Motors_Logo.svg.png",
//   },
//   {
//     name: "Samsung",
//     id: 7,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_logo.svg/1024px-Samsung_logo.svg.png",
//   },
//   {
//     name: "Intel",
//     id: 8,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1024px-Intel-logo.svg.png",
//   },
//   {
//     name: "Adobe",
//     id: 9,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Adobe_logo.svg/1024px-Adobe_logo.svg.png",
//   },
//   {
//     name: "Lenovo",
//     id: 10,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo.svg/1024px-Lenovo_logo.svg.png",
//   },
//   {
//     name: "Cisco",
//     id: 11,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1024px-Cisco_logo.svg.png",
//   },
//   {
//     name: "HP",
//     id: 12,
//     path: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
//   },
// ];

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state?.auth);
  const [dailyUpdates, setDailyUpdates] = useState<any>([]);
  // const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${String(
          today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(
          2,
          "0"
        )} 00:00:00`;

        const payload = { new_date: formattedDate }; // ✅ Matches your required format

        const data = await authService.daily_details(payload.new_date);

        console.log("API Response:", data);

        if (data) {
          setDailyUpdates(data);
        } else {
          console.log("❌ No data found for key.");
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []); //
  console.log(dailyUpdates, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
  // const handleCardClick = () => {
  //   // setSelectedData(dailyUpdates); // ✅ Store dailyUpdates
  //   setIsDrawerOpen(true); // ✅ Open Drawer
  // };
  return (
    <div className="h-full w-full p-2">
      <div className="welcome-section pt-2">
        <h1>
          Welcome{" "}
          <span className="text-3xl font-bold text-gray-800">
            {user.full_name}
          </span>
        </h1>
        {/* <div className="data-filter">
          <button className="filter-button active">All Data</button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 ">
        <Card
          className="bg-cyan-500 text-white shadow-md quick-card hover:shadow-lg border border-white/40"
          onClick={() => navigate("/priceconfig")}
        >
          <CardHeader>
            <CardTitle className="widget-title">
              <span className="icon text-white">
                <DollarSign size={48} className="mb-2 " />
              </span>
              Price
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Gem size={48} className="mb-2 text-white " />
            {/* <CardTitle className="text-2xl font-bold"></CardTitle> */}
            {/* <p className="text-sm text-white/80">Active Members</p> */}
          </CardContent>
        </Card>
        <Card
          className="bg-blue-500 quick-card quick-card:hover   text-white shadow-md"
          onClick={() => navigate("/reports")}
        >
          {/* bg-blue-500 */}
          <CardHeader>
            <CardTitle className="widget-title">
              <span className="icon text-white">
                <Database size={48} className="mb-2" />
              </span>
              Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Proportions size={48} className="mb-2 text-white " />
            <CardTitle className="text-2xl font-bold"></CardTitle>
          </CardContent>
        </Card>
        <Card className=" bg-green-500 text-white shadow-md quick-card quick-card:hover">
          {" "}
          {/* Green Card */}
          <CardHeader>
            {/* bg-green-500 */}
            <CardTitle className="widget-title">
              <span className="icon text-white">
                <ShoppingBasket size={48} className="mb-2" />
              </span>
              Product
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <CardTitle className="text-2xl font-bold text-white ">
              7000
            </CardTitle>
            <p className="text-sm text-white/80">Total Product</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-8">
      <p className="text-3xl font-bold text-gray-800 pt-4">Today's Update</p>
        {/* <Card className="quick-card" onClick={handleCardClick}> */}
        {/* <CardContent> */}
        {/* <DailyUpdateComponent
            dailyUpdates={dailyUpdates}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          /> */}
        {/* </CardContent> */}
        {/* </Card> */}

        <ApexChart dailyUpdates={dailyUpdates} />

      </div>
    </div>
  );
};

export default Dashboard;
