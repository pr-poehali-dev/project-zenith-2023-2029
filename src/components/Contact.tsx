import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="contact" className="bg-[#faf5f2] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-[#a07b6a] mb-4">Напишите нам</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#3d2e28] mb-12 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Подберём предметы<br />для вашего пространства
        </h2>

        {sent ? (
          <div className="bg-[#f0e8e4] border border-[#c9a89a] rounded-lg p-8 text-center">
            <p className="text-2xl mb-2">✦</p>
            <p className="text-[#3d2e28] text-lg font-medium">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border-b border-[#c9a89a] py-3 text-[#3d2e28] placeholder-[#b09080] outline-none focus:border-[#a07b6a] transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон или email"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="bg-transparent border-b border-[#c9a89a] py-3 text-[#3d2e28] placeholder-[#b09080] outline-none focus:border-[#a07b6a] transition-colors"
            />
            <textarea
              placeholder="Расскажите о вашем пространстве или пожеланиях"
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="bg-transparent border-b border-[#c9a89a] py-3 text-[#3d2e28] placeholder-[#b09080] outline-none focus:border-[#a07b6a] transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-4 bg-[#c9a89a] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#a07b6a] transition-colors duration-300 w-fit"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
