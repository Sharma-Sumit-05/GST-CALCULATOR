const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        
        <h3 className="text-xl font-bold text-slate-900">
          Sumit Sharma
        </h3>

        <p className="mt-2 text-slate-600">
          sumitsharma23803@gmail.com
        </p>

        <a
          href="https://digitalheroesco.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          Built for Digital Heroes
        </a>

        <p className="mt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} GST Calculator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;