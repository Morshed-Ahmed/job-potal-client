import axios from "axios";
import React, { useEffect, useState } from "react";

const AllHiringManager = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4242/admin/allHiringManagers", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        setLoading(false);

        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div>AllHiringManager</div>;
};

export default AllHiringManager;
