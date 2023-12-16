import {
  IconBug,
  IconCloudRain,
  IconDiscount,
  IconFlame,
  IconGift,
  IconHeartFilled,
  IconHeartShare,
  IconMoodSad,
  IconReceiptTax,
  IconStorm,
  IconSun,
  IconTrophy,
} from "@tabler/icons-react";

export type TTarget =
  | "all"
  | "highest-reputation"
  | "lowest-reputation"
  | "highest-half"
  | "lowest-half";

export type TEvent = {
  name: string;
  description: string;
  icon: JSX.Element;
  affects: TTarget;
  type: "positive" | "negative";
};

export const events: TEvent[] = [
  {
    name: "Chuva Benevolente",
    description:
      "Uma chuva suave e benéfica cai sobre suas plantações, todos movem um campo de plantação para frente.",
    icon: <IconCloudRain />,
    affects: "all",
    type: "positive",
  },
  {
    name: "Promoção na Cidade",
    description:
      "Um mercador amigável oferece descontos, permitindo que você compre um item no mercado com 50% de desconto.",
    icon: <IconDiscount />,
    affects: "all",
    type: "positive",
  },

  {
    name: "Benfeitor",
    description:
      "O incrível mercador com maior influência decide ajudar aquele com menor influência com 2 recursos. (Ou perde 2 reputação)",
    icon: <IconHeartShare />,
    affects: "highest-reputation",
    type: "negative",
  },
  {
    name: "Tempestade",
    description:
      "Uma forte tempestade atinge a cidade. A mina e o mar estão bloqueados.",
    icon: <IconStorm />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Dia Triste",
    description:
      "Hoje o dia amanhaceu esquisito, a população de Mercantil não está no clima. Todos devem deixar um trabalhador descansar.",
    icon: <IconMoodSad />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Incêndio na Floresta",
    description:
      "Um incêndio atinge a floresta, posicione um token de destruição no local",
    icon: <IconFlame />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Acidente na Forja",
    description: "Posicione um token de destruição no local",
    icon: <IconFlame />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Deslizamento na Mina",
    description: "Posicione um token de destruição no local",
    icon: <IconFlame />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Acidente na Fábrica",
    description: "Posicione um token de destruição no local",
    icon: <IconFlame />,
    affects: "all",
    type: "negative",
  },
  {
    name: "Presente Surpresa",
    description:
      "O jogador com menor influência recebe um presente: uma semente à sua escolha.",
    icon: <IconGift />,
    affects: "lowest-reputation",
    type: "positive",
  },

  {
    name: "Campeonato de montaria",
    description: `Mercadores que possuem animais, podem participar do campeonato de corrida montada. Joga-se os dados para definir o vencedor. \n
      Galinha: D4 \n
      Ovelha: D6 \n
      Vaca: D8 \n
      Cavalo: D10 \n

      Todo jogador com animal deve pagar 1 prata e participar. O vencedor leva todo o premio.
      `,
    icon: <IconTrophy />,
    affects: "all",
    type: "positive",
  },

  {
    name: "Sol Escaldante",
    description: `Um calor muito forte atinge a cidade, mercadores que decidam trabalhar hoje devem pagar 1 saco de moeda de prata extra.
      `,
    icon: <IconSun />,
    affects: "all",
    type: "negative",
  },

  {
    name: "Impostos",
    description: `Jogadores com mais que 10 sacos de moeda devem pagar 3 sacos de moeda. Jogadores com mais que 20 sacos de moeda devem pagar 6 sacoes de moeda. Assim sucetivamente.
      `,
    icon: <IconReceiptTax />,
    affects: "all",
    type: "negative",
  },

  {
    name: "Campeonato de Pesca",
    description: `Não há limite de trabalhadores na área de pesca. O jogador que pescar um peixe vermelho, ou até um tubarão vermelho, vence o campeonato.
    Não existe taxa de entrada, o vencedor recebe 2 sacolas de ouro.`,
    icon: <IconReceiptTax />,
    affects: "all",
    type: "negative",
  },

  {
    name: "Invasão de Pragas",
    description: `Uma infestação de pragas ataca as plantações. Todos removem a semente mais à direita. `,
    icon: <IconBug />,
    affects: "all",
    type: "negative",
  },

  {
    name: "Doença no Curral",
    description: `Jogadores devem deixar todos os trabalhadores no curral caso não queiram perder um animal à escolha.`,
    icon: <IconBug />,
    affects: "all",
    type: "negative",
  },

  {
    name: "Dia do Amor",
    description: `Ao cruzar animais, existe um terço de chance de nascer um filho extra.`,
    icon: <IconHeartFilled />,
    affects: "all",
    type: "negative",
  },
];
