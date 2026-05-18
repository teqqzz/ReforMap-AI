import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPartner() {
  const router = useRouter();
  const [clienteSelecionado, setClienteSelecionado] = useState('TechLog Soluções Logísticas');
  const [baseClientes, setBaseClientes] = useState([
    { nome: 'TechLog Soluções Logísticas', status: 'Créditos Estáveis', faturamento: 'R$ 1.450,00', cor: 'text-green-600' },
    { nome: 'Indústria Metalúrgica PR', status: 'Créditos Críticos', faturamento: 'R$ 890,00', cor: 'text-red-500' },
    { nome: 'Varejo Curitiba S.A.', status: 'Créditos Estáveis', faturamento: 'R$ 2.100,00', cor: 'text-green-600' }
  ]);

  const adicionarCliente = () => {
    alert("Abrindo modal estrutural para inclusão de novo CNPJ via BrasilAPI na carteira master.");
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col p-8 shadow-2xl z-10">
        <div className="mb-12">
          <div className="w-12 h-12 bg-slate-900 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-lg">OR</div>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Oliveira & Rosa</h1>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Painel Administrativo B2B2B</p>
        </div>

        <div className="space-y-8 flex-1">
          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Gestão de Carteira</h3>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Selecionar Cliente Ativo:</label>
              <select 
                value={clienteSelecionado}
                onChange={(e) => setClienteSelecionado(e.target.value)}
                className="w-full bg-slate-100 border border-slate-200 p-3 rounded-lg text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {baseClientes.map((cli) => (
                  <option key={cli.nome} value={cli.nome}>{cli.nome}</option>
                ))}
              </select>
            </div>
          </section>

          <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
             <h3 className="text-[10px] font-black text-slate-400 uppercase mb-2">Faturamento Recorrente</h3>
             <div className="flex justify-between items-end">
                <div>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">SaaS Fee Coletado (Mês)</p>
                   <p className="text-xl font-black text-slate-900">
                     {baseClientes.find(c => c.nome === clienteSelecionado)?.faturamento || 'R$ 0,00'}
                   </p>
                </div>
                <span className="text-xs font-mono text-emerald-600 font-bold">{baseClientes.length} CNPJs</span>
             </div>
          </section>
        </div>

        <button onClick={() => router.push('/')} className="w-full bg-slate-900 hover:bg-red-600 hover:text-white text-white p-3 rounded-lg text-xs font-bold transition">Sair da Plataforma</button>
      </aside>

      <main className="flex-1 flex flex-col bg-slate-100/50">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10">
          <h2 className="font-black text-slate-800 uppercase text-sm tracking-widest">Painel Master de Inteligência Tributária</h2>
          <div className="flex gap-3">
             <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sessão do Contador</p>
                <p className="text-xs font-black text-slate-800">Lucas de Oliveira Rosa</p>
             </div>
             <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold">L</div>
          </div>
        </header>

        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
               <h3 className="text-[10px] font-black text-blue-600 uppercase mb-4 tracking-widest">Configurações de Identidade Visual (Sua Marca)</h3>
               <div className="grid grid-cols-2 gap-4 text-xs">
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <p className="font-bold text-slate-500">Subdomínio Ativo:</p>
                   <p className="font-mono text-slate-900 mt-1">tributos.oliveirarosa.com.br</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <p className="font-bold text-slate-500">Foco Ativo do Sistema:</p>
                   <p className="font-mono text-slate-900 mt-1">{clienteSelecionado}</p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
               <h3 className="text-[10px] font-black text-slate-900 uppercase mb-4 tracking-widest">Monitoramento de Consumo da Carteira</h3>
               <div className="space-y-4">
                  {baseClientes.map((cli, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-4 bg-slate-50 rounded-2xl border ${cli.nome === clienteSelecionado ? 'border-blue-500 shadow-sm' : 'border-slate-100'}`}>
                      <span className="text-xs font-black text-slate-800">{cli.nome}</span>
                      <span className={`text-[10px] font-bold uppercase ${cli.cor}`}>{cli.status}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-[10px] font-black text-blue-400 uppercase mb-4 tracking-widest">Meta de Licenciamento</h3>
                <p className="text-4xl font-black italic">{baseClientes.length} / 20</p>
                <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-tighter">CNPJs ativos sob sua licença Partner</p>
                <div className="mt-6 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                   <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${(baseClientes.length / 20) * 100}%` }}></div>
                </div>
             </div>
             
             <button onClick={adicionarCliente} className="w-full bg-blue-600 text-white p-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-500 transition">
                Adicionar Novo Cliente à Carteira
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}