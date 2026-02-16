"use client";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main dir="rtl" className="min-h-screen bg-white text-purple-500">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

          <h1 className="font-bold text-lg">
            عيادة الدكتور أحمد عبدالكريم
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#home">الرئيسية</a>
            <a href="#about">عن الطبيب</a>
            <a href="#services">الخدمات</a>
            <a href="#contact">تواصل</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <a href="#home" className="block px-4 py-3 border-b">الرئيسية</a>
            <a href="#about" className="block px-4 py-3 border-b">عن الطبيب</a>
            <a href="#services" className="block px-4 py-3 border-b">الخدمات</a>
            <a href="#contact" className="block px-4 py-3">تواصل</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-32 pb-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          رعاية طبية موثوقة لك ولعائلتك
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-purple-400">
          طبيب عام يقدم خدمات طبية دقيقة وشاملة داخل البصرة – العراق
        </p>
        <button className="px-6 py-3 bg-purple-400 hover:bg-purple-500 active:scale-95 text-white rounded-lg transition">
          احجز موعد الآن
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">
          عن الطبيب
        </h3>
        <p className="mb-6 text-purple-400 leading-relaxed">
          الدكتور أحمد عبدالكريم طبيب عام حاصل على بكالوريوس طب وجراحة عامة،
          وأكمل تدريبه المهني في جمهورية مصر العربية.
          يمتلك خبرة واسعة في تشخيص الحالات الطبية الشائعة
          ومتابعة المرضى وفق أحدث المعايير الطبية.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <h3 className="text-2xl font-bold text-center mb-12">
          الخدمات الطبية
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-3">فحص عام شامل</h4>
            <p className="text-purple-400 text-sm">
              تقييم شامل للحالة الصحية وتشخيص دقيق للحالات اليومية.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-3">متابعة الأمراض المزمنة</h4>
            <p className="text-purple-400 text-sm">
              متابعة ضغط الدم، السكري، وأمراض القلب.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-3">استشارات طبية</h4>
            <p className="text-purple-400 text-sm">
              تقديم استشارات طبية مهنية مبنية على أسس علمية.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">
          معلومات التواصل
        </h3>

        <p className="mb-4 text-purple-400">
          الموقع: العراق – البصرة – شارع الجزائر (منطقة تجمع العيادات الطبية)
        </p>

        <p className="mb-8 text-purple-400">
          الهاتف: 0780 000 0000
        </p>

        <button className="px-6 py-3 bg-purple-400 hover:bg-purple-500 active:scale-95 text-white rounded-lg transition">
          تواصل الآن
        </button>
      </section>

    </main>
  );
}
