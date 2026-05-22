import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        titulo,
        pergunta,
        identificador,
        descricao_breve,
        argumentos_a_favor,
        argumentos_contra
      FROM perguntas
      ORDER BY id
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    return NextResponse.json(
      { error: "Erro ao buscar perguntas do banco de dados" },
      { status: 500 }
    );
  }
}
