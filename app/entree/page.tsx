'use client'
import { use, useEffect, useState } from "react";

async function getEntrees() {
   const result = await fetch("http://localhost:3000/entrees.txt") ;
   return result.text();
}


export default async function Home() {
    
    const entrees = await getEntrees();
    
    return (
        <main>
            <h2>Entrees:</h2>
            <div>{entrees} </div>
        </main>
    );
  }
  