const services = [
  {
    title: "Starting a Business",
    desc: "Company incorporation and set-up guidance to get your venture compliant and running fast.",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
    ),
  },
  {
    title: "Accounting",
    desc: "Accurate bookkeeping, financial statements and management reporting you can rely on.",
    icon: <path d="M9 17V9m4 8V5m4 12v-6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />,
  },
  {
    title: "Virtual Office",
    desc: "A professional registered business address and office support without the overheads.",
    icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />,
  },
  {
    title: "Taxation",
    desc: "Corporate and personal tax filing, planning and advisory to keep you optimised.",
    icon: <path d="M9 7h6m-6 4h6m-6 4h4M5 3h14a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1z" />,
  },
  {
    title: "Payroll Services",
    desc: "End-to-end payroll processing, CPF and statutory submissions handled accurately.",
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  },
  {
    title: "Corporate Secretarial",
    desc: "Statutory compliance, annual returns and corporate governance support.",
    icon: <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6v4H9zM9 12h6M9 16h6" />,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-strong">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Everything your business needs, in one bureau
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive financial and corporate services designed to keep your business compliant,
            efficient and ready to grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent transition-colors group-hover:bg-[image:var(--gradient-accent)] group-hover:text-accent-foreground">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}