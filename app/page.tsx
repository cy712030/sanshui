import Image from "next/image";
import { Github, MessageCircle, ExternalLink, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <main className="space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-8 pt-12 animate-fadeInUp">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl animate-float">
                <Image
                  src="https://files.mdnice.com/user/70914/b0d016f3-806c-4f98-99eb-03d4fd94aade.jpg"
                  alt="三水头像"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full animate-pulse-slow">
                <User size={20} />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                三水
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                AI 智能体应用师 | 14年+ 造价人
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg">
                专注于AI提示词、AI代写、AI编程领域。破局行动家，致力于推动AI与技术融合发展。
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">关于我</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">🎯 专业背景</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="hover:text-blue-600 transition-colors duration-200">• 14年+ 造价行业经验</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">• AI 智能体应用师</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">• 2024年初专注AI领域</li>
                    <li className="hover:text-blue-600 transition-colors duration-200">• 破局行动家（AI破局俱乐部成员）</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 核心技能</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="hover:text-purple-600 transition-colors duration-200">• 精通Prompt在写作中的提效应用</li>
                    <li className="hover:text-purple-600 transition-colors duration-200">• AI智能体搭建与开发</li>
                    <li className="hover:text-purple-600 transition-colors duration-200">• AI编程与技术融合</li>
                    <li className="hover:text-purple-600 transition-colors duration-200">• 日常办公AI化解决方案</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">联系方式</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://www.zhihu.com/people/cy3-70"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink size={24} />
                <div>
                  <p className="font-semibold">知乎</p>
                  <p className="text-sm opacity-90">@cy3-70</p>
                </div>
              </a>

              <a
                href="https://github.com/cy712030/sanshui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
              >
                <Github size={24} />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm opacity-90">@cy712030</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MessageCircle size={24} />
                <div>
                  <p className="font-semibold">微信公众号</p>
                  <p className="text-sm opacity-90">三水聊AI</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MessageCircle size={24} />
                <div>
                  <p className="font-semibold">微信</p>
                  <p className="text-sm opacity-90">cy712030</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">让我们一起探索AI的无限可能</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                如果您对AI应用、智能体开发或者技术融合有任何想法或合作意向，欢迎随时联系我。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.zhihu.com/people/cy3-70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  <ExternalLink size={20} />
                  <span>知乎联系</span>
                </a>
                <a
                  href="https://github.com/cy712030/sanshui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 mt-16">
          <p className="text-gray-600">
            © 2025 三水 | 用❤️和AI构建
          </p>
        </footer>
      </div>
    </div>
  );
}
