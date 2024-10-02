import React from "react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div style={{ width:200, margin: '0px auto'}}>
    <nav>
      <ul style={{display:'flex', justifyContent:'space-around'}}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}
