// app/page.tsx



export default function Home() {

  


  return (

      <div>
        <div className="w-full h-24 mt-9 bg-white text-indigo-500">
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
              まず、寄せを使わないとこんな感じ
          </div>
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
              The quick brown fox jumps over the lazy dog
          </div>
        </div>
        <div className="w-full h-20 bg-black flex items-center border-3 border-red-400">
            <p className="bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
              これが上下中央揃え
            </p>         
        </div>
        <div>
          <div className="w-full h-20 bg-black flex items-center border-3 border-lime-400">
            <p className="bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
              The quick brown fox jumps over the lazy dog
            </p>  
          </div>
        </div>
        
        <div className="w-full h-20 bg-black text-center">
          <p className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            これが左右中央揃え
          </p>
          <p className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div className="w-full h-48  bg-white text-indigo-500 flex items-center flex-col justify-center">
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
            最後に、上下左右中央揃え！
          </div>
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-fuchsia-500 bg-clip-text text-2xl font-bold text-transparent">
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
        <div className="w-full h-48 bg-black flex items-center flex-wrap justify-center">
          <p className="font-pacifico text-2xl">Pacifico!</p>

          <p className="font-ubuntu font-bold">Ubuntu Bold</p>

          <p className="font-zenmaru italic">Zen Maru Gothic Italic</p>

          <p className="font-sharetech text-lg">Share Tech Regular</p>

          <p className="font-mono">
            メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。
          </p>
          <p className="font-serif">
            ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。　広い門の下には、この男のほかに誰もいない。
          </p>
        </div>
        <div className="bg-yellow-500 p-5 mt-3 border-8 border-white/50 outline-4 outline-blue-100 text-center">
          aaaa
        </div>
        <div className="w-96 h-96 bg-white">
          <p className="text-blue-600 dark:text-sky-400/100">The quick brown fox jumps over the lazy dog</p>
          <p className="text-blue-500 dark:text-sky-400/100">The quick brown fox jumps over the lazy dog</p>
          <p className="text-blue-400 dark:text-sky-400/100">The quick brown fox jumps over the lazy dog</p>
          <p className="text-blue-100 dark:text-sky-400/100">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div>
          <div className="border-8 border-sky-400 bg-indigo-500 bg-clip-border p-3">xxx</div>
          
          <div className="border-8 border-black bg-indigo-500 bg-clip-padding p-3">xxx</div>
          <div className="border-4 bg-indigo-500 bg-clip-content p-3">xxx</div>
          <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
            Hello world
          </p>
        </div>
      </div>
      
  
  );
}
