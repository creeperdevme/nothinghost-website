import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Zap, 
  Globe, 
  Terminal, 
  Shield, 
  ArrowRight, 
  Code, 
  Cpu, 
  Box, 
  Activity,
  Menu,
  X,
  ExternalLink,
  Monitor,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// -----------------------------------------------------------------------------
// Assets & Data
// -----------------------------------------------------------------------------

const LOGO_URL = "https://images-ext-1.discordapp.net/external/kphvR3z6ApgjlQMPRLh0GzG32NQiyDinNWNH1FwUo60/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1434916241499226122/40109ef5104e637525e9cc18285d04a2.png";

// Official Discord SVG Logo
const DiscordLogo = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.6853-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8851 1.5152.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.033 1.4853 4.0021 2.3892 5.9296 2.9739a.0772.0772 0 00.0846-.0277c.4616-.6303.8733-1.2952 1.226-1.9942a.076.076 0 00-.0416-1.0579c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0105c.1202.099.246.1981.3728.2914a.077.077 0 01-.0066.1277c-.598.3428-1.2194.6447-1.8733.8923a.0756.0756 0 00-.0407 1.0579c.3536.699.7654 1.3639 1.225 1.9942a.0772.0772 0 00.0846.0277c1.9275-.5847 3.8966-1.4886 5.9305-2.9739a.0778.0778 0 00.0312-.0561c.5175-5.631-1.169-9.8932-3.489-13.6603a.0747.0747 0 00-.0321-.0277zM8.02 15.3312c-1.1825 0-2.1569-1.0856-2.1569-2.419 0-1.3334.9555-2.419 2.1569-2.419 1.2104 0 2.1757 1.0952 2.1569 2.419 0 1.3334-.9464 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0856-2.1569-2.419 0-1.3334.9554-2.419 2.1569-2.419 1.2104 0 2.1757 1.0952 2.1569 2.419 0 1.3334-.9464 2.419-2.1569 2.419z"/>
  </svg>
);

// SVG Flags
const USFlag = () => (
  <svg viewBox="0 0 60 40" className="w-full h-full rounded-sm shadow-sm">
    <rect width="60" height="40" fill="#B22234"/>
    <path d="M0,4H60M0,8H60M0,12H60M0,16H60M0,20H60M0,24H60M0,28H60M0,32H60M0,36H60" stroke="#FFF" strokeWidth="2"/>
    <rect width="24" height="21" fill="#3C3B6E"/>
    {/* Simplified stars */}
    <path d="M2,3h1M5,3h1M8,3h1M11,3h1M14,3h1M17,3h1M20,3h1 M3,6h1M6,6h1M9,6h1M12,6h1M15,6h1M18,6h1 M2,9h1M5,9h1M8,9h1M11,9h1M14,9h1M17,9h1M20,9h1 M3,12h1M6,12h1M9,12h1M12,12h1M15,12h1M18,12h1 M2,15h1M5,15h1M8,15h1M11,15h1M14,15h1M17,15h1M20,15h1" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const KRFlag = () => (
  <svg viewBox="-72 -48 144 96" className="w-full h-full rounded-sm shadow-sm">
    <path fill="#fff" d="M-72-48v96H72v-96z"/>
    <g stroke="#000" strokeWidth="4">
      <path transform="rotate(33.69006752598)" d="M-50-12v24m6 0v-24m6 0v24m76 0V1m0-2v-11m6 0v11m0 2v11m6 0V1m0-2v-11"/>
      <path transform="rotate(-33.69006752598)" d="M-50-12v24m6 0V1m0-2v-11m6 0v24m76 0V1m0-2v-11m6 0v24m6 0V1m0-2v-11"/>
    </g>
    <g transform="rotate(33.69006752598)">
      <path fill="#cd2e3a" d="M12 0a18 18 0 11-36 0 24 24 0 1148 0"/>
      <path fill="#0047a0" d="M0 0a12 12 0 1124 0 24 24 0 11-48 0 12 12 0 1024 0"/>
    </g>
  </svg>
);

const techDescriptions = {
  "Bun": "極速的 JavaScript 運行時，集成了打包器、轉譯器和包管理器。",
  "C#": "強大的通用型語言，適合構建高性能的後端服務和遊戲伺服器。",
  "Dart": "Google 開發的客戶端優化語言，以高開發效率和多平台運行著稱。",
  "Deno": "現代化的 JavaScript 和 TypeScript 運行時，強調安全性和開發者體驗。",
  "Elixir": "基於 Erlang 虛擬機，專為構建可擴展、高併發和容錯系統而設計。",
  "Golang": "Google 開發的靜態編譯語言，以簡潔的語法和高效的併發處理能力聞名。",
  "Java": "成熟穩定的企業級語言，擁有龐大的生態系統，適合大型複雜應用。",
  "Luvit": "將 Node.js 的架構與 Lua 語言的輕量級特性相結合的異步 I/O 框架。",
  "Node.js": "基於 Chrome V8 引擎的 JavaScript 運行環境，事件驅動、非阻塞 I/O 模型。",
  "Nodemon": "開發輔助工具，監控代碼變動並自動重啟 Node.js 應用程序。",
  "Python": "語法簡潔清晰，擁有豐富的庫，廣泛應用於 Web 開發、數據分析和 AI 領域。",
  "Rust": "注重性能、安全性和併發性的系統編程語言，無垃圾回收機制。",
  "Code-Server": "在任何地方的瀏覽器中運行 VS Code，提供遠端開發環境。",
  "Gitea": "輕量級的自託管 Git 服務，易於安裝和維護，資源佔用低。",
  "Uptime Kuma": "美觀易用的自託管監控工具，支援多種通知方式，實時監控服務狀態。"
};

// -----------------------------------------------------------------------------
// Component: Background Grid (Visual Effect)
// -----------------------------------------------------------------------------
const GridBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className="absolute inset-0 opacity-[0.07]" 
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  </div>
);

