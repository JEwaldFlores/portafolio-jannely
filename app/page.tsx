import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navegación */}
      {/* Navegación */}

<nav className="mx-auto max-w-7xl px-6 py-8 md:px-10">
  <div className="flex items-center justify-between">
    <a href="#" className="text-xl font-semibold tracking-tight">
      JE.
    </a>

    {/* Navegación de escritorio */}
    <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.14em] text-[#666666] md:flex">
      <a className="transition hover:text-[#315c4c]" href="#about">
        Sobre mí
      </a>
      <a className="transition hover:text-[#315c4c]" href="#stack">
        Stack
      </a>
      <a className="transition hover:text-[#315c4c]" href="#projects">
        Proyectos
      </a>
      <a className="transition hover:text-[#315c4c]" href="#experience">
        Experiencia
      </a>
      <a className="transition hover:text-[#315c4c]" href="#contact">
        Contacto
      </a>
    </div>

    {/* Botón de menú móvil */}
    <details className="group relative md:hidden">
      <summary
        aria-label="Abrir menú de navegación"
        className="flex cursor-pointer list-none items-center justify-center rounded-full border border-[#d9d9d3] p-3 text-[#171717] [&::-webkit-details-marker]:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </summary>

      <div className="absolute right-0 top-full z-50 mt-3 flex w-48 flex-col gap-5 rounded-2xl border border-[#e5e5df] bg-[#f7f7f5] p-5 text-xs font-medium uppercase tracking-[0.12em] text-[#666666] shadow-lg">
        <a className="hover:text-[#315c4c]" href="#about">
          Sobre mí
        </a>
        <a className="hover:text-[#315c4c]" href="#stack">
          Stack
        </a>
        <a className="hover:text-[#315c4c]" href="#projects">
          Proyectos
        </a>
        <a className="hover:text-[#315c4c]" href="#experience">
          Experiencia
        </a>
        <a className="hover:text-[#315c4c]" href="#contact">
          Contacto
        </a>
      </div>
    </details>
  </div>
</nav>

     
{/* Hero */}
<section className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-12 md:px-10 md:py-16">
  <div className="w-full min-w-0 max-w-5xl">
    <p className="mb-6 text-[clamp(18px,5.5vw,30px)] font-medium uppercase tracking-[0.12em] text-[#315c4c] md:tracking-[0.22em]">
      Jannely Ewald
    </p>

    <h1 className="max-w-4xl text-[clamp(35px,9vw,48px)] font-semibold leading-[1.08] tracking-[-0.04em] wrap-break-word md:text-7xl md:leading-[1.05] lg:text-8xl">
      Backend Developer
      <span className="block text-[#777771]">
        & Full Stack Developer
      </span>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-7 text-[#666666] md:text-xl md:leading-8">
      Construyo aplicaciones web robustas y escalables, combinando
      desarrollo backend con una visión estratégica de marketing y negocio.
    </p>

    <p className="mt-6 text-sm font-medium tracking-wide text-[#315c4c]">
      Backend · Full Stack · Marketing
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white! transition hover:opacity-80"
      >
        Ver proyectos
      </a>

      <a
        href="/Jannely-Ewald-CV.pdf"
        download="Jannely-Ewald-CV.pdf"
        className="rounded-full border border-[#c9c9c3] px-6 py-3 text-sm font-medium transition hover:border-[#171717]"
      >
        Descargar CV
      </a>
    </div>
  </div>
</section>
            {/* Sobre mí */}
      

{/* Sobre mí */}
<section
  id="about"
  className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-24 md:px-10 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#315c4c]">
        Sobre mí
      </p>
    </div>

    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
        Desarrollo tecnología con una visión que también entiende
        al usuario y al negocio.
      </h2>

      <p className="mt-8 text-base leading-7 text-justify hyphens-auto text-[#666666] md:text-lg md:leading-8">
        Soy desarrolladora especializada en backend, con experiencia
        construyendo aplicaciones con Node.js, NestJS, TypeScript y
        PostgreSQL. También cuento con conocimientos de React y Next.js,
        lo que me permite trabajar en soluciones full stack.
      </p>

      <p className="mt-5 text-base leading-7 text-justify hyphens-auto text-[#666666] md:text-lg md:leading-8">
        Mi formación en Marketing complementa mi perfil técnico con una
        perspectiva estratégica, ayudándome a comprender no solo cómo
        construir una solución, sino también qué necesidad del usuario
        y del negocio busca resolver.
      </p>
    </div>
  </div>
</section>
       
{/* Stack técnico */}
<section
  id="stack"
  className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-24 md:px-10 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#315c4c]">
        Stack técnico
      </p>
    </div>

    <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
      {/* 01 - Backend */}
      <div className="relative min-w-0 rounded-2xl p-5 sm:p-8">
        {/* Línea superior */}
        <div className="absolute left-4 right-4 top-0 border-t border-[#c9c9c3]" />

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-4 right-4 border-b border-[#c9c9c3]" />

        {/* Lateral izquierdo */}
        <div
          className="absolute bottom-4 left-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Lateral derecho */}
        <div
          className="absolute bottom-4 right-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Título */}
        <div className="mb-7">
          <span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#315c4c]">
            01
          </span>

          <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#3f3f3b]">
            Backend
          </h3>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["Node.js", "NestJS", "Express", "TypeScript", "TypeORM"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] transition hover:border-[#315c4c] hover:text-[#315c4c] sm:px-4"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* 02 - Frontend */}
      <div className="relative min-w-0 rounded-2xl p-5 sm:p-8">
        {/* Línea superior */}
        <div className="absolute left-4 right-4 top-0 border-t border-[#c9c9c3]" />

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-4 right-4 border-b border-[#c9c9c3]" />

        {/* Lateral izquierdo */}
        <div
          className="absolute bottom-4 left-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Lateral derecho */}
        <div
          className="absolute bottom-4 right-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Título */}
        <div className="mb-7">
          <span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#315c4c]">
            02
          </span>

          <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#3f3f3b]">
            Frontend
          </h3>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["React", "Next.js", "JavaScript", "HTML", "CSS"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] transition hover:border-[#315c4c] hover:text-[#315c4c] sm:px-4"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* 03 - Bases de datos */}
      <div className="relative min-w-0 rounded-2xl p-5 sm:p-8">
        {/* Línea superior */}
        <div className="absolute left-4 right-4 top-0 border-t border-[#c9c9c3]" />

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-4 right-4 border-b border-[#c9c9c3]" />

        {/* Lateral izquierdo */}
        <div
          className="absolute bottom-4 left-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Lateral derecho */}
        <div
          className="absolute bottom-4 right-0 top-4"
          style={{
            width: "1px",
            backgroundImage:
              "linear-gradient(#8fa49b 50%, transparent 50%)",
            backgroundSize: "1px 16px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* Título */}
        <div className="mb-7">
          <span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#315c4c]">
            03
          </span>

          <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#3f3f3b]">
            Bases de datos
          </h3>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["PostgreSQL", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] transition hover:border-[#315c4c] hover:text-[#315c4c] sm:px-4"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 05 - Metodologías */}
<div className="relative min-w-0 rounded-2xl p-5 sm:p-8">
  {/* Línea superior */}
  <div className="absolute left-4 right-4 top-0 border-t border-[#c9c9c3]" />

  {/* Línea inferior */}
  <div className="absolute bottom-0 left-4 right-4 border-b border-[#c9c9c3]" />

  {/* Lateral izquierdo */}
  <div
    className="absolute bottom-4 left-0 top-4"
    style={{
      width: "1px",
      backgroundImage: "linear-gradient(#8fa49b 50%, transparent 50%)",
      backgroundSize: "1px 16px",
      backgroundRepeat: "repeat-y",
    }}
  />

  {/* Lateral derecho */}
  <div
    className="absolute bottom-4 right-0 top-4"
    style={{
      width: "1px",
      backgroundImage: "linear-gradient(#8fa49b 50%, transparent 50%)",
      backgroundSize: "1px 16px",
      backgroundRepeat: "repeat-y",
    }}
  />

  {/* Título */}
  <div className="mb-7">
    <span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#315c4c]">
      05
    </span>

    <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#3f3f3b]">
      Metodologías
    </h3>
  </div>

  <div className="flex flex-wrap gap-2 sm:gap-3">
    {["Scrum"].map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] transition hover:border-[#315c4c] hover:text-[#315c4c] sm:px-4"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

{/* 06 - Diseño UX/UI */}
<div className="relative min-w-0 rounded-2xl p-5 sm:p-8">
  {/* Línea superior */}
  <div className="absolute left-4 right-4 top-0 border-t border-[#c9c9c3]" />

  {/* Línea inferior */}
  <div className="absolute bottom-0 left-4 right-4 border-b border-[#c9c9c3]" />

  {/* Lateral izquierdo */}
  <div
    className="absolute bottom-4 left-0 top-4"
    style={{
      width: "1px",
      backgroundImage: "linear-gradient(#8fa49b 50%, transparent 50%)",
      backgroundSize: "1px 16px",
      backgroundRepeat: "repeat-y",
    }}
  />

  {/* Lateral derecho */}
  <div
    className="absolute bottom-4 right-0 top-4"
    style={{
      width: "1px",
      backgroundImage: "linear-gradient(#8fa49b 50%, transparent 50%)",
      backgroundSize: "1px 16px",
      backgroundRepeat: "repeat-y",
    }}
  />

  {/* Título */}
  <div className="mb-7">
    <span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#315c4c]">
      06
    </span>

    <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-[#3f3f3b]">
      Diseño UX/UI
    </h3>
  </div>

  <div className="flex flex-wrap gap-2 sm:gap-3">
    {["Figma", "Illustrator", "Photoshop"].map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] transition hover:border-[#315c4c] hover:text-[#315c4c] sm:px-4"
      >
        {tech}
      </span>
    ))}
  </div>
</div>
    </div>
  </div>
</section>
        
{/* Proyectos */}
<section
  id="projects"
  className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-24 md:px-10 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
    {/* Título de sección */}
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#315c4c]">
        Proyectos
      </p>
    </div>

    {/* Introducción */}
    <div className="min-w-0 max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
        Proyectos donde el backend se convierte en producto.
      </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-justify hyphens-auto text-[#666666] md:text-lg md:leading-8">
            Una selección de aplicaciones en las que he trabajado construyendo
            APIs, lógica de negocio, bases de datos e integraciones, participando
            también en soluciones full stack.
          </p>
    </div>
  </div>

  {/* Proyecto 01 — TrainUp */}
  <div className="mt-20 border-t border-[#deded9] pt-12 md:mt-28 md:pt-16">
    {/* Número */}
    <div className="mb-10 flex items-center gap-5">
      <span className="text-sm font-medium tracking-[0.22em] text-[#315c4c]">
        01
      </span>

      <div className="h-px w-20 bg-[#c9c9c3]" />

      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#315c4c]">
        Proyecto
      </span>
    </div>

    {/* Contenido principal */}
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
      {/* Información */}
      <div className="min-w-0">
        <h3 className="wrap-break-word text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
          TrainUp
        </h3>

        <p className="mt-4 text-sm font-medium uppercase italic tracking-[0.18em] text-[#777771]">
          Plataforma de gestión para gimnasios
        </p>

        <p className="mt-8 max-w-xl text-justify hyphens-auto text-base leading-7 text-[#666666]">
          Aplicación web para la gestión integral de gimnasios, desarrollada
          para administrar usuarios, membresías, pagos y clases mediante una
          arquitectura backend modular, segura y escalable.
        </p>

        {/* Mi participación */}
        <div className="mt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Mi participación
          </p>

          <ul className="space-y-3 text-sm leading-6 text-[#666666]">
            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Desarrollo de API REST con NestJS
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Diseño y gestión de base de datos con PostgreSQL y TypeORM
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Autenticación y gestión de roles con JWT
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Integración de pagos y suscripciones con Stripe
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Automatizaciones con CRON y Nodemailer
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Documentación de endpoints con Swagger
            </li>
          </ul>
        </div>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap gap-4">
         {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white! transition hover:opacity-80"
          >
            Ver proyecto ↗
          </a> */}

         <a
            href="https://github.com/JEwaldFlores/TrainUp-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#c9c9c3] px-6 py-3 text-sm font-medium transition hover:border-[#315c4c] hover:text-[#315c4c]"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Preview del proyecto */}
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-[#deded9] bg-[#efefeb]">
          {/* Barra estilo navegador */}
          <div className="flex h-11 items-center border-b border-[#deded9] bg-[#f7f7f5] px-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
            </div>

            <div className="mx-auto rounded-full border border-[#deded9] px-10 py-1 text-[10px] text-[#777771]">
              trainup
            </div>
          </div>

         {/* Imagen del proyecto */}
          <img
            src="/trainup.jpg"
            alt="Vista previa del proyecto TrainUp"
            className="block w-full h-auto"
          />
        </div>

        {/* Tecnologías */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Tecnologías
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "NestJS",
              "TypeScript",
              "PostgreSQL",
              "TypeORM",
              "JWT",
              "Stripe",
              "Nodemailer",
              "Swagger",
              "CRON",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] sm:px-4"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Proyecto 02 — E-commerce Backend */}
  <div className="mt-24 border-t border-[#deded9] pt-12 md:mt-32 md:pt-16">
    {/* Número */}
    <div className="mb-10 flex items-center gap-5">
      <span className="text-sm font-medium tracking-[0.22em] text-[#315c4c]">
        02
      </span>

      <div className="h-px w-20 bg-[#c9c9c3]" />

      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#315c4c]">
        Proyecto
      </span>
    </div>

    {/* Contenido principal */}
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
      {/* Información */}
      <div className="min-w-0">
        <h3 className="wrap-break-word text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
          E-commerce Backend
        </h3>

        <p className="mt-4 text-sm font-medium uppercase italic tracking-[0.18em] text-[#777771]">
          API REST para plataforma de comercio electrónico
        </p>

        <p className="mt-8 max-w-xl text-justify hyphens-auto text-base leading-7 text-[#666666]">
          Backend para una plataforma de comercio electrónico, desarrollado
          para gestionar productos, categorías, usuarios y órdenes mediante
          una arquitectura modular y una API REST documentada.
        </p>

        {/* Mi participación */}
        <div className="mt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Mi participación
          </p>

          <ul className="space-y-3 text-sm leading-6 text-[#666666]">
            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Desarrollo de API REST con NestJS y TypeScript
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Gestión de productos, categorías, usuarios y órdenes
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Autenticación y protección de rutas con JWT
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Persistencia de datos con PostgreSQL y TypeORM
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Implementación de carga de imágenes
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Documentación de endpoints con Swagger
            </li>
          </ul>
        </div>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://e-commerce-19fb.onrender.com/API"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white! transition hover:opacity-80"
          >
            Ver proyecto ↗
          </a>

          <a
            href="https://github.com/JEwaldFlores/e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#c9c9c3] px-6 py-3 text-sm font-medium transition hover:border-[#315c4c] hover:text-[#315c4c]"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Preview del proyecto */}
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-[#deded9] bg-[#efefeb]">
          {/* Barra estilo navegador */}
          <div className="flex h-11 items-center border-b border-[#deded9] bg-[#f7f7f5] px-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
            </div>

            <div className="mx-auto rounded-full border border-[#deded9] px-10 py-1 text-[10px] text-[#777771]">
              e-commerce
            </div>
          </div>

          
          {/* Imagen del proyecto */}
          <img
            src="/ecommerce-backend.png"
            alt="Documentación Swagger de la API E-commerce Backend"
            className="block w-full h-auto"
          />
        </div>

        {/* Tecnologías */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Tecnologías
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "NestJS",
              "TypeScript",
              "PostgreSQL",
              "TypeORM",
              "JWT",
              "Swagger",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] sm:px-4"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Proyecto 03 — Balance Studio */}
  <div className="mt-24 border-t border-[#deded9] pt-12 md:mt-32 md:pt-16">
    {/* Número */}
    <div className="mb-10 flex items-center gap-5">
      <span className="text-sm font-medium tracking-[0.22em] text-[#315c4c]">
        03
      </span>

      <div className="h-px w-20 bg-[#c9c9c3]" />

      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#315c4c]">
        Proyecto
      </span>
    </div>

    {/* Contenido principal */}
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
      {/* Información */}
      <div className="min-w-0">
        <h3 className="wrap-break-word text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Balance Studio
        </h3>

        <p className="mt-4 text-sm font-medium uppercase italic tracking-[0.18em] text-[#777771]">
          Aplicación full stack de reservas de turnos
        </p>

        <p className="mt-8 max-w-xl text-justify hyphens-auto text-base leading-7 text-[#666666]">
          Aplicación web full stack para la gestión de reservas de turnos,
          desarrollada integrando backend, base de datos y una interfaz
          frontend para ofrecer un flujo completo de registro, consulta,
          agendado y cancelación.
        </p>

        {/* Mi participación */}
        <div className="mt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Mi participación
          </p>

          <ul className="space-y-3 text-sm leading-6 text-[#666666]">
            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Desarrollo del backend con Node.js, Express y TypeScript
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Persistencia de datos con PostgreSQL y TypeORM
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Implementación del flujo de registro y gestión de usuarios
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Lógica de negocio para agendar y cancelar turnos
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Desarrollo de interfaz con React y Vite
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
              Integración frontend y backend mediante Axios
            </li>
          </ul>
        </div>

                {/* Botones */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://reservas-turnos-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white! transition hover:opacity-80"
          >
            Ver proyecto ↗
          </a>

          <a
            href="https://github.com/JEwaldFlores/Reservas-Turnos"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#c9c9c3] px-6 py-3 text-sm font-medium transition hover:border-[#315c4c] hover:text-[#315c4c]"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Preview del proyecto */}
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-[#deded9] bg-[#efefeb]">
          {/* Barra estilo navegador */}
          <div className="flex h-11 items-center border-b border-[#deded9] bg-[#f7f7f5] px-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
            </div>

            <div className="mx-auto rounded-full border border-[#deded9] px-10 py-1 text-[10px] text-[#777771]">
              balance studio
            </div>
          </div>
          
          {/* Imagen de Balance Studio */}
          <div className="overflow-hidden">
            <img
              src="/balancestudio.png"
              alt="Balance Studio - Aplicación de reservas de turnos"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Tecnologías */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
            Tecnologías
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express",
              "TypeScript",
              "PostgreSQL",
              "TypeORM",
              "React",
              "Vite",
              "Axios",
              "Formik",
              "CSS Modules",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] sm:px-4"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
{/* Experiencia */}
<section
  id="experience"
  className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-24 md:px-10 md:py-32"
>
  {/* Encabezado */}
  <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#315c4c]">
        Experiencia
      </p>
    </div>

    <div className="min-w-0 max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
        Experiencia construyendo soluciones en entornos reales de desarrollo.
      </h2>

      <p className="mt-8 max-w-2xl text-justify hyphens-auto text-base leading-7 text-[#666666] md:text-lg md:leading-8">
        Mi trayectoria combina desarrollo backend con experiencia en
        marketing, aportando una perspectiva técnica orientada también
        al usuario y a los objetivos de negocio.
      </p>
    </div>
  </div>

  {/* Timeline */}
  <div className="mt-20 md:mt-28">
    <div className="relative border-l border-[#c9c9c3] pl-5 sm:pl-8 md:pl-12">
      {/* Punto del timeline */}
      <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#315c4c]" />

      {/* TRAMA */}
      <article className="pb-16">
        <div className="grid min-w-0 gap-8 md:grid-cols-[150px_1fr] md:gap-12">
          {/* Fecha */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315c4c]">
              Abril 2026
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#777771]">
              Remoto
            </p>
          </div>

          {/* Información + Preview */}
          <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* Columna izquierda */}
            <div className="min-w-0">
              {/* Nombre + tipo de experiencia */}
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  TRAMA
                </h3>

                <span className="rounded-full bg-[#e4e8e3] px-4 py-1.5 text-xs font-medium text-[#315c4c]">
                  Práctica profesional
                </span>
              </div>

              {/* Puesto */}
              <p className="mt-3 text-lg font-medium text-[#3f3f3b]">
                Backend Developer
              </p>

              {/* Descripción */}
              <p className="mt-6 text-justify hyphens-auto text-base leading-7 text-[#666666]">
                Participé como Backend Developer en el desarrollo de una
                aplicación web, construyendo funcionalidades relacionadas con
                autenticación, onboarding, cuestionarios, perfiles y gestión
                de roles mediante una arquitectura backend modular.
              </p>

              {/* Responsabilidades */}
              <div className="mt-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
                  Responsabilidades
                </p>

                <ul className="space-y-3 text-sm leading-6 text-[#666666]">
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Desarrollo backend con NestJS y TypeScript
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Implementación de autenticación y autorización con JWT
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Desarrollo de módulos de onboarding y cuestionarios
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Gestión de usuarios, perfiles y roles
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Modelado de entidades y persistencia con PostgreSQL y
                    TypeORM
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Validación de datos mediante DTOs
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315c4c]" />
                    Documentación de endpoints con Swagger
                  </li>
                </ul>
                                {/* Botón del proyecto */}
                <div className="mt-10">
                  <a
                    href="https://trama-web.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white! transition hover:opacity-80"
                  >
                    Ver proyecto ↗
                  </a>
                </div>

              </div>
            </div>

            {/* Columna derecha */}
            <div className="min-w-0 lg:pt-1">
              {/* Preview de TRAMA */}
              <div className="overflow-hidden rounded-2xl border border-[#deded9] bg-[#efefeb]">
                {/* Barra estilo navegador */}
                <div className="flex h-11 items-center border-b border-[#deded9] bg-[#f7f7f5] px-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c9c9c3]" />
                  </div>

                  <div className="mx-auto rounded-full border border-[#deded9] px-8 py-1 text-[10px] text-[#777771] sm:px-10">
                    trama
                  </div>
                </div>

                {/* Imagen del proyecto */}
                <img
                  src="/trama.png"
                  alt="Vista previa del proyecto TRAMA"
                  className="block w-full h-auto"
                />
              </div>

              {/* Pie de imagen */}
              <p className="mt-4 text-xs leading-5 text-[#777771]">
                Vista de la aplicación desarrollada durante mi práctica
                profesional.
              </p>

              {/* Tecnologías */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3f3f3b]">
                  Tecnologías
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "NestJS",
                    "TypeScript",
                    "PostgreSQL",
                    "TypeORM",
                    "JWT",
                    "Swagger",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#c9c9c3] px-3 py-2 text-sm text-[#555550] sm:px-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
                  {/* Contacto */}
<section
  id="contact"
  className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-24 md:px-10 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">

    {/* Título lateral */}
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#315c4c]">
        Contacto
      </p>
    </div>

    {/* Contenido */}
    <div className="max-w-4xl">

      <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-6xl">
        ¿Construimos algo
        <span className="block text-[#777771]">
          juntos?
        </span>
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-justify hyphens-auto text-[#666666]">
        Estoy abierta a oportunidades donde pueda aportar desde el desarrollo
        backend y full stack, participar en nuevos retos y seguir construyendo
        productos con impacto real.
      </p>

      {/* Contacto y redes */}
<div className="mt-12 border-y border-[#deded9] py-8">
  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#315c4c]">
    Conectemos
  </p>

  <div className="flex flex-wrap gap-x-10 gap-y-5">

    <a
      href="mailto:jannelyewald@hotmail.com"
      className="group flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-[#555550] transition hover:text-[#315c4c]"
    >
      Email
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>

    <a
      href="https://www.linkedin.com/in/jannely-ewald-flores-21793b387"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-[#555550] transition hover:text-[#315c4c]"
    >
      LinkedIn
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>

    <a
      href="https://github.com/JEwaldFlores"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-[#555550] transition hover:text-[#315c4c]"
    >
      GitHub
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>

  </div>
{/* Formulario de contacto */}
<ContactForm />
</div>

    </div>
  </div>
</section>
                  {/* Footer */}
<footer className="mx-auto max-w-7xl border-t border-[#deded9] px-6 py-8 md:px-10">
  <div className="flex flex-col gap-5 text-sm text-[#777771] md:flex-row md:items-center md:justify-between">

    {/* Identidad */}
    <a
      href="#"
      className="text-lg font-semibold tracking-tight text-[#171717] transition hover:text-[#315c4c]"
    >
      JE.
    </a>

    {/* Copyright */}
    <p className="text-xs uppercase tracking-[0.14em]">
      © 2026 Jannely Ewald
    </p>

    {/* Desarrollo */}
    <p className="text-xs tracking-wide">
      Diseñado & desarrollado por{" "}
      <span className="font-medium text-[#315c4c]">
        Jannely Ewald
      </span>
    </p>

  </div>
</footer>
{/* Volver arriba */}


<a
  href="#"
  aria-label="Volver al inicio"
  className="fixed bottom-3 right-3 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-[#c9c9c3] bg-[#f7f7f5]/90 text-lg text-[#315c4c] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315c4c] hover:bg-[#315c4c] hover:!text-white active:border-[#315c4c] active:bg-[#315c4c] active:!text-white md:bottom-6 md:right-6 md:h-12 md:w-12 md:text-xl"
>
  ↑
</a>
    </main>
  );
}