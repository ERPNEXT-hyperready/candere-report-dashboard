import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Toaster } from "@/components/ui/sonner";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { SiteHeader } from "./components/site-header";
import { AppSidebar } from "./components/app-sidebar";
import Profile from "./pages/profile";
import { useSelector } from "react-redux";
import Stockreport from "./pages/stockreport";
import Salesreport from "./pages/salesregisterreport";
import Salesreturn from "./pages/salesreturn";
import Stockoutward from "./pages/stockoutward";
import Stockinward from "./pages/stockinward";
import Purchasereport from "./pages/purchasereport";
import Purchasereturnreport from "./pages/purchasereturnreport";
import ReportsLayout from "./pages/reportslayout";
import PriceConfig from "./pages/priceconfig";
import IndividualPriceConfig from "./pages/patricularpriceconfig";

const App: React.FC = () => {
  const { user } = useSelector((state: any) => state?.auth);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    } catch (err) {
      console.log(err);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <>Loading ...</>
      ) : (
        <Router>
          {isAuthenticated ? (
            <div className="[--header-height:calc(theme(spacing.14))]">
              <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                  <AppSidebar variant="floating" />
                  <SidebarInset className="p-3">
                  <Routes>
              {/* Main Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />

              {/* Reports Parent Route */}
              <Route path="/reports" element={<ReportsLayout />}/>
                <Route path="stockreport/:report_name" element={<Stockreport />} />
                <Route path="salesreport/:report_name" element={<Salesreport />} />
                <Route path="salesreturn/:report_name" element={<Salesreturn />} />
                <Route path="stockoutward/:report_name" element={<Stockoutward />} />
                <Route path="stockinward/:report_name" element={<Stockinward />} />
                <Route path="purchasereport/:report_name" element={<Purchasereport />} />
                <Route path="purchasereturnreport/:report_name" element={<Purchasereturnreport />} />
                <Route path="/priceconfig" element={<PriceConfig />} />
                <Route path="/individualpriceconfig/:type" element={<IndividualPriceConfig />} />

              

                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </SidebarInset>
                </div>
              </SidebarProvider>
            </div>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
          <Toaster position="top-right" richColors closeButton />
        </Router>
      )}
    </>
  );
};

export default App;
