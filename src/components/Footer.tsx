import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + socials */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Импульс</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-xs">
              Тренировки управляемых состояний и работа с психической энергией.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://vk.ru/in_impuls"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="Share2" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-zinc-500">
                <Icon name="MapPin" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Адрес уточняется
              </li>
              <li className="flex items-start gap-2.5 text-zinc-500">
                <Icon name="Phone" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Телефон уточняется
              </li>
              <li>
                <a
                  href="https://vk.ru/in_impuls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Icon name="Send" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Написать в группе ВК
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4">Разделы</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "О проекте", href: "#about" },
                { label: "Базовые состояния", href: "#states" },
                { label: "Расписание", href: "#schedule" },
                { label: "Стоимость", href: "#price" },
                { label: "Записаться", href: "#contacts" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-zinc-600 text-sm">
          © {new Date().getFullYear()} Импульс — тренировки управляемых состояний
        </div>
      </div>
    </footer>
  )
}
