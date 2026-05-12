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

        <div className="space-y-8 flex-1">
          <section className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="text-[10px] font-black text-blue-400 uppercase mb-3">Créditos Disponíveis</h3>
            <div className="flex justify-between text-xs mb-2">
              <span>Créditos Iniciais</span>
              <span className="font-bold">12 / 50</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full">
              <div className="bg-blue-500 h-full w-[24%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
            <button className="w-full mt-4 bg-blue-600 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-500 transition">Comprar Créditos</button>
          </section>

          <nav className="space-y-2 opacity-50 cursor-not-allowed">
            <p className="text-[10px] font-bold text-slate-600 uppercase">Recursos Bloqueados</p>
            <div className="p-3 bg-slate-900/50 rounded-lg text-xs flex justify-between items-center italic">
              Relatório RAG Profundo 🔒
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg text-xs flex justify-between items-center italic">
              Análise de IRPJ 🔒
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {/* Banner de Upgrade */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-white">
            Você está no plano Starter. Assine o Professional para liberar a análise completa da Reforma 2026.
          </p>
        </div>

        <div className="p-10 space-y-8">
          <header>
            <h2 className="text-2xl font-black italic">Diagnóstico Simplificado</h2>
            <p className="text-xs text-slate-500 mt-1">Visão geral baseada apenas nos dados públicos do CNPJ via BrasilAPI.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-4">Empresa Identificada</h4>
              <p className="text-lg font-bold">TechLog Soluções Logísticas</p>
              <p className="text-xs text-blue-400 mt-1 italic">CNAE: 4930-2/02 - Transporte Rodoviário</p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <p className="text-xs text-slate-400">Deseja ver o impacto tributário real?</p>
              <button className="mt-2 text-sm font-black text-blue-500 hover:underline text-left">Fazer upload do Contrato Social →</button>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
               <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-bold text-slate-300">Chat Consultivo IA (Limitado)</h3>
            <p className="text-xs text-slate-500 max-w-sm mt-2 leading-relaxed">
              Para conversar com nossa IA sobre legislações específicas da reforma de 2026, você precisa migrar para o plano Professional.
            </p>
            <button className="mt-6 bg-slate-100 text-slate-900 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition">Migrar Agora</button>
          </div>
        </div>
      </main>
    </div>
  );
}