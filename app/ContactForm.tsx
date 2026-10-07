"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-14 border-t-2 border-[#315c4c] bg-[#e5e5e1] px-6 py-8 sm:px-8 sm:py-10">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#315c4c]">
        Envíame un mensaje
      </p>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid gap-7 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#555550]"
            >
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border-0 border-b border-[#c9c9c3] bg-transparent px-0 py-3 text-sm text-[#3f3f3b] outline-none transition focus:border-[#315c4c]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#555550]"
            >
               email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-0 border-b border-[#c9c9c3] bg-transparent px-0 py-3 text-sm text-[#3f3f3b] outline-none transition focus:border-[#315c4c]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#555550]"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            rows={2}
            required
            className="w-full resize-none border-0 border-b border-[#c9c9c3] bg-transparent px-0 py-3 text-sm text-[#3f3f3b] outline-none transition focus:border-[#315c4c]"
          />

        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje ↗"}
        </button>

        {status === "success" && (
          <p className="text-sm text-[#315c4c]">
            Mensaje enviado correctamente. ¡Gracias por contactarme!
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-700">
            No se pudo enviar el mensaje. Inténtalo nuevamente.
          </p>
        )}
      </form>
    </div>
  );
}