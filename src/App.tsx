import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import './styles.scss';

export function App() {
  const [date, setDate] = useState<number>();

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 1000);
  });

  return <h1>Hello World! {date && <>({formatDate(date)})</>}</h1>;
}

function formatDate(ms: number): string {
  return format(ms, 'HH:mm:ss');
}
