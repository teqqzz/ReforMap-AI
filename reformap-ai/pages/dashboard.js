import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Sidebar Corporativa */}
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-blue-500 italic">ReforMap AI</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Inteligência Tributária de Próxima Geração</p>
        </div>

        <div className="space-y-8 flex-1">
          <section>
            <h3 className="text-xs font-bold text-slate-600 uppercase mb-4">Empresa Ativa</h3>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <p className="text-sm font-bold">TechLog Soluções</p>
              <p className="text-[10px] text-blue-400">Plano Business (SaaS)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-600 uppercase mb-4">Controle de Créditos</h3>
            <div className="flex justify-between text-xs mb-2">
              <span>Saldo Mensal</span>
              <span className="text-blue-400 font-bold">450 / 500</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className="bg-blue-600 h-full w-[90%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            </div>
          </section>

          <section className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Newsletter Específica</span>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                 <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-[9px] text-slate-500 mt-2 leading-tight italic">Relatórios automáticos enviados semanalmente conforme seu perfil fiscal.</p>
          </section>
        </div>

        <button className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg text-xs font-bold transition">Sair da Plataforma</button>
      </aside>

      {/* Área Central: Suporte Técnico IA */}
      <main className="flex-1 flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950">
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-10">
          <div>
            <h2 className="font-bold text-slate-300">Painel de Consultoria Jurídica</h2>
            <p className="text-[10px] text-slate-500 italic">Sessão protegida por criptografia de ponta a ponta</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-900/30 text-green-500 text-[10px] rounded-full font-bold border border-green-500/20">IA Operacional</span>
          </div>
        </header>

        {/* Chat de Consultoria */}
        <div className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
          {/* Resposta Formal da IA */}
          <div className="flex gap-4 max-w-4xl">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">R</div>
            <div className="flex-1 bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl rounded-tl-none border border-slate-700/50">
              <p className="text-[10px] text-blue-400 font-bold mb-3 uppercase">ReforMap IA • Documento: Contrato_Social_TechLog.pdf</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Prezados, após análise da sua **Cláusula Quinta do Contrato Social** e do regime de **Lucro Real**, identificamos um ponto de atenção crítico:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-400 italic">
                <li>• A transição para a **CBS (Contribuição sobre Bens e Serviços)** em 2026 impactará sua margem de serviços logísticos em aproximadamente **4.1%**.</li>
                <li>• Recomendamos a revisão dos créditos de PIS/COFINS acumulados antes da virada do exercício conforme a **Instrução Normativa RFB nº 2026/26**.</li>
              </ul>
              <div className="mt-6 flex gap-4">
                <button className="text-[10px] bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded font-bold transition">Ver Lei Completa</button>
                <button className="text-[10px] bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 px-3 py-2 rounded font-bold transition">Gerar Relatório de Impacto (-25 créditos)</button>
              </div>
            </div>
          </div>
        </div>

        {/* Campo de Pergunta Formal */}
        <div className="p-10 bg-slate-900/50 backdrop-blur-lg border-t border-slate-800">
          <div className="max-w-5xl mx-auto relative">
            <input type="text" className="w-full bg-slate-800 border border-slate-700 p-5 rounded-2xl pr-32 outline-none focus:ring-2 focus:ring-blue-600 text-sm transition" placeholder="Consulte a legislação de 2026 ou peça uma análise de documento específico..." />
            <button className="absolute right-3 top-3 bottom-3 bg-blue-600 hover:bg-blue-500 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition shadow-lg">Enviar</button>
          </div>
          <p className="text-center text-[9px] text-slate-600 mt-4 uppercase font-semibold">Respostas baseadas em fontes oficiais da Receita Federal e Imprensa Nacional</p>
        </div>
      </main>
    </div>
  );
}