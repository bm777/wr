import { useState } from "react"

export default function Menu({active, label, action}) {

    return (
        <div onClick={() => action(label)} className={" py-2 rounded bg-[#e2e2e96b] mb-1 hover:cursor-pointer " + (active ? "bg-[#e2e2e96b] border" : "bg-[#e2e2e900] border")}>
            <span className="ml-5 text-gray-600">{label}</span>
        </div>
    )
}