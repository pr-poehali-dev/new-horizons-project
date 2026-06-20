import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const agents = [
  { name: "Покой", isAgent: true, selected: true, icon: "◇" },
  { name: "Концентрация", isAgent: true, selected: false, icon: "◉" },
  { name: "Бодрость", isAgent: true, selected: false, icon: "◈" },
  { name: "Творческий подъём", isAgent: false, selected: false, icon: "○" },
  { name: "Уверенность", isAgent: true, selected: false, icon: "◎" },
  { name: "Восстановление", isAgent: false, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-zinc-400 text-sm">Базовые состояния</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Базовые состояния, которые вы освоите
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Управляйте собой осознанно.</span> На занятиях вы учитесь
            по своему желанию входить в нужное состояние — от глубокого покоя до собранной концентрации.
          </motion.p>

          {/* Learn more button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Подробнее
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Agent dropdown mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay effect */}
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Выберите состояние...</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          gap: "12px",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-400 text-lg">{agent.icon}</span>
                          <span className={agent.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {agent.name}
                          </span>
                          {agent.isAgent && (
                            <span className="text-xs bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded">базовое</span>
                          )}
                        </div>
                        {agent.selected && <Check className="w-4 h-4 text-zinc-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom divider with two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Кто ведёт занятия</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Тренировки проводит практик с многолетним опытом работы с психической
                  энергией и управляемыми состояниями.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Icon name="User" className="w-7 h-7 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-zinc-200 font-medium">Ведущий проекта «Импульс»</p>
                      <p className="text-zinc-500 text-sm">Практик управляемых состояний</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Авторская методика работы с психической энергией
                    </li>
                    <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Индивидуальный подход к каждому участнику
                    </li>
                    <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                      <Check className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Безопасные практики для любого уровня подготовки
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right column */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Где проходят занятия</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Тренировки проходят в уютном пространстве в комфортной малой группе.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 space-y-5">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 text-sm font-medium">Адрес</p>
                      <p className="text-zinc-500 text-sm">Уточните адрес — добавим его сюда</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 text-sm font-medium">Формат</p>
                      <p className="text-zinc-500 text-sm">Малые группы, очные занятия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 text-sm font-medium">Длительность</p>
                      <p className="text-zinc-500 text-sm">Около 1,5 часов одно занятие</p>
                    </div>
                  </div>
                  <a
                    href="#contacts"
                    className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900 text-sm py-2.5 rounded-md hover:bg-zinc-100 transition-colors font-medium"
                  >
                    Записаться на занятие
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}