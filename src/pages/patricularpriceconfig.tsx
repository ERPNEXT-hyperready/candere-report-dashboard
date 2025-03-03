import { useEffect, useState } from "react";
import authService from "../features/auth/authService";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useParams, useLocation } from "react-router-dom";
import getGridData from "../components/Table/getGridData";
import LeadscontrolTable from "../components/Table/tablepage";
import { CircleChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function IndividualPriceConfig() {
  const location = useLocation();
  // const { type } = useParams();
  const navigate = useNavigate();

  const purityKey = location.state?.key || "gold_purities"; // Default to gold if not found
  const initialData = location.state?.data || [];

  // State for storing API data
  const [purities, setPurities] = useState<any[]>([]);
  const [selectedPurity, setSelectedPurity] = useState<any>({
    frontend_label: initialData?.[0]?.frontend_label || "",
    rate: initialData?.[0]?.rate?.toString() || "",
    parentfield: initialData?.[0]?.parentfield || "",
  });

  useEffect(() => {

    if (initialData.length > 0) {
      setPurities(initialData); // ✅ Set state from initialData
      setSelectedPurity({
        frontend_label: initialData[0]?.frontend_label || "",
        rate: initialData[0]?.rate?.toString() || "",
        parentfield: initialData[0]?.parentfield || "",
      });
      return;
    }

    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const data = await authService.price_config();
        console.log("API Response:", data);

        if (data?.message?.[purityKey]?.length > 0) {
          console.log("✅ Setting purities:", data.message[purityKey]);
          setPurities(data.message[purityKey]);
          setSelectedPurity({
            frontend_label: data.message[purityKey][0]?.frontend_label || "",
            rate: data.message[purityKey][0]?.rate?.toString() || "",
            parentfield: data.message[purityKey][0]?.parentfield || "",
          });
        } else {
          console.log("❌ No data found for key:", purityKey);
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, [purityKey]); // Dependency ensures it re-runs when `purityKey` changes

  console.log("Purity Key:", purityKey);
  console.log("Initial Data:", initialData);
  console.log("Fetched Data:", purities);
  // Handle row click to update inputs
  // const handleRowClick = (purity: any) => {
  //   setSelectedPurity({
  //     frontend_label: purity.frontend_label,
  //     rate: purity.rate.toString(),
  //     parentfield: purity.parentfield,
  //   });
  // };
  const parentfieldMapping: Record<string, string> = {
    gold_purities: "Gold",
    diamond_purities: "Diamond",
    platinum_purities: "Platinum",
    silver_purities: "Silver",
    gemstone_purities: "Gemstone",
    zirconia_purities: "Zirconia",
  };
  const formattedName =
    parentfieldMapping[selectedPurity.parentfield] || "Price Config";

  const { rowData, columnDefs } = getGridData(purities );
  

  return (
    <div className="flex flex-col gap-4 h-full  p-2 ">
       <div className="flex gap-2">
        <div
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          onClick={() => navigate("/priceconfig")}
        >
          <CircleChevronLeft className="text-gray-700" size={24} />
        </div>

      <h1 className="text-xl font-bold">{formattedName} Price </h1>
      </div>

      {/* Inputs for selected row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-slate-600">
            {formattedName} Purity Price for 1g
          </Label>
          <Input type="text" value={selectedPurity.frontend_label} readOnly />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-slate-600">Rate</Label>
          <Input type="text" value={selectedPurity.rate} readOnly />
        </div>
      </div>

      <div className="w-full h-full p-4 ">
        <LeadscontrolTable
          columnDefs={columnDefs}
          rowData={rowData}
          id={"123"}
          isloading={false}
        />
      </div>

      {/* Data Table */}
      {/* {purities.length > 0 ? (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 text-left font-bold">Code</th>
                <th className="border px-4 py-2 text-left font-bold">Purity</th>
                <th className="border px-4 py-2 text-left font-bold">Cost %</th>
                <th className="border px-4 py-2 text-left font-bold">Web %</th>
                <th className="border px-4 py-2 text-left font-bold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {purities.map((purity, index) => (
                <tr
                  key={index}
                  className="border-b cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                  onClick={() => handleRowClick(purity)}
                >
                  <td className="border px-4 py-2">{purity.code}</td>
                  <td className="border px-4 py-2">{purity.frontend_label}</td>
                  <td className="border px-4 py-2">{purity.cost_percentage}</td>
                  <td className="border px-4 py-2">{purity.web_percentage}</td>
                  <td className="border px-4 py-2">{purity.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-red-500 mt-4">No data available</p>
      )} */}
    </div>
  );
}

export default IndividualPriceConfig;
