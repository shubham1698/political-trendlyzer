import { ComboboxDemo } from "@/components/ui/Combobox";
import { USAStateData } from "../_data/UsaStateList";
import { MockCandidateData } from "../_data/QueryTwoMockData";
import CustomLineChart from '../_components/CustomLineChart'
import React from "react";

export default function QueryGraph() {
  return (
    <div className="w-4/5 h-full ">
      <div className="w-full h-1/5 p-5">
        <div className="flex flex-row justify-evenly">
          <ComboboxDemo items={USAStateData} />
          <ComboboxDemo items={USAStateData} />
          <ComboboxDemo items={USAStateData} />
        </div>
      </div>
      <div className="rounded-lg h-4/5 w-full ">
        <CustomLineChart  chartData={MockCandidateData}/>
      </div>
    </div>
  );
}
