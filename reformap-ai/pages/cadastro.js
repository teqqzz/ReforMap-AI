import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Cadastro() {
  const router = useRouter();
  const [cnpj, setCnpj] = useState('');
  const [dadosEmpresa, setDadosEmpresa] = useState({
    razaoSocial: '', naturezaJuridica: '', endereco: '', dataAbertura: ''
  });

  const handleCnpjChange = (e) => {
    const value = e.target.value;
    setCnpj(value);
    
    if (value === "00.000.000/0001-00") {
      setDadosEmpresa({
        razaoSocial: "TechLog Soluções Logísticas LTDA",
        naturezaJuridica: "206-2 - Sociedade Empresária Limitada",
        endereco: "Curitiba, PR - Distrito Industrial",
        dataAbertura: "15/09/2012"
      });
    } else {
      setDadosEmpresa({ razaoSocial: '', naturezaJuridica: '', endereco: '', dataAbertura: '' });
    }
  };

  const handleFinalizarCadastro = (e) => {
    e.preventDefault();
    alert("Onboarding concluído com sucesso via BrasilAPI! Redirecionando para autenticação.");
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
        
        <div className="bg-slate-900 p-10 text-white flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-blue-500">EcoTax</h1>
            <p className="text-slate-400 mt-2 text-xs uppercase tracking-[0.3em] font-bold">Onboarding Estrutural v1.0</p>
          </div>
          <button 
            type="button" 
            onClick={() => router.push('/')}
            className="text-xs font-black text-slate-400 hover:text-white uppercase tracking-wider border border-slate-700 px-4 py-2 rounded-xl transition"
          >
            Voltar ao Login
          </button>
        </div>

        <form onSubmit={handleFinalizarCadastro} className="p-12 space-y-12">
          
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Identificação Jurídica (Integração API)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <label className="text-[10px] font-black text-blue-700 uppercase">Cartão CNPJ (Simulação: 00.000.000/0001-00)</label>
                <input 
                  value={cnpj} 
                  onChange={handleCnpjChange} 
                  type="text" 
                  placeholder="00.000.000/0000-00" 
                  className="w-full mt-1 p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 outline-none font-mono text-sm" 
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Razão Social</label>
                  <input value={dadosEmpresa.razaoSocial} disabled className="w-full mt-1 p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Regime / Natureza Jurídica</label>
                  <input value={dadosEmpresa.naturezaJuridica} disabled className="w-full mt-1 p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs" />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Perfil Fiscal e Operacional</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase">Regime de Tributação</label>
                <select className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700">
                  <option>Lucro Real</option>
                  <option>Lucro Presumido</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase">Quantidade de Funcionários</label>
                <input type="number" placeholder="50" className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase">Regime de Contratação</label>
                <select className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700">
                  <option>CLT</option>
                  <option>PJ</option>
                  <option>Misto</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Dossiê Digital para IA (Repositório)</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl text-white">
                <label className="text-[10px] font-black text-blue-400 uppercase block mb-4">Declaração do Imposto de Renda</label>
                <input type="file" className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-blue-600 file:text-white" />
              </div>
              <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl text-white">
                <label className="text-[10px] font-black text-blue-400 uppercase block mb-4">Contrato Social</label>
                <input type="file" className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-blue-600 file:text-white" />
              </div>
              <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl text-white">
                <label className="text-[10px] font-black text-blue-400 uppercase block mb-4">IR Contrato e Cartão (Consolidado)</label>
                <input type="file" className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-blue-600 file:text-white" />
              </div>
            </div>
          </section>

          <div className="pt-10">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-3xl transition-all shadow-2xl uppercase tracking-[0.2em] text-sm">
              Finalizar e Analisar Impacto
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}