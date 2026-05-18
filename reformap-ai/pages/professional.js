import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardProfessional() {
  const router = useRouter();
  const [creditos, setCreditos] = useState(450);
  const [chatLog, setChatLog] = useState([
    { autor: 'ia', txt: 'Mecanismo RAG ativado para TechLog. Analisando as cláusulas do Contrato Social e cruzando informações com a base de dados do Claude 3.5 Sonnet. Como posso auxiliar na projeção de alíquotas hoje?' }
  ]);
  const [mensagemInput, setMensagemInput] = useState('');

  const acionarConsulta = () => {
    if (!mensagemInput.trim()) return;
    setChatLog([
      ...chatLog,
      { autor: 'user', txt: msnInput },
      { autor: 'ia', txt: 'Processamento analítico avançado executado. O impacto na substituição tributária do setor logístico foi validado em conformidade com as emendas vigentes para 2026.' }
    ]);
    setCreditos(creditos - 2);
    setMensagemInput('');
  };

  const gerarRelatorio = () => {
    if (creditos < 25) {
      alert("Saldo insuficiente para emitir o dossiê executivo complexo.");
      return;
    }
    setCreditos(creditos - 25);
    alert("Dossiê Analítico de Impacto Gerado! O arquivo em PDF foi compilado e o download iniciará automaticamente (-25 créditos).");
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
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
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Monitoramento RAG Ativo</span>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black text-slate-500 uppercase mb-3">Créditos de IA</h3>
            <div className="flex justify-between text-xs mb-2 font-mono">
              <span className="text-slate-400">Saldo Premium</span>
              <span className="text-blue-400 font-bold">{creditos} / 500</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full">
              <div className="bg-blue-600 h-full rounded-full transition-all duration-300" style={{ width: `${(creditos / 500) * 100}%` }}></div>
            </div>
          </section>

          <section className="space-y-3">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Dossiê Processado (RAG) 📂</p>
            <div className="space-y-2">
              <div className="p-2.5 bg-slate-900 rounded-lg text-[10px] flex justify-between items-center border border-slate-800">
                <span>📄 Contrato_Social_TechLog.pdf</span>
                <span className="text-green-500 font-bold">Ativo</span>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg text-[10px] flex justify-between items-center border border-slate-800">
                <span>📄 Declaracao_IRPJ_2025.pdf</span>
                <span className="text-green-500 font-bold">Ativo</span>
              </div>
            </div>
          </section>
        </div>

        <div className="p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl mb-6">
           <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest">Fator de Risco Dinâmico</p>
           <p className="text-xs font-mono text-white mt-1">Taxa_Base + (50 func * 1.2)</p>
        </div>

        <button onClick={() => router.push('/')} className="w-full bg-slate-800 hover:bg-red-900/30 hover:text-red-400 p-3 rounded-lg text-xs font-bold transition">Sair da Plataforma</button>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-10 bg-slate-900/50 backdrop-blur-md">
          <div>
            <h2 className="font-black text-slate-300 italic">Painel de Consultoria IA (RAG)</h2>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Processamento Avançado de Dados Fiscais</p>
          </div>
          <div className="flex gap-4">
            <button onClick={gerarRelatorio} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-500 text-[10px] font-black uppercase rounded-lg transition shadow-xl">
              Gerar Relatório Anual (-25)
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-8">
          {chatLog.map((chat, index) => (
            <div key={index} className={`flex gap-4 max-w-4xl ${chat.autor === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-2xl ${chat.autor === 'user' ? 'bg-slate-700' : 'bg-blue-600'}`}>
                {chat.autor === 'user' ? 'U' : 'R'}
              </div>
              <div className="flex-1 bg-slate-800/60 p-8 rounded-3xl rounded-tl-none border border-slate-700 shadow-xl">
                <p className="text-[10px] text-blue-400 font-black mb-2 uppercase tracking-widest">
                  {chat.autor === 'user' ? 'Sua Consulta' : 'Mecanismo de Resposta Inteligente'}
                </p>
                <p className="text-slate-200 leading-relaxed text-sm font-medium">{chat.txt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto relative group">
            <input 
              type="text" 
              value={mensagemInput}
              onChange={(e) => setMensagemInput(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl pr-32 outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-white" 
              placeholder="Peça para analisar cláusulas contratuais ou calcular impacto nas rotas..." 
            />
            <button onClick={acionarConsulta} className="absolute right-3 top-3 bottom-3 bg-blue-600 hover:bg-blue-500 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest transition shadow-lg">Consultar IA</button>
          </div>
        </div>
      </main>
    </div>
  );
}