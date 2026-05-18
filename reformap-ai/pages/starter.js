import React from 'react';

export default function DashboardStarter() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Starter */}
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-blue-500 italic">EcoTax</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Versão Gratuita de Demonstração</p>
        </div>

        <div className="space-y-8 flex-1 overflow-y-auto">
          {/* SEÇÃO DO SALDO NORMAL PEDIDA */}
          <section className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Controle de Saldo</h3>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400">Créditos de Degustação</span>
              <span className="font-bold text-white">12 / 50</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[24%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
            <p className="text-[9px] text-slate-500 mt-2 italic">Cada consulta básica consome 1 crédito.</p>
          </section>

          <nav className="space-y-4">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Recursos Bloqueadosn(Plano Pro) 🔒</p>
            <div className="space-y-2 opacity-60">
              {['Upload de IRPJ Completo', 'Relatórios Fiscais em PDF', 'Suporte Jurídico 24h'].map((item) => (
                <div key={item} className="p-3 bg-slate-900/50 rounded-lg text-[10px] border border-slate-800 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-3 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-white">Ambiente de Testes Automatizado via BrasilAPI</p>
        </div>

        <div className="p-10 space-y-10 max-w-6xl w-full mx-auto">
          <header>
            <h2 className="text-3xl font-black italic tracking-tighter">Painel de Degustação Starter</h2>
            <p className="text-xs text-slate-500 mt-1">Experimente nossa inteligência antes de migrar para a automação total.</p>
          </header>

          {/* GRID: DADOS BÁSICOS DA EMPRESA */}
          <div className="bg-slate-800/30 p-6 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Empresa Ativa (TechLog)</h4>
              <p className="text-lg font-black text-white">TechLog Soluções Logísticas</p>
              <p className="text-xs text-slate-400 mt-1">CNAE extraído automaticamente do banco público.</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Status de Documentação</p>
                <p className="text-xs text-amber-500 font-bold mt-1">Aguardando Contrato Social</p>
              </div>
              <span className="text-xl">📄</span>
            </div>
          </div>

          {/* CHAT INTEGRADO DE DEGUSTAÇÃO FUNCIONAL */}
          <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-black uppercase tracking-wider text-blue-400">Chat de Demonstração (IA Básica)</span>
              <span className="text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-bold uppercase">Consome Crédito</span>
            </div>
            <div className="p-6 space-y-4 min-h-[150px]">
              <div className="flex gap-3 max-w-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-sm">E</div>
                <div className="bg-slate-900 p-4 rounded-2xl rounded-tl-none border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  Olá! Identifiquei que a sua empresa atua no setor de **Transporte Rodoviário**. No plano Starter, posso tirar dúvidas gerais sobre as alíquotas base da CBS para 2026. Como posso ajudar?
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 border-t border-slate-800 flex gap-2">
              <input type="text" placeholder="Digite sua dúvida fiscal básica aqui..." className="flex-1 bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white font-bold text-xs px-4 rounded-xl uppercase">Enviar</button>
            </div>
          </div>

          {/* SEÇÃO PEDIDA: ESTIMATIVA E VALORES DOS PLANOS COM BOTÃO ASSINAR */}
          <section className="space-y-6 pt-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">Tabela de Estimativas para Upgrade</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Professional */}
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl hover:border-blue-500/50 transition">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Plano Professional</span>
                    <span className="text-xs font-mono text-white font-bold">Sob Consulta</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                    Ideal para a **TechLog**. O valor é calculado de forma dinâmica baseado no seu número de funcionários e complexidade fiscal do CNAE.
                  </p>
                  <ul className="mt-4 space-y-2 text-[10px] text-slate-500">
                    <li>• Chat Consultivo Ilimitado via Claude/Gemini</li>
                    <li>• Leitura completa de Contrato Social e IRPJ via RAG</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest transition">Assinar Professional</button>
              </div>

              {/* Card Partner */}
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl hover:border-emerald-500/50 transition">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Plano Partner (B2B2B)</span>
                    <span className="text-xs font-mono text-white font-bold">R$ 1.450,00<span className="text-[9px] text-slate-500">/mês</span></span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                    Para escritórios de contabilidade. Permite gerenciar múltiplos CNPJs sob a sua própria identidade de marca (White-Label).
                  </p>
                  <ul className="mt-4 space-y-2 text-[10px] text-slate-500">
                    <li>• Painel Multi-Client de alta performance</li>
                    <li>• Customização completa de logotipo e cores</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest transition">Assinar Partner</button>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}