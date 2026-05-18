import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginRegular = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert("Por favor, preencha as credenciais de acesso corporativo.");
      return;
    }
    // Encaminha por padrão para o Starter para validação
    router.push('/starter');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
        
        {/* Header Profissional */}
        <div className="bg-slate-900 p-10 text-white flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-blue-500">EcoTax</h1>
            <p className="text-slate-400 mt-2 text-xs uppercase tracking-[0.3em] font-bold">Portal de Autenticação Corporativa</p>
          </div>
          <div className="text-right border-l border-slate-700 pl-6">
            <p className="text-[10px] text-slate-500 uppercase font-bold">Controle de Acesso v1.2</p>
            <p className="text-sm font-mono text-blue-400">Sessão Protegida</p>
          </div>
        </div>

        <div className="p-12 space-y-12">
          
          {/* SEÇÃO 1: LOGIN REGULAR */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Acesso Restrito</h2>
            </div>
            
            <form onSubmit={handleLoginRegular} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase block mb-2">E-mail Corporativo</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@empresa.com" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition font-medium"
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase block mb-2">Chave de Acesso (Senha)</label>
                <input 
                  type="password" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition font-medium"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-3xl transition-all shadow-2xl uppercase tracking-[0.2em] text-sm">
                  Entrar no Painel EcoTax
                </button>
              </div>
            </form>
          </section>

          {/* SEÇÃO 2: ACESSO RÁPIDO DE DEMONSTRAÇÃO */}
          <section className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Simulação de Perfil de Custo (Acesso Rápido)</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                onClick={() => router.push('/starter')}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-6 rounded-3xl flex flex-col items-center justify-center text-center transition shadow-lg group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                   <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <p className="text-xs font-black text-slate-900 uppercase">Plano Starter</p>
                <p className="text-[10px] text-blue-600 font-bold mt-1">(Degustação Freemium)</p>
              </button>

              <button 
                onClick={() => router.push('/professional')}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-6 rounded-3xl flex flex-col items-center justify-center text-center transition shadow-lg group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                   <span className="text-purple-600 text-xl font-bold">2</span>
                </div>
                <p className="text-xs font-black text-slate-900 uppercase">Plano Professional</p>
                <p className="text-[10px] text-purple-600 font-bold mt-1">(Pricing Dinâmico)</p>
              </button>

              <button 
                onClick={() => router.push('/partner')}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-6 rounded-3xl flex flex-col items-center justify-center text-center transition shadow-lg group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
                   <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <p className="text-xs font-black text-slate-900 uppercase">Plano Partner</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1">(White-Label B2B2B)</p>
              </button>
            </div>
          </section>

          {/* LINK DE CADASTRE-SE PEDIDO */}
          <div className="text-center pt-10 border-t border-slate-100">
            <p className="text-sm text-slate-600 font-medium">
              Não possui uma conta?{' '}
              <button 
                onClick={() => router.push('/cadastro')} 
                className="bg-slate-100 hover:bg-slate-200 text-blue-600 font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider ml-2 transition"
              >
                Cadastre-se Aqui
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}