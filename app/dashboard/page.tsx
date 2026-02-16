"use client";
import { useEffect, useState } from "react";

type Booking = {
  id: number;
  phone: string;
  day: string;
  time: string;
};

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    setBookings(stored);
  }, []);

  const clearBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          لوحة تحكم الطبيب
        </h1>

        {bookings.length === 0 ? (
          <p className="text-gray-600">
            لا توجد مواعيد محجوزة حالياً.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto bg-white rounded-xl shadow">
              <table className="w-full text-right">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-3">رقم الهاتف</th>
                    <th className="p-3">اليوم</th>
                    <th className="p-3">الوقت</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b"
                    >
                      <td className="p-3">{booking.phone}</td>
                      <td className="p-3">{booking.day}</td>
                      <td className="p-3">{booking.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={clearBookings}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              مسح جميع الحجوزات
            </button>
          </>
        )}
      </div>
    </div>
  );
}
