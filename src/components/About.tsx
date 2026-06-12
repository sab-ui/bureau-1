import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-accent" />
          <img
            src={aboutImg}
            alt="1-Bureau accountants reviewing financial reports"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-card)]">
            <p className="text-3xl font-bold text-accent">Since 1991</p>
            <p className="text-sm text-primary-foreground/80">Accounting expertise</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-strong">
            Welcome to 1-Bureau
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            A trusted partner for growing businesses
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We are a team of dedicated professionals providing accounting, corporate secretarial,
            taxation and payroll services. Our clients are mostly small &amp; medium sized businesses
            from a wide range of industries.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            1-Bureau was incorporated in Singapore on 24 January 2007, wholly owned by its director,
            Mary G. Thomas, who has been an accountant since 1991. The principal activities of the
            company are to provide accounting, taxation and corporate secretarial services.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Experienced, dedicated team",
              "Tailored for SMEs",
              "Wide industry experience",
              "Reliable & compliant",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-strong">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}