import { Card, CardContent } from "@/components/ui/card";
// import { Package,Gem,Sparkles ,Snowflake,NonBinary,ShipWheel} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../features/auth/authService"; // Import API service
import { Gem, CircleChevronLeft } from "lucide-react";

const PriceConfig = () => {
  const [priceData, setPriceData] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const data = await authService.price_config();
        setPriceData(data?.message || {});
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };

    fetchPriceData();
  }, []);
  // Define report routes with optional :id parameter
  const priceRoutes = [
    {
      path: "/individualpriceconfig/gold",
      name: "Gold Price",
      key: "gold_purities",
    },
    {
      path: "/individualpriceconfig/diamond",
      name: "Diamond Price",
      key: "diamond_purities",
    },
    {
      path: "/individualpriceconfig/platinum",
      name: "Platinum Price",
      key: "platinum_purities",
    },
    {
      path: "/individualpriceconfig/silver",
      name: "Silver Price",
      key: "silver_purities",
    },
    {
      path: "/individualpriceconfig/gemstone",
      name: "Gem Stone Price",
      key: "gemstone_purities",
    },
    {
      path: "/individualpriceconfig/zirconia",
      name: "Zirconia Price",
      key: "zirconia_purities",
    },
  ];

  const getCardColors = (key: string) => {
    switch (key) {
      case "gold_purities":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "diamond_purities":
        return "bg-blue-500 hover:bg-blue-600";
      case "platinum_purities":
        return "bg-gray-500 hover:bg-gray-600";
      case "silver_purities":
        return "bg-gray-300 hover:bg-gray-400";
      case "gemstone_purities":
        return "bg-purple-500 hover:bg-purple-600";
      case "zirconia_purities":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  return (
    <div className="p-4 gradient h-full w-full ">
      <div className="flex gap-2">
        <div
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          onClick={() => navigate("/dashboard")}
        >
          <CircleChevronLeft className="text-gray-700" size={24} />
        </div>

        <h1 className="text-xl font-bold mb-4">Price</h1>
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
          {priceRoutes.map((report, index) => (
            <Card
              key={index}
              className={`quick-card transition duration-300 ease-in-out cursor-pointer ${getCardColors(
                report.key
              )}`}
              // className='quick-card transition duration-300 ease-in-out cursor-pointer gradient'

              onClick={() =>
                navigate(report.path, {
                  state: { key: report.key, data: priceData?.[report.key] },
                })
              }
            >
              <CardContent>
                <span className="card-icon green">
                  <Gem size={20} />
                </span>
                <span className="card-title ">{report.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceConfig;
