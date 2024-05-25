import { Pump } from "@/ui/products";

export default function page({ params }: { params: { products: string[] } }) {
  return (
    <ul className="flex flex-col gap-2">
      {/* {Pump.} */}
      {Pump.y.map((x, i) =>
        <li key={i} className="flex max-w-max justify-between items-center border-b">
          <div className=" w-12">{x.H}</div>
          <div className="mx-2 w-2">:</div>
          <div className=" w-12">{x.F}</div>
        </li>)}
    </ul>);
}
