import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApexChart from "@/components/apexchart/ApexChart";

type DailyUpdate = {
  id: number;
  title: string;
  description: string;
  date: string;

};

type Props = {
  dailyUpdates: DailyUpdate[];
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DailyUpdateComponent = ({
  dailyUpdates,
  isDrawerOpen,
  setIsDrawerOpen,
}: Props) => {
  return (
    <div className="quick-access-grid">
      <Card className="quick-card" onClick={() => setIsDrawerOpen(true)}>
        <CardContent>
          <span className="card-title flex justify-center items-center p-4">Daily Updates</span>
        </CardContent>
      </Card>

      {/* Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Daily Updates</DrawerTitle>
          </DrawerHeader>
          <ApexChart dailyUpdates={dailyUpdates} />
          <DrawerFooter>
            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent any parent handlers from triggering
                setIsDrawerOpen(false);
              }}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DailyUpdateComponent;
