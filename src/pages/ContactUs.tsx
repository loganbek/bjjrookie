import React, { useEffect, useState } from "react";

const ContactUs: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jojo3.com/article")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactUs;
