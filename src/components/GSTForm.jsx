import { useState } from "react";

const GSTForm = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [type, setType] = useState("add");
  const [result, setResult] = useState(null);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const gstRate = parseFloat(rate);

    if (!amt || amt <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (type === "add") {
      const gstAmount = amt * (gstRate / 100);
      const totalAmount = amt + gstAmount;

      setResult({
        originalAmount: amt,
        gstAmount,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
        totalAmount,
      });
    } else {
      const originalAmount = amt / (1 + gstRate / 100);
      const gstAmount = amt - originalAmount;

      setResult({
        originalAmount,
        gstAmount,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
        totalAmount: amt,
      });
    }
  };

  const resetCalculator = () => {
    setAmount("");
    setRate("18");
    setType("add");
    setResult(null);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
          GST Calculator
        </h2>

        <p className="text-center text-slate-900 mb-8">
          Calculate GST instantly with accurate tax breakdowns.
        </p>

        {/* GST Type Toggle */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setType("add")}
            className={`py-3 rounded-xl font-medium transition ${
              type === "add"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-black"
            }`}
          >
            Add GST
          </button>

          <button
            onClick={() => setType("remove")}
            className={`py-3 rounded-xl font-medium transition ${
              type === "remove"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-black"
            }`}
          >
            Remove GST
          </button>
        </div>

        {/* Amount */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-slate-900">
            Enter Amount
          </label>

          <input
            type="number"
            placeholder="e.g. 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* GST Rate */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-slate-900">
            GST Rate
          </label>

          <select
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={calculateGST}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Calculate GST
          </button>

          <button
            onClick={resetCalculator}
            className="px-6 border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition"
          >
            Reset
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-center mb-6">
              Calculation Result
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-slate-500">Original Amount</p>
                <h4 className="text-2xl font-bold">
                  ₹{result.originalAmount.toFixed(2)}
                </h4>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-slate-500">GST Amount</p>
                <h4 className="text-2xl font-bold text-blue-600">
                  ₹{result.gstAmount.toFixed(2)}
                </h4>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-slate-500">CGST</p>
                <h4 className="text-2xl font-bold">
                  ₹{result.cgst.toFixed(2)}
                </h4>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-slate-500">SGST</p>
                <h4 className="text-2xl font-bold">
                  ₹{result.sgst.toFixed(2)}
                </h4>
              </div>
            </div>

            <div className="mt-6 bg-blue-600 text-white p-6 rounded-2xl text-center">
              <p className="text-lg">Total Amount</p>
              <h3 className="text-4xl font-bold mt-2">
                ₹{result.totalAmount.toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GSTForm;