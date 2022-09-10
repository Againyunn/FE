import { useEffect, useState } from "react";

function PlainReactLaunches(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v3/launches");
    const data = await res.json();

    setData(data);
  };

  if (data == null) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.map((launch, index) => (
          <li key={index}>
            {index + 1}.{launch.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlainReactLaunches;
