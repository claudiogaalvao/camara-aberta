import { NextResponse } from "next/server";

interface DeputadoAPI {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
}

interface Deputado {
  nome: string;
  estado: string;
  partido: string;
}

export async function GET() {
  try {
    const response = await fetch(
      "https://dadosabertos.camara.leg.br/api/v2/deputados",
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Falha ao buscar dados da Câmara" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const deputados: Deputado[] = data.dados.map((dep: DeputadoAPI) => ({
      nome: dep.nome,
      estado: dep.siglaUf,
      partido: dep.siglaPartido,
    }));

    return NextResponse.json(deputados);
  } catch (error) {
    console.error("Erro ao buscar deputados:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
