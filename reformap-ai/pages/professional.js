import React from 'react';

export default function DashboardProfessional() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Professional */}
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-blue-500 italic">EcoTax</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Gerenciamento Tributário Corporativo</p>
        </div>

        <div className="space-y-8 flex-1">
          <section className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-[10px] font-black text-slate-500 uppercase mb-3">Empresa Monitorada</h3>
            <p className="text-sm font-bold text-white">TechLog Soluções</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Análise em Dia</span>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black text-slate-500 uppercase mb-3">Créditos de IA</h3>
            <div className="flex justify-between text-xs mb-2 font-mono">
              <span>Saldo Mensal</span>
              <span className="text-blue-400">450 / 500</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full">
              <div className="bg-blue-600 h-full w-[90%] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
            </div>
          </section>
        </div>

        <div className="p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl mb-6">
           <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest">Fator de Risco Dinâmico</p>
           <p className="text-xs font-mono text-white mt-1">Taxa_Base + (50 func * 1.2)</p>
        </div>

        <button className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg text-xs font-bold transition">Sair da Plataforma</button>
      </aside>

      <main className="flex-1 flex flex-col">
        {/* Header Profissional */}
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-10 bg-slate-900/50 backdrop-blur-md">
          <div>
            <h2 className="font-black text-slate-300 italic">Painel de Consultoria IA (RAG)</h2>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Processamento via Claude 3.5 Sonnet</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-[10px] font-black uppercase hover:bg-slate-700 transition">Gerar Relatório Anual</button>
          </div>
        </header>

        {/* Chat de Consultoria Jurídica */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10">
          <div className="flex gap-4 max-w-4xl">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl shadow-2xl">R</div>
            <div className="flex-1 bg-slate-800/60 p-8 rounded-3xl rounded-tl-none border border-slate-700 shadow-xl">
              <p className="text-[10px] text-blue-400 font-black mb-4 uppercase tracking-widest">Análise de Impacto • Reforma 2026</p>
              <p className="text-slate-200 leading-relaxed text-sm font-medium">
                Com base nos seus **Créditos de PIS/COFINS** e no faturamento médio do setor logístico, a transição para o **IVA Dual** exigirá uma reestruturação do seu fluxo de caixa no 1º trimestre de 2026.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                   <p className="text-[10px] text-slate-500 font-bold uppercase">Impacto Médio</p>
                   <p className="text-xl font-black text-red-500">+4.1%</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                   <p className="text-[10px] text-slate-500 font-bold uppercase">Sugestão</p>
                   <p className="text-xs font-bold text-blue-400">Revisão de Créditos Acumulados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campo de Input Profissional */}
        <div className="p-8 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto relative group">
            <input type="text" className="w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl pr-32 outline-none focus:ring-2 focus:ring-blue-600 text-sm transition font-medium" placeholder="Pergunte sobre créditos de combustível ou novas alíquotas do CBS..." />
            <button className="absolute right-3 top-3 bottom-3 bg-blue-600 hover:bg-blue-500 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest transition shadow-lg">Enviar</button>
          </div>
        </div>
      </main>
    </div>
  );
}