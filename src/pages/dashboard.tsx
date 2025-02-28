import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookmarkIcon, Clipboard, Cog, Cpu, CreditCard, FileText, Heart, Layers, LineChart, MessageSquare, Package, Presentation, Settings, ShoppingBag, } from "lucide-react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  DollarSign ,Proportions,Gem,Database,ShoppingBasket} from "lucide-react"; // Import necessary icons

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state?.auth);

  return (
    <div>
      <div className="welcome-section">
        <h1>Welcome {user.full_name}</h1>
        {/* <div className="data-filter">
          <button className="filter-button active">All Data</button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-purple-500 text-white shadow-md quick-card quick-card:hover"
                  onClick={() => navigate("/priceconfig")}
        >
          <CardHeader>
            <CardTitle className="widget-title">
              <span className="icon ">
              <DollarSign size={48} className="mb-2" />
              </span>
              Price Config
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6"> 
          <Gem size={48} className="mb-2" />
          {/* <CardTitle className="text-2xl font-bold"></CardTitle> */}
            {/* <p className="text-sm text-white/80">Active Members</p> */}

          </CardContent>
        </Card>
        <Card
          className="quick-card quick-card:hover  bg-blue-500 text-white shadow-md"
          onClick={() => navigate("/reports")}
        >
          <CardHeader>
            <CardTitle className="widget-title">
              <span className="icon black">
              <Database size={48} className="mb-2" />
              </span>
              Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6"> 
          <Proportions size={48} className="mb-2" />
          <CardTitle className="text-2xl font-bold"></CardTitle>
          </CardContent>
        </Card>
        <Card className="bg-green-500 text-white shadow-md quick-card quick-card:hover"> {/* Green Card */}
        <CardHeader>
            <CardTitle className="widget-title">
              <span className="icon black">
              <ShoppingBasket size={48} className="mb-2" />
              </span>
              Product
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <CardTitle className="text-2xl font-bold">7000</CardTitle>
            <p className="text-sm text-white/80">Total Revenue</p>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
};

export default Dashboard;
