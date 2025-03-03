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
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const companies = [
  {
    name: "Apple",
    id: 1,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Apple_logo.svg/1024px-Apple_logo.svg.png",
  },
  {
    name: "Google",
    id: 2,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
  },
  {
    name: "Amazon",
    id: 3,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  },
  {
    name: "Microsoft",
    id: 4,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Microsoft_Logo_2012.svg/1024px-Microsoft_Logo_2012.svg.png",
  },
  {
    name: "Facebook",
    id: 5,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png",
  },
  {
    name: "Tesla",
    id: 6,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors_Logo.svg/1024px-Tesla_Motors_Logo.svg.png",
  },
  {
    name: "Samsung",
    id: 7,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_logo.svg/1024px-Samsung_logo.svg.png",
  },
  {
    name: "Intel",
    id: 8,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1024px-Intel-logo.svg.png",
  },
  {
    name: "Adobe",
    id: 9,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Adobe_logo.svg/1024px-Adobe_logo.svg.png",
  },
  {
    name: "Lenovo",
    id: 10,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo.svg/1024px-Lenovo_logo.svg.png",
  },
  {
    name: "Cisco",
    id: 11,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1024px-Cisco_logo.svg.png",
  },
  {
    name: "HP",
    id: 12,
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state?.auth);

  return (
    <div className="gradient h-full w-full p-2">
      <div className="welcome-section pt-2">
        <h1>
          Welcome{" "}
          <span className="text-4xl font-extrabold ">{user.full_name}</span>
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
              <span className="icon ">
                <DollarSign size={48} className="mb-2 " />
              </span>
              Price
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Gem size={48} className="mb-2 text-black" />
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
              <span className="icon black">
                <Database size={48} className="mb-2" />
              </span>
              Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Proportions size={48} className="mb-2 text-black" />
            <CardTitle className="text-2xl font-bold"></CardTitle>
          </CardContent>
        </Card>
        <Card className=" bg-green-500 text-white shadow-md quick-card quick-card:hover">
          {" "}
          {/* Green Card */}
          <CardHeader>
            {/* bg-green-500 */}
            <CardTitle className="widget-title">
              <span className="icon black">
                <ShoppingBasket size={48} className="mb-2" />
              </span>
              Product
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <CardTitle className="text-2xl font-bold text-black">
              7000
            </CardTitle>
            <p className="text-sm text-white/80">Total Revenue</p>
          </CardContent>
        </Card>
      </div>
      {/* <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}
    </div>
  );
};

export default Dashboard;
