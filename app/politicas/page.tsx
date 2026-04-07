import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidade, Termos e LGPD — Marcão AI",
  description: "Política de Privacidade, Termos de Uso e conformidade com a Lei Geral de Proteção de Dados (LGPD) do Marcão AI.",
};

const SECTIONS = [
  {
    id: "privacidade",
    title: "Política de Privacidade",
    content: [
      {
        subtitle: "Quais dados coletamos",
        text: "Coletamos apenas os dados necessários para a prestação do serviço de coaching via WhatsApp: nome, número de telefone, informações de saúde e condicionamento físico fornecidas voluntariamente durante o onboarding (altura, peso, histórico de lesões, objetivos), e fotos enviadas para análise de progresso (Vision AI). Mediante a sua autorização expressa (OAuth2), também coletamos dados passivos de saúde e atividade física através da integração com o Strava e Google Fit (incluindo passos diários, frequência cardíaca, rotas e histórico de treinos) para alimentar o nosso sistema de 'Guardião de Saúde'.",
      },
      {
        subtitle: "Como usamos seus dados",
        text: "Seus dados são utilizados exclusivamente para personalizar o coaching, gerar desafios mensais, relatórios de progresso e análises de saúde. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.",
      },
      {
        subtitle: "Armazenamento e segurança",
        text: "Os dados são armazenados em servidores seguros com criptografia em trânsito (TLS) e em repouso. Utilizamos Criptografia de Padrão Militar (AES-256) no momento do recebimento das fotos de avaliação física. Nenhuma foto bruta fica acessível visualmente nos nossos servidores antes de ser processada de forma segura pela API de Visão (OpenAI). As imagens não são armazenadas permanentemente após a análise processada.",
      },
      {
        subtitle: "Período de retenção",
        text: "Seus dados são mantidos enquanto você for usuário ativo. Após o cancelamento, os dados pessoais são eliminados em até 30 dias, salvo obrigação legal de retenção.",
      },
      {
        subtitle: "Compartilhamento com terceiros",
        text: "Utilizamos os seguintes processadores de dados: OpenAI (processamento de linguagem natural e visão computacional), Stripe (processamento de pagamentos, sujeito à política de privacidade da Stripe), Meta/WhatsApp Business API (canal de comunicação). Nenhum dado é comercializado.",
      },
      {
        subtitle: "Conformidade com a Política de Dados do Google (Limited Use)",
        text: (
          <>
            O uso e a transferência para qualquer outro aplicativo das informações recebidas das APIs do Google aderem à{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-brand-lime hover:underline">
              Política de Dados do Usuário dos Serviços de API do Google
            </a>
            , incluindo os requisitos de Uso Limitado (Limited Use). Os dados de saúde do Google Fit são consumidos exclusivamente para personalizar os treinos e feedbacks gerados pela Inteligência Artificial e jamais serão utilizados para servir anúncios ou vendidos para corretores de dados.
          </>
        ),
      },
    ],
  },
  {
    id: "termos",
    title: "Termos de Uso",
    content: [
      {
        subtitle: "Natureza do serviço",
        text: "O Marcão AI é um serviço de coaching esportivo baseado em inteligência artificial, fornecido exclusivamente através do WhatsApp. Não substitui acompanhamento médico, fisioterapeuta ou nutricionista. Em caso de dúvidas de saúde, consulte um profissional habilitado.",
      },
      {
        subtitle: "Elegibilidade",
        text: "O serviço é destinado a maiores de 18 anos ou menores de 18 com autorização expressa dos responsáveis. Ao iniciar o onboarding, você confirma que está ciente dos termos e que as informações fornecidas são verdadeiras.",
      },
      {
        subtitle: "Responsabilidades do usuário",
        text: "Você é responsável pela veracidade das informações de saúde fornecidas. Não utilize o serviço se tiver condição médica que impeça a prática de exercícios sem autorização médica. O Marcão AI não se responsabiliza por lesões decorrentes da não divulgação de limitações de saúde.",
      },
      {
        subtitle: "Pagamento e cancelamento",
        text: "O serviço é cobrado mensalmente. Você pode cancelar a qualquer momento sem multa ou carência. O acesso continua ativo até o fim do período pago. Reembolsos são analisados caso a caso.",
      },
      {
        subtitle: "Propriedade intelectual",
        text: "Todo o conteúdo gerado pelo Marcão AI (planos, desafios, análises) é propriedade da plataforma. O conteúdo gerado pelo usuário (fotos, mensagens) permanece de propriedade do usuário, com licença de uso para fins de coaching.",
      },
    ],
  },
  {
    id: "lgpd",
    title: "LGPD — Lei Geral de Proteção de Dados",
    content: [
      {
        subtitle: "Base legal para tratamento",
        text: "O tratamento dos seus dados pessoais é realizado com base na execução do contrato de prestação de serviço (Art. 7º, V) e seu consentimento explícito (Art. 7º, I da LGPD). O consentimento explícito é formalizado através de um Contrato em PDF gerado dinamicamente com os dados do usuário, enviado diretamente via WhatsApp no momento do Onboarding, sendo validado pelo aceite documentado com registro de data e hora (timestamp) no nosso banco de dados seguro.",
      },
      {
        subtitle: "Seus direitos como titular",
        text: "Você tem direito a: (I) confirmação da existência do tratamento; (II) acesso aos dados; (III) correção de dados incompletos ou inexatos; (IV) anonimização, bloqueio ou eliminação de dados desnecessários; (V) portabilidade dos dados; (VI) eliminação dos dados tratados com consentimento; (VII) revogação do consentimento a qualquer momento.",
      },
      {
        subtitle: "Como exercer seus direitos",
        text: "Para exercer qualquer um dos seus direitos (incluindo revogação de acesso ao Google Fit/Strava), entre em contato exclusivamente através dos nossos canais oficiais: E-mail: silvaevandro815@gmail.com ou WhatsApp: +55 (32) 98458-7255. Atenderemos sua solicitação em até 15 dias úteis, conforme previsto na LGPD.",
      },
      {
        subtitle: "Encarregado de Proteção de Dados (DPO)",
        text: "Nosso DPO garante a privacidade e controle dos seus dados. Para questões estritas de tratamento, utilize apenas os nosso canais oficiais: E-mail: silvaevandro815@gmail.com ou WhatsApp: +55 (32) 98458-7255.",
      },
    ],
  },
];

export default function PoliticasPage() {
  return (
    <div className="min-h-screen bg-surface-black text-text-primary">
      {/* Header */}
      <div className="bg-surface-dark border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-brand-lime transition-colors mb-8"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o início
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-px h-8 bg-brand-lime" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">Legal</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Políticas & Termos
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Transparência acima de tudo. Aqui estão todas as nossas políticas de privacidade,
            termos de uso e conformidade com a LGPD.
          </p>

          <p className="mt-4 text-xs text-text-muted font-mono">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-6">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-xl border border-surface-border text-xs font-mono text-text-secondary hover:border-brand-lime/40 hover:text-white transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-20">
          {SECTIONS.map((section) => (
            <div key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-brand-lime rounded-full" />
                <h2 className="font-display font-black text-3xl text-white">{section.title}</h2>
              </div>

              <div className="flex flex-col gap-8">
                {section.content.map((block, i) => (
                  <div key={i} className="border-l border-surface-border pl-6">
                    <h3 className="font-bold text-white mb-2 text-lg">{block.subtitle}</h3>
                    <p className="text-text-secondary leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 p-8 rounded-3xl border border-surface-border bg-surface-dark text-center">
          <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse mx-auto mb-4" />
          <h3 className="font-display font-black text-2xl text-white mb-2">Dúvidas?</h3>
          <p className="text-text-secondary mb-6">
            Nossa equipe está pronta para responder qualquer questão sobre privacidade ou termos.
          </p>
          <a
            href="https://wa.me/5532984138183?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20as%20pol%C3%ADticas%20do%20Marc%C3%A3o%20AI."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-lime text-black font-bold text-sm hover:shadow-lime-glow transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
