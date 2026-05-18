import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardStarter() {
  const router = useRouter();
  const [saldo, setSaldo] = useState(12);
  const [mensagens, setMensagens] = useState([
    { de: 'ia', texto: 'Olá! Identifiquei seu CNAE de Transporte Rodoviário via BrasilAPI. Posso tirar dúvidas institucionais básicas sobre a CBS para o seu segmento. Como posso ajudar?' }
  ]);
  const [inputChat, setInputChat] = useState('');

  const enviarMensagem = () => {
    if (!inputChat.trim()) return;
    if (saldo <= 0) {
      alert("Seu saldo de degustação esgotou! Realize o upgrade para continuar consultando a IA.");
      return;
    }
    
    const novasMensagens = [
      ...mensagens,
      { de: 'usuario', texto: inputChat },
      { de: 'ia', texto: `[Modo Starter Ativo] Análise simplificada processada. Para cruzamento profundo de dados contratuais e geração de relatórios oficiais estruturados, migre para a licença corporativa.` }
    ];
    
    setMensagens(novasMensagens);
    setSaldo(saldo - 1);
    setInputChat('');
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-blue-500 italic">EcoTax</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Versão de Demonstração Activa</p>
        </div>

        <div className="space-y-8 flex-1 overflow-y-auto">
          <section className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Controle de Saldo</h3>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400">Degustação Base</span>
              <span className="font-bold text-white">{saldo} / 50</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full transition-all duration-300" style={{ width: `${(saldo / 50) * 100}%` }}></div>
            </div>
            <button onClick={() => alert("Redirecionando para checkout de recarga externa...")} className="w-full mt-4 bg-blue-600 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-500 transition shadow-lg">Comprar Mais Créditos</button>
          </section>

          <nav className="space-y-2">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Recursos Travados (Pro) 🔒</p>
            {['Simulador de Alíquotas Complexas', 'Varredura RAG Completa', 'Auditoria Digital de IRPJ'].map((rec) => (
              <div key={rec} className="p-3 bg-slate-900/50 border border-slate-800 text-[10px] rounded-xl italic text-slate-500 flex justify-between items-center">
                {rec} <span>🔒</span>
              </div>
            ))}
          </nav>
        </div>

        <button onClick={() => router.push('/')} className="w-full bg-slate-800 hover:bg-red-900/30 hover:text-red-400 p-3 rounded-lg text-xs font-bold transition">Sair da Plataforma</button>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-3 text-center text-[10px] font-black uppercase tracking-widest">
          Você está utilizando o Plano Starter. Conheça as estimativas corporativas abaixo.
        </div>

        <div className="p-10 space-y-10 max-w-5xl w-full mx-auto">
          <header className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-black italic tracking-tighter">Diagnóstico Simplificado</h2>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">TechLog Soluções • Perfil Logístico Basal</p>
            </div>
          </header>

          {/* CHAT INTEGRADO DE TESTE */}
          <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-80">
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-black uppercase text-blue-400 tracking-wider">Mecanismo de Teste de Mensagem</span>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {mensagens.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-2xl ${msg.de === 'usuario' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${msg.de === 'usuario' ? 'bg-slate-700' : 'bg-blue-600'}`}>
                    {msg.de === 'usuario' ? 'U' : 'E'}
                  </div>
                  <div className={`p-4 rounded-2xl text-xs border leading-relaxed ${msg.de === 'usuario' ? 'bg-blue-600/20 border-blue-500/30' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                    {msg.texto}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-900/50 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                placeholder="Pergunte algo simples sobre as diretrizes gerais do IVA..." 
                className="flex-1 bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-500 text-white" 
              />
              <button onClick={enviarMensagem} className="bg-blue-600 hover:bg-blue-500 font-bold text-xs px-4 rounded-xl uppercase transition">Enviar</button>
            </div>
          </div>

          {/* SEÇÃO DE ESTIMATIVAS DE VALORES E PLANOS */}
          <section className="space-y-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">Estimativa de Valores e Planos Superiores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-purple-400 uppercase tracking-widest">Professional</span>
                    <span className="text-xs font-mono font-bold text-white">Preço Dinâmico</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Acesso irrestrito ao chat estruturado e análise completa de múltiplos PDFs fiscais de alta volumetria.</p>
                </div>
                <button onClick={() => { alert("Contratando Plano Professional... Redirecionando."); router.push('/professional'); }} className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest transition">Assinar Professional</button>
              </div>

              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Partner B2B2B</span>
                    <span className="text-xs font-mono font-bold text-white">R$ 1.450,00/mês</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Licenciamento White-label completo para escritórios contábeis distribuírem inteligência em lote.</p>
                </div>
                <button onClick={() => { alert("Contratando Plano Partner... Redirecionando."); router.push('/partner'); }} className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest transition">Assinar Partner</button>
              </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}