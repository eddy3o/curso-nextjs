const { NextResponse } = require("next/server");

export async function GET(request) {
  return NextResponse.json({ mensaje: "Hello world!" });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre } = body;
    console.log(nombre)
    if (!nombre) {
      return NextResponse.json({ mensaje: "no name" });
    }
    return NextResponse.json({ mensaje: `Hi ${nombre} :)` });
  } catch {
    return NextResponse.json({ error: "error" });
  }
}
