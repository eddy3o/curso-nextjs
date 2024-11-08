const { NextResponse } = require("next/server");

export async function GET(request) {
  return NextResponse.json({ nombre: "Soy eddy y estás en mi página, bienvenido!" });
}
