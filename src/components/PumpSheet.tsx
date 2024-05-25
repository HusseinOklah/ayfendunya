'use client'
import React, { useState } from "react";
import { PumpsDatabase } from "@/ui/PumpDataSheet"


export default function PumpSheet({ PumpFamily }: { PumpFamily: string }) {

    const Header = PumpsDatabase.Pumps.filter(f => f.SeriesName === PumpFamily).map(h => h.FlowRates)
    const Heads = PumpsDatabase.Pumps.filter(f => f.SeriesName === PumpFamily).map(s => s.Heads)
    const NPSH = PumpsDatabase.Pumps.filter(f => f.SeriesName === PumpFamily).map(h => h.NPSH)
    var newArr: number[] = [];
    for (var i = 0; i < Heads.map(h => h.map(x => x.HP)).length; i++) {
        newArr = newArr.concat(Heads.map(h => h.map(x => x.HP))[i]);
    }

    var Limit = [0, 0]
    Limit[0] = newArr.reduce((a, b) => Math.min(a, b), -Infinity)
    Limit[1] = newArr.reduce((a, b) => Math.max(a, b), -Infinity)

    const [min, setMin] = useState(Limit[0])
    const [max, setMax] = useState(Limit[1])

    const uniques: number[] = [];

    for (const value of newArr) {
        let exists = false;
        for (const unique of uniques) {
            if (unique === value) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            uniques.push(value);
        }
    }
    var OptionHeads: number[] = uniques.sort((n1, n2) => {
        if (n1 > n2) {
            return 1;
        }

        if (n1 < n2) {
            return -1;
        }

        return 0;
    });
    /////////////////////////////
    return (
        <div className="my-10">
            <ul className="flex space-x-5">
                <li className="flex gap-4">
                    <span>Motor Power Between:</span>
                    <select defaultValue={Limit[0]} onChange={(e) => setMin(OptionHeads[e.target.selectedIndex])}>
                        {OptionHeads.map(x => <option value={x}>{x}</option>)}
                    </select>
                    <select defaultValue={Limit[1]} onChange={(e) => setMax(OptionHeads[e.target.selectedIndex])}>
                        {OptionHeads.map(x => <option value={x}>{x}</option>)}
                    </select>
                </li>
            </ul>
            <table className="text-center text-gray-800 text-[15px] table table-auto border-2 border-gray-800">
                <thead className="bg-gray-400 border-b-2 border-b-gray-800">
                    <tr className="border-b-2 border-gray-800">
                        <th rowSpan={5}>Electric pump type</th>
                        <th colSpan={2} rowSpan={4} className="">Motor Power</th>
                        <th rowSpan={5} className="px-2 text-center text-wrap w-24">Horizontal Installation</th>
                        <th rowSpan={5} className="px-2 text-center text-wrap w-16">Check Valve</th>
                        <th colSpan={Header[0].length + 1}>Capacity</th>
                    </tr>
                    <tr className="border-b  border-gray-800">
                        <th className="px-2 text-center">[L/s]</th>
                        {Header.map((h) => h.map(i => <th className="px-2 text-center">{i}</th>))}
                    </tr>
                    <tr className="border-b border-gray-800">
                        <th className="px-2 text-center">[L/min]</th>
                        {Header.map((h) => h.map(i => <th className="px-2 text-center">{typeof i === "number" ? i * 60 : i}</th>))}
                    </tr>
                    <tr className="border-b-2 border-gray-800">
                        <th className="px-2 text-center">[m3/h]</th>
                        {Header.map((h) => h.map(i => <th className="px-2 text-center">{typeof i === "number" ? i * 3.6 : i}</th>))}
                    </tr>
                    <tr>
                        <th className="px-2 text-center">[kW]</th>
                        <th className="px-2 text-center"> [HP]</th>
                        <th colSpan={Header[0].length + 1} className="px-2 text-center">Head</th>
                    </tr>
                </thead>
                <tbody className="odd:bg-red-300">
                    {Heads.map(head =>
                        head.map(h => ((h.HP >= min && h.HP <= max) || (h.HP <= min && h.HP >= max)) && <tr className="odd:bg-gray-200 even:bg-gray-300 border-b border-b-gray-800 last:border-b-0">
                            <td className="px-2 first:text-left first:font-bold"><button>{h.Model}</button></td>
                            <td className="px-2 first:text-left first:font-bold">{h.KW}</td>
                            <td className="px-2 first:text-left first:font-bold">{h.HP}</td>
                            {h.Head.map(data => <td className="px-2 first:text-left first:font-bold">{data}</td>)}
                        </tr>)

                    )}
                    <tr className="bg-gray-400 text-gray-800 border-t-2 border-t-gray-800">
                        <td colSpan={5} className="text-left py-1">NPSH</td>
                        <td>[m]</td>
                        {NPSH.map((h) => h.map(i => <th className="px-2 text-center">{i}</th>))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
