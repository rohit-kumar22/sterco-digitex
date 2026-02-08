import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#EAF4FB] text-gray-700 py-8">
      <div className=" px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900">
              University Programs Portal
            </p>
            <p className="text-xs text-gray-500">
              Explore courses, departments & admissions
            </p>
          </div>

          {/* Middle Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-blue-600 transition">
              Programs
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              Departments
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              Admissions
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            <p>📍 Noida, India</p>
            <p>📧 admissions@university.edu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