// -----------------------------------------------------------------------------
// Component: Navbar
// -----------------------------------------------------------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="NothingHost Logo" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-xl tracking-tight">NothingHost</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#features" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">特點</a>
              <a href="#stack" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">支援技術</a>
              <a href="#locations" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">節點位置</a>
              
              <a href="https://status.nothingh.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                <Activity size={14} /> 伺服器狀態
              </a>
              <a href="https://uptime.nothingh.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                <Monitor size={14} /> 服務狀態
              </a>

              <a 
                href="https://discord.gg/AbzQJrZ7GY" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#5865F2] text-white px-4 py-2 rounded-sm text-sm font-bold hover:bg-[#4752C4] transition-colors flex items-center gap-2"
              >
                <DiscordLogo className="w-5 h-5" />
                加入 Discord
              </a>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:border hover:border-white/20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/10 bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">特點</a>
            <a href="#stack" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">支援技術</a>
            <a href="#locations" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">節點位置</a>
            <a href="https://status.nothingh.com" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">伺服器狀態</a>
            <a href="https://uptime.nothingh.com" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">服務狀態</a>
            <a 
              href="https://discord.gg/AbzQJrZ7GY" 
              target="_blank" 
              rel="noreferrer"
              className="block px-3 py-2 mt-4 text-center bg-[#5865F2] rounded-sm font-bold hover:bg-[#4752C4] text-white transition-all flex items-center justify-center gap-2"
            >
              <DiscordLogo className="w-5 h-5" />
              加入 Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// -----------------------------------------------------------------------------
// Component: Hero Section
// -----------------------------------------------------------------------------
const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-gray-300">系統運作正常</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          極簡。<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            高效能託管。
          </span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
          專為開發者打造的託管服務。美國低延遲節點優化 Discord 機器人，
          韓國節點提供穩定的 FRP 穿透服務。
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a 
            href="https://discord.gg/AbzQJrZ7GY" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-gray-200 transition-all flex items-center gap-2"
          >
            <DiscordLogo className="w-5 h-5" />
            開始使用 <ArrowRight size={18} />
          </a>
          <a 
            href="#stack" 
            className="px-8 py-3 border border-white/20 bg-black text-white font-medium rounded-sm hover:border-white transition-all"
          >
            查看支援列表
          </a>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Component: Features Grid
