import { useEffect, useState } from 'react';

const clock = () => {
  return new Date().toLocaleTimeString();
};
const date = () => {
  return new Date().toLocaleDateString();
};
const Time = () => {
  const [timeString, setTimeString] = useState(clock());
  const [dateString, setDateString] = useState(date());

  useEffect(() => {
    setInterval(() => {
      setDateString(date());
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimeString(clock());
    }, 1000);
  }, []);

  return (
    <div className="time">
      <div>{dateString}</div>
      <div>{timeString}</div>
    </div>
  );
};

export default Time;
