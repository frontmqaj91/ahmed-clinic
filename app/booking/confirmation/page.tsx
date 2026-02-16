"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ConfirmationContent() {
  const searchParams = useSearchParams();

  const phone = searchParams.get("phone");
  const day = searchParams.get("day");
  const time = searchParams.get("time");

  useEffect(() => {
    if (!phone || !day || !time) return;

    const newBooking = {
      id: Date.now(),
      phone,
      day,
      time,
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings") || "[]");

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );
  }, [phone, day, time]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          تم تأكيد الحجز بنجاح
        </h2>

        <p className="mb-2">تم إرسال رسالة نصية إلى الرقم:</p>
        <p className="font-bold mb-4">{phone}</p>

        <p>اليوم: {day}</p>
        <p className="mb-6">الساعة: {time}</p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            الصفحة الرئيسية
          </Link>

          <Link
            href="/dashboard"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            لوحة التحكم
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
