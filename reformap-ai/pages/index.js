import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginRegular = (e) => {
    e.preventDefault();
    // Login padrão redireciona para o fluxo inicial do Starter
    router.push('/starter');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 flex flex-col items-center justify-center p-6 font-sans">
      
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
        {/* Header do Logotipo */}
        <div className="text-center">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter">EcoTax</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">Portal de Autenticação Segura</p>
        </div>

        {/* Formulário Simulado */}
        <form onSubmit={handleLoginRegular} className="space-y-6">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">E-mail Corporativo</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nome@empresa.com" 
              className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-sm text-white outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Chave de Acesso</label>
            <input 
              type="password" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-sm text-white outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition shadow-lg">
            Entrar no Painel
          </button>
        </form>

        {/* Divisor Técnico */}
        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
          <span className="relative bg-slate-900 px-4 text-[9px] font-black text-blue-400 uppercase tracking-widest">Ambiente de Demonstração</span>
        </div>

        {/* Seletores Rápidos de Perfil de Custo / Planos */}
        <div className="space-y-3">
          <p className="text-center text-[10px] font-bold text-slate-500 uppercase">Selecione o Plano para Simulação:</p>
          
          <div className="grid grid-cols-1 gap-2">
            <button 
              onClick={() => router.push('/starter')}
              className="w-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 p-3 rounded-xl text-xs font-bold text-left flex justify-between items-center transition"
            >
              <span>1. Plano Starter (Freemium)</span>
              <span className="text-[9px] bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">Acesso Grátis</span>
            </button>

            <button 
              onClick={() => router.push('/professional')}
              className="w-full bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/30 text-purple-400 p-3 rounded-xl text-xs font-bold text-left flex justify-between items-center transition"
            >
              <span>2. Plano Professional (Corporate)</span>
              <span className="text-[9px] bg-purple-500/20 px-2 py-0.5 rounded text-purple-300">Risco Dinâmico</span>
            </button>

            <button 
              onClick={() => router.push('/partner')}
              className="w-full bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 p-3 rounded-xl text-xs font-bold text-left flex justify-between items-center transition"
            >
              <span>3. Plano Partner (B2B2B)</span>
              <span className="text-[9px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">White-Label</span>
            </button>
          </div>
        </div>

        {/* Link para o fluxo de cadastro caso queira demonstrar do zero */}
        <p className="text-center text-xs text-slate-500 font-medium">
          Nova empresa?{' '}
          <button onClick={() => router.push('/cadastro')} className="text-blue-500 hover:underline font-bold">
            Criar Conta Estrutural
          </button>
        </p>
      </div>

    </div>
  );
}