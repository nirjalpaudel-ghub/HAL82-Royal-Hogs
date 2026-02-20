import React from "react";

const Features = () => {
  const cards = [
    {
      title: "Lightning Fast",
      desc: "Built on an edge network to guarantee sub-millisecond response times globally.",
      icon: "⚡",
    },
    {
      title: "Bank-grade Security",
      desc: "Encrypted at rest and in transit. Your data never leaves our secure vaults.",
      icon: "🔒",
    },
    {
      title: "Seamless Integration",
      desc: "Connect with your favorite tools in one click. No coding required.",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="features"
      className="px-6 py-16 md:px-8 md:py-24 max-w-7xl mx-auto"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why choose us?
        </h2>
        <p className="text-[#F59E0B] font-medium tracking-wide uppercase text-sm">
          Everything you need to scale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#3B82F6]/50 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 bg-[#0B1220] rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
