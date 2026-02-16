"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
  const times = ["9:00 صباحاً", "12:00 ظهراً", "3:00 مساءً", "6:00 مساءً"];

  const handleSubmit = () => {
    if (!fullName || !phone || !selectedDay || !selectedTime) {
      alert("يرجى ملء جميع الحقول قبل تأكيد الحجز");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      router.push(
        `/booking/confirmation?phone=${phone}&day=${selectedDay}&time=${selectedTime}`
      );
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6fc]">
        <div className="bg-white p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            جاري تأكيد الحجز...
          </h2>
          <p className="text-gray-500">يرجى الانتظار قليلاً</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6fc] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8 text-right">
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">
          حجز موعد طبي
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">الاسم الكامل</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-600">رقم الهاتف</label>
          <input
            type="number"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <p className="mb-2 text-purple-500 font-semibold">اختر اليوم</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`border rounded-lg p-3 ${
                selectedDay === day
                  ? "bg-purple-500 text-white"
                  : "bg-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <p className="mb-2 text-purple-500 font-semibold">اختر الوقت</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`border rounded-lg p-3 ${
                selectedTime === time
                  ? "bg-purple-500 text-white"
                  : "bg-white"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition"
        >
          تأكيد الحجز
        </button>
      </div>
    </div>
  );
}
