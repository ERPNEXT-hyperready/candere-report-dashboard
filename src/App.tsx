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
import SalesInvoice from "./pages/SalesInvoice";
// import DailyUpdates from "./pages/DailyUpdates";
import EmployeeDetails from "./pages/EmployeeDetails";
import InvoiceWiseCollectionSummary from "./pages/InvoiceWise CollectionSummary";
import AllStores from "./pages/AllStores";
import PrevDayStockReport from "./pages/PrevDayStockReport";
import ItemMasterCandere from "./pages/ItemMasterCandere";
import NetSalesReportCDR from "./pages/NetSalesReportCDR";
import BankBookReport from "./pages/BankBookReport";
import CashBookReport from "./pages/CashBookReport";

const App: React.FC = () => {
  const { user } = useSelector((state: any) => state?.auth);
  const [isAuthenticated, setAuthenticated] = useState(Boolean(user));

  useEffect(() => {
    setAuthenticated(user ? true : false);
    if (user) {
      setAuthenticated(true);
    }
  }, [user]);

  return (
    <>

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
                      <Route path="/reports" element={<ReportsLayout />} />
                      <Route
                        path="stockreport/:report_name"
                        element={<Stockreport />}
                      />
                      <Route
                        path="salesreport/:report_name"
                        element={<Salesreport />}
                      />
                      <Route
                        path="salesreturn/:report_name"
                        element={<Salesreturn />}
                      />
                      <Route
                        path="stockoutward/:report_name"
                        element={<Stockoutward />}
                      />
                      <Route
                        path="stockinward/:report_name"
                        element={<Stockinward />}
                      />
                      <Route
                        path="purchasereport/:report_name"
                        element={<Purchasereport />}
                      />
                      <Route
                        path="purchasereturnreport/:report_name"
                        element={<Purchasereturnreport />}
                      />
                      <Route
                        path="employeedetails/:report_name"
                        element={<EmployeeDetails />}
                      />
                      <Route
                        path="/invoicewisecollectionsummary/:report_name"
                        element={<InvoiceWiseCollectionSummary />}
                      />
                      <Route
                        path="/allstores/:report_name"
                        element={<AllStores />}
                      />
                      <Route
                        path="/prevdaystockreport/:report_name"
                        element={<PrevDayStockReport />}
                      />
                      <Route
                        path="/itemmastercandere/:report_name"
                        element={<ItemMasterCandere />}
                      />
                      <Route
                        path="/netsalesreportcdr/:report_name"
                        element={<NetSalesReportCDR />}
                      />
                      <Route
                        path="/bankbookreport/:report_name"
                        element={<BankBookReport />}
                      />
                      <Route
                        path="/cashbookreport/:report_name"
                        element={<CashBookReport />}
                      />
                      <Route path="/priceconfig" element={<PriceConfig />} />
                      <Route
                        path="/individualpriceconfig/:type"
                        element={<IndividualPriceConfig />}
                      />
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                      {/* // Daily Updates // */}
                      <Route path="/salesinvoice" element={<SalesInvoice />} />
                      {/* <Route
                        path="/dailyupdate"
                        element={
                          <DailyUpdates
                            dailyUpdates={dailyUpdates}
                            isDrawerOpen={isDrawerOpen}
                            setIsDrawerOpen={setIsDrawerOpen}
                          />
                        }
                      /> */}
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
    </>
  );
};

export default App;
