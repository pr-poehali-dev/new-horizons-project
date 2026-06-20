import { ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const schedule = [
  { date: "2 июля", day: "Среда", time: "19:00", title: "Базовое состояние: Покой", level: "Для начинающих" },
  { date: "5 июля", day: "Суббота", time: "11:00", title: "Концентрация и ясность ума", level: "Любой уровень" },
  { date: "9 июля", day: "Среда", time: "19:00", title: "Энергия и внутренняя сила", level: "Любой уровень" },
  { date: "12 июля", day: "Суббота", time: "11:00", title: "Управляемое состояние: Бодрость", level: "Любой уровень" },
  { date: "16 июля", day: "Среда", time: "19:00", title: "Устойчивость и спокойствие", level: "Продвинутый" },
  { date: "19 июля", day: "Суббота", time: "11:00", title: "Творческий подъём", level: "Любой уровень" },
  { date: "23 июля", day: "Среда", time: "19:00", title: "Восстановление и баланс", level: "Любой уровень" },
  { date: "26 июля", day: "Суббота", time: "11:00", title: "Интенсив: работа с энергией", level: "Продвинутый" },
]

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">Расписание на месяц вперёд</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Ближайшие занятия
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Выбирайте удобную дату.</span> Занятия проходят
          по средам и субботам. Запишитесь заранее — количество мест в группе ограничено.
        </p>

        {/* Schedule list */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-zinc-800/30 transition-colors ${
                index !== schedule.length - 1 ? "border-b border-zinc-800/70" : ""
              }`}
            >
              {/* Date */}
              <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{item.date}</p>
                  <p className="text-zinc-500 text-xs">{item.day}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2 sm:w-24 flex-shrink-0">
                <Icon name="Clock" className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-300 text-sm">{item.time}</span>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p className="text-zinc-200 text-sm font-medium">{item.title}</p>
                <span className="text-zinc-500 text-xs">{item.level}</span>
              </div>

              {/* CTA */}
              <a
                href="#contacts"
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 text-sm hover:bg-zinc-700 transition-colors text-center"
              >
                Записаться
              </a>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 text-sm mt-6 text-center">
          Даты ориентировочные — пришлите своё расписание, и я обновлю его здесь.
        </p>
      </div>
    </section>
  )
}
