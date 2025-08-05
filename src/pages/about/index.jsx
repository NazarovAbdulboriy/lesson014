import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";

const About = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    age: "",
    profession: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
    setForm({ name: "", age: "", profession: "" });
  };

  return (
    <div className="container text-center">
      <h2 className="text-2xl text-white mt-[40px]"><b>Add User</b></h2><br /><br />
      <div className="flex justify-center">
      <form className="bg-white w-[400px] rounded-2xl " onSubmit={handleSubmit}><br />
        <input className="border rounded-[8px] p-[5px] w-[200px]" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input className="border rounded-[8px] p-[5px] w-[200px]" name="age" placeholder="Age" value={form.age} onChange={handleChange} required /><br /><br />
        <input className="border rounded-[8px] p-[5px] w-[200px]" name="profession" placeholder="Profession" value={form.profession} onChange={handleChange} required /><br /><br />
        <button className="bg-green-500 border-black rounded-xl w-[110px] h-[35px] text-white hover:bg-green-600 transform hover:scale-110 duration-300" type="submit">Add</button><br /><br />
      </form>
      </div>
    </div>
  );
};

export default React.memo(About);
