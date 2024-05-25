import PumpSheet from "@/components/PumpSheet";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col">
      {/* <TableComponent data={JSONData} /> */}
      <PumpSheet PumpFamily="E14S64" />
    </div>
  );
}
