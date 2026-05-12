import React from 'react';

export default function DashboardPartner() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* Sidebar Partner (White-Label) */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col p-8 shadow-2xl z-10">
        <div className="mb-12">
          {/* Logo do Parceiro (Simulação) */}
          <div className="w-12 h-12 bg-slate-900 rounded-xl mb-4"></div>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Oliveira & Rosa</h1>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Consultoria Tributária Partner</p>
        </div>

        <div className="space-y-8 flex-1">
          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Gestão de Carteira</h3>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Selecionar Cliente Ativo:</label>
              <select className="w-full bg-slate-100 border border-slate-200 p-3 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>TechLog Soluções Logísticas</option>
                <option>Indústria Metalúrgica PR</option>
                <option>Varejo Curitiba S.A.</option>
              </select>
            </div>
          </section>

          <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
             <h3 className="text-[10px] font-black text-slate-400 uppercase mb-2">Resumo de Faturamento</h3>
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">SaaS Fee por CNPJ</p>
                   <p className="text-xl font-black text-slate-900">R$ 1.450,00</p>
                </div>
                <p className="text-[10px] font-bold text-blue-600 underline cursor-pointer">Ver Detalhes</p>
             </div>
          </section>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl mb-6 flex items-center justify-between">
           <span className="text-[10px] font-bold text-slate-500 uppercase">Status White-Label</span>
           <span className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-slate-100/50">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10">
          <h2 className="font-black text-slate-800 uppercase text-sm tracking-widest">Painel Master de Inteligência Tributária</h2>
          <div className="flex gap-3">
             <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sessão do Contador</p>
                <p className="text-xs font-black text-slate-800">Lucas de Oliveira Rosa</p>
             </div>
             <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          </div>
        </header>

        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
             <h3 className="text-[10px] font-black text-blue-600 uppercase mb-6 tracking-widest">Atividades da Carteira (IA Monitoring)</h3>
             <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex gap-4 items-center">
                       <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center font-bold text-xs">{i}</div>
                       <div>
                          <p className="text-xs font-black">Alerta de Risco: Cliente {i}</p>
                          <p className="text-[10px] text-slate-500">Documento processado via OCR com sucesso</p>
                       </div>
                    </div>
                    <button className="text-[10px] font-black text-blue-600 uppercase hover:underline">Ver Diagnóstico</button>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-[10px] font-black text-blue-400 uppercase mb-4 tracking-widest">Meta de Licenciamento</h3>
                <p className="text-4xl font-black italic">12 / 20</p>
                <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-tighter">CNPJs ativos sob sua licença Partner</p>
                <div className="mt-6 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                   <div className="bg-blue-500 h-full w-[60%]"></div>
                </div>
             </div>
             
             <button className="w-full bg-blue-600 text-white p-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-500 transition">
                Adicionar Novo Cliente
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}