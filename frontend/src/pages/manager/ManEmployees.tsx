import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profile from "../../assets/profile2.png";

const ManEmployees = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      console.log(employees);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/employees`
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-7 p-10">
      {employees.map((employee) => (
        <Link to={`/empprofile/${employee.user}`} key={employee._id}>
          <div className="flex space-x-14  items-center  bg-gray-900 rounded-xl shadow-md px-14 py-4">
            <img src={profile} alt="" className="rounded-full w-28 h-28" />
            <div className="flex flex-col justify-center ">
              <h3 className="text-white text-xl">{employee.name}</h3>
              <p className="text-gray-400">{employee.department}</p>
              <p className="text-gray-400">{employee.email}</p>
              <p className="text-gray-400">{employee.phoneNumber}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ManEmployees;
