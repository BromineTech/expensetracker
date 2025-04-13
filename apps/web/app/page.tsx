"use client";
import { useState, useEffect } from "react";


const Home = () => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <h1>Supabase Data:</h1>
      {error && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      <pre>Hello</pre>
    </div>
  );
};

export default Home;