// -----------------------------------------------------------------------------
const Features = () => {
  const features = [
    {
      title: "美國節點 US",
      desc: "專為 Discord 機器人優化，與 Discord API 連線延遲極低，確保指令秒回應。",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "韓國節點 KR",
      desc: "提供 FRP 內網穿透服務，位於韓國的高速節點，連線穩定且快速。",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "開發者友善",
      desc: "支援多種程式語言與框架，從 Node.js 到 Rust，滿足所有開發需求。",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "99.9% 在線率",
      desc: "穩定的基礎設施，確保您的服務全天候在線，不再錯過任何請求。",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div id="features" className="py-24 border-y border-white/10 bg-black/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 border border-white/10 rounded-sm hover:border-white/40 transition-colors bg-black group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Component: Tech Stack
// -----------------------------------------------------------------------------
const TechStack = ({ onSelectTech }) => {
  const stackItems = Object.keys(techDescriptions);

  return (
    <div id="stack" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">全面支援</h2>
          <p className="text-gray-400">無論您使用什麼技術棧，NothingHost 都能完美運行。點擊查看詳情。</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {stackItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelectTech(item)}
              className="group relative flex items-center gap-3 p-4 border border-white/10 rounded-sm bg-black hover:border-white transition-all text-left focus:outline-none focus:border-white"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Terminal size={18} className="text-gray-500 group-hover:text-white transition-colors" />
              <span className="font-mono text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Component: Tech Modal
// -----------------------------------------------------------------------------
const TechModal = ({ techName, onClose }) => {
  if (!techName) return null;
  const description = techDescriptions[techName];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#1a1a1a] border border-white/20 rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#2a2a2a] px-4 py-3 flex items-center border-b border-black/50 relative">
          <div className="flex space-x-2 absolute left-4">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"></button>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="w-full text-center font-mono text-sm text-gray-300 font-bold pointer-events-none">
            {techName} — 特色概覽
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-md">
              <Terminal size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{techName}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Component: Location Detail (Simplified, No Map)
// -----------------------------------------------------------------------------
const Locations = () => {
  return (
    <div id="locations" className="py-24 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">全球佈局 & 專線優化</h2>
          <p className="text-gray-400">
            我們精心挑選的數據中心位置，為您的應用提供最佳的連線品質。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* US Node Card */}
          <div className="p-8 border border-white/10 rounded-lg bg-[#0a0a0a] hover:border-white/30 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 mb-6 shadow-lg">
                  <USFlag />
              </div>
              <h3 className="text-xl font-bold mb-3">美國 (US) → Discord API</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                我們的美國託管中心與 Discord 核心伺服器位於同一區域。
                這種物理距離的優勢確保您的機器人能以最低延遲接收和發送指令。
              </p>
            </div>
          </div>

          {/* KR Node Card */}
          <div className="p-8 border border-white/10 rounded-lg bg-[#0a0a0a] hover:border-white/30 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 mb-6 shadow-lg">
                  <KRFlag />
              </div>
              <h3 className="text-xl font-bold mb-3">韓國 (KR) → 台灣 (TW)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                利用韓國優異的國際頻寬，為台灣用戶提供極低延遲的 FRP 穿透服務。
                無論是遊戲開服還是遠端開發，都能享受如同本地般的連接體驗。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Component: Footer
// -----------------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand & Social (Left Side) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="NothingHost Logo" className="w-8 h-8 rounded-full grayscale hover:grayscale-0 transition-all" />
              <span className="font-bold tracking-tight text-lg">NothingHost</span>
            </div>
            
            <a href="https://discord.gg/AbzQJrZ7GY" className="text-[#5865F2] hover:text-white transition-colors flex items-center gap-2 font-bold text-sm w-fit">
              <DiscordLogo className="w-5 h-5" />
              社群支援
            </a>

            <p className="text-gray-600 text-xs mt-2">
              &copy; {new Date().getFullYear()} NothingHost. All rights reserved.
            </p>
          </div>

          {/* Business Info (Right Side) */}
          <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500">
             <div className="flex gap-2">
                <span className="text-gray-400">商店名稱</span>
                <span>NothingHost</span>
             </div>
             <div className="flex gap-2">
                <span className="text-gray-400">負責人</span>
                <span>彭宇震</span>
             </div>
             <div className="flex gap-2">
                <span className="text-gray-400">服務電話</span>
                <span>0981507560</span>
             </div>
             <div className="flex gap-2">
                <span className="text-gray-400">電子郵箱</span>
                <span>skull@creeperdev.me</span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
export default function App() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
        .animate-in { animation: animate-in 0.2s ease-out; }
        @keyframes animate-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      <GridBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <TechStack onSelectTech={setSelectedTech} />
        <Locations />
        {/* Removed StatusSection */}
      </main>
      
      <Footer />

      <TechModal 
        techName={selectedTech} 
        onClose={() => setSelectedTech(null)} 
      />
    </div>
  );
}