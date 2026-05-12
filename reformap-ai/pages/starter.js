import React from 'react';

export default function DashboardStarter() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Starter - Versão Estendida */}
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-blue-500 italic">EcoTax</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Versão Gratuita de Demonstração</p>
        </div>

        <div className="space-y-8 flex-1 overflow-y-auto scrollbar-hide">
          <section className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Créditos de Degustação</h3>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400">Saldo Atual</span>
              <span className="font-bold text-white">12 / 50</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[24%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
            <button className="w-full mt-4 bg-blue-600 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-500 transition shadow-lg">Upgrade para Ilimitado</button>
          </section>

          <nav className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-slate-600 uppercase mb-3 tracking-widest">Ferramentas Pro 🔒</p>
              <div className="space-y-2">
                {['Simulador de Alíquota CBS', 'Relatório RAG Profundo', 'Análise de IRPJ / CSLL', 'Exportação para ERP'].map((item) => (
                  <div key={item} className="p-3 bg-slate-900/50 rounded-lg text-[10px] flex justify-between items-center italic text-slate-500 border border-slate-800/50">
                    {item} <span>🔒</span>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Banner de Impacto */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-3 text-center shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            Alerta: A transição para o IVA começa em 2026. Sua empresa está preparada?
          </p>
        </div>

        <div className="p-10 space-y-10 max-w-6xl">
          <header className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-black italic tracking-tighter">Diagnóstico Starter</h2>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">Dados sincronizados via BrasilAPI</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full font-bold text-slate-400">ID: #00129-LUCAS</span>
            </div>
          </header>

          {/* Grid de Conteúdo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card de Identificação */}
            <div className="bg-slate-800/40 p-6 rounded-3xl border border-slate-800 shadow-xl">
              <h4 className="text-[10px] font-black text-blue-500 uppercase mb-4 tracking-widest">Perfil da Empresa</h4>
              <p className="text-lg font-bold text-white uppercase">TechLog Soluções</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-[10px] border-b border-slate-700 pb-1">
                  <span className="text-slate-500">Regime:</span>
                  <span className="font-bold">Lucro Real</span>
                </div>
                <div className="flex justify-between text-[10px] border-b border-slate-700 pb-1">
                  <span className="text-slate-500">CNAE:</span>
                  <span className="font-bold">4930-2/02</span>
                </div>
              </div>
            </div>

            {/* Feed de Notícias (Aumenta o volume da página) */}
            <div className="md:col-span-2 bg-slate-800/20 p-6 rounded-3xl border border-slate-800">
              <h4 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Radar Reforma 2026 • Últimas Notícias</h4>
              <div className="space-y-4">
                {[
                  { t: "Comitê Gestor define regras para o IBS no setor de transportes.", d: "Hoje • 14:30" },
                  { t: "STF adia julgamento sobre créditos de PIS/COFINS na virada de 2026.", d: "Ontem • 09:15" }
                ].map((n, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <p className="text-xs font-semibold text-slate-300">{n.t}</p>
                    <span className="text-[9px] text-slate-600 font-bold uppercase">{n.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checklist de Conformidade (Interativo) */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-sm font-black text-white uppercase mb-6 tracking-widest flex items-center gap-3">
              Status de Preparação <span className="text-[10px] text-blue-500">(1/3 Concluído)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-900/10 border border-blue-500/30 rounded-2xl flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                <span className="text-[10px] font-bold uppercase">Cadastro CNPJ OK</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 opacity-50">
                <div className="w-6 h-6 border-2 border-slate-700 rounded-full"></div>
                <span className="text-[10px] font-bold uppercase italic">Upload Dossiê (Bloqueado)</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 opacity-50">
                <div className="w-6 h-6 border-2 border-slate-700 rounded-full"></div>
                <span className="text-[10px] font-bold uppercase italic">Mapeamento de Riscos</span>
              </div>
            </div>
          </div>

          {/* Call to Action Central - Onde a mágica acontece */}
          <div className="relative p-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-slate-950 rounded-[40px] shadow-2xl">
            <div className="bg-slate-950 p-12 rounded-[38px] text-center space-y-6">
              <div className="inline-block p-4 bg-slate-900 rounded-full mb-4">
                 <span className="text-4xl animate-pulse">🤖</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tighter italic">O Chat Consultivo está aguardando você</h3>
              <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                Nossa IA processa milhares de páginas de legislação em segundos para responder suas dúvidas sobre a Reforma Tributária. <br/>
                <strong>Migre para o plano Professional para liberar o acesso total.</strong>
              </p>
              <div className="pt-6 flex justify-center gap-4">
                <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition shadow-xl">
                  Liberar Acesso Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}