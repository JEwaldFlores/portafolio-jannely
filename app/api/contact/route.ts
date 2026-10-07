import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["jannelyewald@hotmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}