import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Bell, 
  MessageSquare, 
  User, 
  Settings, 
  BookmarkIcon, 
  LayoutDashboard,
  LineChart, 
  FileText,
  Clipboard, 
  ShoppingBag, 
  Package, 
  Layers, 
  Database,
  CreditCard,
  Users,
  Cpu,
  Heart,
  UserCircle,
  DollarSign,
  Cog,
} from "lucide-react";
import './Dashboard.css';

const SalesInvoice = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">
            <span>SEA</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <Settings size={18} />
            <span>Rate Updation</span>
          </div>
          
          <div className="nav-item">
            <Package size={18} />
            <span>FG Inventory Management</span>
          </div>
          
          <div className="nav-item">
            <Cog size={18} />
            <span>Configuration & Rules</span>
          </div>
          
          <div className="nav-item">
            <Database size={18} />
            <span>Master-POS</span>
          </div>
          
          <div className="nav-item">
            <ShoppingBag size={18} />
            <span>Point of Sales</span>
          </div>
          
          <div className="nav-item">
            <Layers size={18} />
            <span>Master</span>
          </div>
          
          <div className="nav-item">
            <Clipboard size={18} />
            <span>Procurement</span>
          </div>
          
          <div className="nav-item">
            <FileText size={18} />
            <span>Order Management (React)</span>
          </div>
          
          <div className="nav-item">
            <Clipboard size={18} />
            <span>Procurement (react)</span>
          </div>
          
          <div className="nav-item">
            <Cpu size={18} />
            <span>Production</span>
          </div>
          
          <div className="nav-item">
            <FileText size={18} />
            <span>Formula Procedures</span>
          </div>
          
          <div className="nav-item">
            <Package size={18} />
            <span>Inventory Management (React)</span>
          </div>
          
          <div className="nav-item">
            <FileText size={18} />
            <span>Report</span>
          </div>
          
          <div className="nav-item">
            <Users size={18} />
            <span>Sub Contracting</span>
          </div>
          
          <div className="nav-item">
            <DollarSign size={18} />
            <span>Financial Accounts</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="icon-button">
              <LayoutDashboard size={20} />
            </button>
            <button className="icon-button">
              <Layers size={20} />
            </button>
            <div className="search-container">
              <Search size={18} />
              <input type="text" placeholder="Search Anything" />
            </div>
          </div>
          
          <div className="header-right">
            <div className="counter">Counter 1</div>
            <button className="icon-button with-badge">
              <Bell size={20} />
              <span className="badge">7</span>
            </button>
            <button className="icon-button with-badge">
              <MessageSquare size={20} />
              <span className="badge">2</span>
            </button>
            <button className="icon-button">
              <Settings size={20} />
            </button>
            <button className="user-avatar">
              <User size={20} />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="welcome-section">
            <h1>Welcome! ADMIN-HO</h1>
            <div className="data-filter">
              <button className="filter-button active">All Data</button>
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="widgets-grid">
            {/* Recent Visits */}
            <Card className="widget-card recent-visits">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon green">
                    <Clipboard size={18} />
                  </span>
                  Recent Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="recent-item">
                  <div className="recent-item-content">
                    <div>FG Inventory Management</div>
                    <div className="menu-id">Menu Id: 9022</div>
                  </div>
                  <BookmarkIcon size={18} />
                </div>
                
                <div className="recent-item">
                  <div className="recent-item-content">
                    <div>Point of Sales</div>
                    <div className="menu-id">Menu Id: 9017</div>
                  </div>
                  <BookmarkIcon size={18} />
                </div>
              </CardContent>
            </Card>

            {/* Bookmarks */}
            <Card className="widget-card">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon blue">
                    <BookmarkIcon size={18} />
                  </span>
                  Bookmarks
                </CardTitle>
              </CardHeader>
              <CardContent className="empty-content">
                {/* Empty state */}
              </CardContent>
            </Card>

            {/* Widgets */}
            <Card className="widget-card small">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon purple">
                    <Layers size={18} />
                  </span>
                  Widgets
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Analytics */}
            <Card className="widget-card small">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon orange">
                    <LineChart size={18} />
                  </span>
                  Analytics
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Reports */}
            <Card className="widget-card">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon teal">
                    <FileText size={18} />
                  </span>
                  Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="empty-content">
                {/* Empty state */}
              </CardContent>
            </Card>

            {/* Task and Verification */}
            <Card className="widget-card task-verify">
              <div className="task-section">
                <div className="task-header">
                  <span>Task</span>
                  <span className="refresh-icon">↻</span>
                </div>
                <div className="task-count">00</div>
              </div>
              <div className="verify-section">
                <div className="verify-header">
                  <span>Verification</span>
                </div>
                <div className="verify-count">5103</div>
              </div>
            </Card>

            {/* Chats */}
            <Card className="widget-card">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon blue">
                    <MessageSquare size={18} />
                  </span>
                  Chats
                </CardTitle>
              </CardHeader>
              <CardContent className="empty-content">
                {/* Empty state */}
              </CardContent>
            </Card>

            {/* Work Done */}
            <Card className="widget-card work-done">
              <CardHeader>
                <CardTitle className="widget-title">
                  <span className="icon blue check">
                    <input type="checkbox" checked />
                  </span>
                  Work Done
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="work-item">
                  <div className="work-item-header">
                    <span>Masters</span>
                    <span className="time">16 minutes ago</span>
                  </div>
                  <span className="new-badge">3 New</span>
                </div>
                <div className="work-item">
                  <div className="work-item-header">
                    <span>Transactions</span>
                    <span className="time">8 minutes ago</span>
                  </div>
                  <span className="new-badge">36 New</span>
                </div>
                <div className="work-item">
                  <div className="work-item-header">
                    <span>Reports</span>
                  </div>
                </div>
                <div className="work-item">
                  <div className="work-item-header">
                    <span>Others</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Grid */}
          <div className="quick-access-section">
            <div className="quick-access-header">
              <div className="title">
                <span className="icon yellow">★</span>
                Quick Access
              </div>
              <span className="icon-info">ⓘ</span>
            </div>

            <div className="quick-access-grid">
              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon green">
                    <Package size={20} />
                  </span>
                  <span className="card-title">FG Inventory Management</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon blue">
                    <ShoppingBag size={20} />
                  </span>
                  <span className="card-title">Point Of Sale</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon green">
                    <Clipboard size={20} />
                  </span>
                  <span className="card-title">Procurement</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon orange">
                    <FileText size={20} />
                  </span>
                  <span className="card-title">Formula Procedures</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon purple">
                    <Users size={20} />
                  </span>
                  <span className="card-title">Sub Contracting</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon purple">
                    <Cpu size={20} />
                  </span>
                  <span className="card-title">Migrations</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon purple">
                    <Cpu size={20} />
                  </span>
                  <span className="card-title">Production</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon orange">
                    <Database size={20} />
                  </span>
                  <span className="card-title">Item Masters</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon blue">
                    <CreditCard size={20} />
                  </span>
                  <span className="card-title">Invoicing</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon orange">
                    <Cog size={20} />
                  </span>
                  <span className="card-title">Configuration & Rules</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon red">
                    <Database size={20} />
                  </span>
                  <span className="card-title">VRM</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon blue">
                    <FileText size={20} />
                  </span>
                  <span className="card-title">Order Management</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon red">
                    <Heart size={20} />
                  </span>
                  <span className="card-title">Loyalty</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon orange">
                    <Database size={20} />
                  </span>
                  <span className="card-title">Generic Masters</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon red">
                    <Settings size={20} />
                  </span>
                  <span className="card-title">App Management</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon purple">
                    <UserCircle size={20} />
                  </span>
                  <span className="card-title">CRM</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon green">
                    <DollarSign size={20} />
                  </span>
                  <span className="card-title">Financial Accounting</span>
                </CardContent>
              </Card>

              <Card className="quick-card">
                <CardContent>
                  <span className="card-icon red">
                    <Settings size={20} />
                  </span>
                  <span className="card-title">Scheme</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;