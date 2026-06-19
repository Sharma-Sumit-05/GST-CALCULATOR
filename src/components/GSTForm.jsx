import { useState } from "react";

const GSTForm = () => {

const [amount, setAmount] = useState("");
const [rate, setrate] = useState("18")


  return(
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Calculate GST
        </h2>


      <input type="number"
      placeholder="Enter Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4" />

<select value={rate}
onChange={(e) => setAmount(e.target.value)}
className="w-full border p-3 rounded-lg mb-4">

<option value="5">5%</option>
<option value="12">12%</option>
<option value="18">18%</option>
<option value="28">28%</option>

</select>

<button className="w-full bg-blue-600 text-white py-3 rounded-lg">
  Calculate GST
</button>

    </div>
  )
}

export default GSTForm;