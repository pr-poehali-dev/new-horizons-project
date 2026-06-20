import { ChevronRight, Check } from "lucide-react"

const plans = [
  {
    name: "Разовое занятие",
    price: "1 500 ₽",
    unit: "за одно занятие",
    description: "Чтобы познакомиться с практикой и попробовать.",
    features: ["Одно занятие в группе", "Базовые техники", "Без обязательств"],
    highlighted: false,
  },
  {
    name: "Абонемент на месяц",
    price: "5 000 ₽",
    unit: "8 занятий в месяц",
    description: "Оптимально для регулярной практики и результата.",
    features: ["Все занятия месяца", "Поддержка ведущего", "Выгода до 30%", "Закрепление навыков"],
    highlighted: true,
  },
  {
    name: "Индивидуально",
    price: "3 000 ₽",
    unit: "персональное занятие",
    description: "Личная работа под ваш запрос и темп.",
    features: ["Занятие один на один", "Программа под вас", "Гибкое расписание"],
    highlighted: false,
  },
]

export function WorkflowsSection() {
  return (
    <section className="relative py-40" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Стоимость занятий</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Выберите удобный
              <br />
              формат участия
            </h2>
          </div>
          <p className="text-zinc-400 lg:max-w-xs lg:text-right">
            Прозрачные цены без скрытых платежей. Первое занятие можно посетить разово.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-7 flex flex-col ${
                plan.highlighted
                  ? "border-zinc-600 bg-zinc-800/40"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              {plan.highlighted && (
                <span className="self-start mb-4 text-xs px-3 py-1 rounded-full bg-white text-zinc-900 font-medium">
                  Популярный
                </span>
              )}
              <h3 className="text-white font-medium text-lg mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-semibold text-white">{plan.price}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-5">{plan.unit}</p>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                    <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`w-full text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "border border-zinc-700 text-white hover:bg-zinc-800"
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 text-sm mt-8 text-center">
          Цены ориентировочные — пришлите свои тарифы, и я обновлю их здесь.
        </p>
      </div>
    </section>
  )
}
