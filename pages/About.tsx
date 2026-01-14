import React, { useState } from "react";
import {
  Quote,
  Target,
  Eye,
  BookOpen,
  Heart,
  Users,
  Globe,
  Leaf,
  ExternalLink,
  ShieldAlert,
  X,
  Instagram,
} from "lucide-react";
import { Language, TeamMember } from "../types";
import {
  TEXTS,
  TEAM_MEMBERS,
  CORE_VALUES,
  PRACTICE_AREAS,
  FOCUS_AREAS,
  PARTNERS,
} from "../constants";

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const t = (key: string) => TEXTS[key][lang];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-kpf-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
            {t("about_title")}
          </h1>
          <div className="w-24 h-1.5 bg-kpf-red mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container mx-auto px-4 -mt-10 mb-20 relative z-20">
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border-t-8 border-kpf-teal max-w-4xl mx-auto text-center transform hover:-translate-y-1 transition-transform duration-300">
          <Quote className="text-kpf-teal/20 w-16 h-16 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-serif text-slate-700 italic mb-8 leading-relaxed">
            "{t("quote_text")}"
          </p>
          <div className="text-kpf-red font-bold tracking-widest uppercase text-sm">
            — {t("quote_author")}
          </div>
        </div>
      </div>

      {/* Who We Are & Goals */}
      <div className="container mx-auto px-4 mb-24 max-w-7xl">
        {/* Who We Are - Enhanced Layout with Image */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://picsum.photos/800/800?random=community"
                alt="Community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-kpf-teal/20"></div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-kpf-red/10 text-kpf-red rounded-2xl">
                    <Users size={32} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-kpf-dark m-0">
                    {t("about_who_title")}
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line text-justify">
                  {t("about_who_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals - Enhanced Card */}
        <div className="bg-kpf-teal text-white p-10 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={200} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="p-4 bg-white/20 text-white rounded-2xl backdrop-blur-sm">
                <Target size={40} />
              </div>
              <h2 className="text-4xl font-serif font-bold">
                {t("about_goals_title")}
              </h2>
            </div>
            <p className="text-teal-50 text-lg leading-relaxed text-justify">
              {t("about_goals_desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-kpf-teal rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -right-20 bottom-20 w-64 h-64 bg-kpf-red rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-kpf-teal/30 to-teal-900/40 p-10 rounded-3xl border border-teal-400/30 backdrop-blur-sm hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-kpf-teal to-teal-600 rounded-l-3xl"></div>
              <div className="flex items-center gap-4 mb-8 text-teal-300">
                <Eye size={40} />
                <h2 className="text-4xl font-serif font-bold text-white">
                  {t("about_vision_title")}
                </h2>
              </div>
              <p className="text-slate-200 leading-loose text-lg text-justify">
                {t("about_vision_desc")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-red-950/40 p-10 rounded-3xl border border-red-400/30 backdrop-blur-sm hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-500/20 transition-all relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-kpf-red to-red-600 rounded-l-3xl"></div>
              <div className="flex items-center gap-4 mb-8 text-red-300">
                <BookOpen size={40} />
                <h2 className="text-4xl font-serif font-bold text-white">
                  {t("about_mission_title")}
                </h2>
              </div>
              <p className="text-slate-200 leading-loose text-lg text-justify">
                {t("about_mission_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div id="core-values-section" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-kpf-dark mb-4">
              {t("about_values_title")}
            </h2>
            <div className="w-24 h-1.5 bg-kpf-teal mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, index) => (
              <div
                key={value.id}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-kpf-red hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-red-50 transition-colors"></div>
                <div className="text-5xl font-bold text-slate-100 group-hover:text-red-100 transition-colors mb-4 absolute right-4 top-2 select-none">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-kpf-dark mb-4 relative z-10 pr-8 group-hover:text-kpf-red transition-colors">
                  {value.title[lang]}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  {value.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Areas (Gender, Social, Dialog) */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-kpf-dark mb-16 text-center">
            {t("about_focus_title")}
          </h2>

          <div className="space-y-12">
            {FOCUS_AREAS.map((area, index) => (
              <div
                key={area.id}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-kpf-teal/10 text-kpf-teal rounded-lg">
                      {index === 0 && <Users size={24} />}
                      {index === 1 && <Heart size={24} />}
                      {index === 2 && <Globe size={24} />}
                    </div>
                    <h3 className="text-2xl font-bold text-kpf-dark">
                      {area.title[lang]}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg text-justify">
                    {area.description[lang]}
                  </p>
                </div>
                <div className="flex-1 bg-slate-50 h-64 w-full rounded-2xl flex items-center justify-center text-slate-300 overflow-hidden relative group">
                  <img
                    src={`https://picsum.photos/600/400?random=${index + 20}`}
                    alt={area.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-kpf-dark/20 group-hover:bg-kpf-dark/10 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tenkil Museum / Human Rights Section */}
      <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/50 text-red-200 border border-red-800 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldAlert size={14} />{" "}
                {lang === "tr"
                  ? "İnsan Hakları & Mülteciler"
                  : "Menschenrechte & Flüchtlinge"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                {t("about_tenkil_title")}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                {t("about_tenkil_desc")}
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-6 justify-center">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors cursor-pointer group">
                <ShieldAlert
                  size={64}
                  className="mx-auto text-kpf-red mb-4 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-2xl mb-2">Tenkil Museum</h4>
                <div className="h-0.5 w-12 bg-kpf-red mx-auto my-4"></div>
                <p className="text-sm text-slate-400">
                  {lang === "tr"
                    ? "Hatırlamak ve yüzleşmek için."
                    : "Erinnern und konfrontieren."}
                </p>
              </div>
              <a
                href="https://www.instagram.com/tenkil.museum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-2xl border border-pink-400/30 backdrop-blur-sm hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 text-center transition-all group"
              >
                <Instagram
                  size={48}
                  className="mx-auto text-white mb-4 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-2xl mb-2 text-white">
                  Instagram
                </h4>
                <div className="h-0.5 w-12 bg-white mx-auto my-4"></div>
                <p className="text-sm text-white/90">
                  {lang === "tr" ? "Bizi takip edin" : "Folgen Sie uns"}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-serif font-bold text-kpf-dark mb-12 text-center">
            {t("about_practices_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area, idx) => (
              <div
                key={area.id}
                className={`flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 ${
                  idx % 2 === 0 ? "border-kpf-teal" : "border-kpf-red"
                } hover:translate-x-1 group`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner transition-colors group-hover:text-white ${
                      idx % 2 === 0
                        ? "bg-teal-50 text-kpf-teal group-hover:bg-kpf-teal"
                        : "bg-red-50 text-kpf-red group-hover:bg-kpf-red"
                    }`}
                  >
                    {area.id === "1" && <BookOpen size={24} />}
                    {area.id === "2" && <Heart size={24} />}
                    {area.id === "3" && <Users size={24} />}
                    {area.id === "4" && <Globe size={24} />}
                    {area.id === "5" && <Target size={24} />}
                    {area.id === "6" && <Leaf size={24} />}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">
                    {area.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        {" "}
        {/* Arka planı saf beyaz yaparak ayırdık */}
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              {t("partners_title")}
            </h2>
            <div className="w-20 h-1.5 bg-kpf-teal mx-auto rounded-full opacity-60"></div>
          </div>

          {/* Partners Grid */}
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {PARTNERS.map((partner) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                {/* Logo Card */}
                <div className="relative h-44 w-60 md:h-48 md:w-64 bg-slate-50 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 overflow-hidden">
                  {/* Arka plan süsü (Hover'da belirir) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kpf-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain transition-all duration-500 transform group-hover:scale-110"
                    /* Grayscale kaldırıldı, logolar her zaman canlı */
                  />
                </div>

                {/* Partner Name Label */}
                <div className="mt-4 flex items-center gap-2 text-slate-500 group-hover:text-kpf-teal transition-colors duration-300">
                  <span className="text-sm font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {partner.name}
                  </span>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-center text-kpf-dark mb-16">
            {lang === "tr" ? "Ekibimiz" : "Unser Team"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group cursor-pointer hover:-translate-y-2"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-kpf-teal rounded-full opacity-0 group-hover:opacity-10 transition-opacity transform group-hover:scale-110"></div>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-slate-50 shadow-md relative z-10"
                  />
                </div>
                <h3 className="font-bold text-2xl text-slate-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-kpf-teal font-medium mb-4 uppercase tracking-wide text-sm">
                  {member.role[lang]}
                </p>
                <button className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-500 group-hover:bg-kpf-teal group-hover:text-white transition-colors">
                  {lang === "tr" ? "Detayları Gör" : "Details ansehen"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="bg-white rounded-3xl w-full max-w-2xl relative z-10 shadow-2xl animate-fade-in-up overflow-hidden">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-2 rounded-full transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kpf-dark/80 to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-4 text-white md:hidden">
                  <h3 className="font-bold text-2xl">{selectedMember.name}</h3>
                  <p className="opacity-90">{selectedMember.role[lang]}</p>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-white">
                <div className="hidden md:block mb-6">
                  <h3 className="font-bold text-3xl text-kpf-dark mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-kpf-teal font-bold uppercase tracking-wide text-sm">
                    {selectedMember.role[lang]}
                  </p>
                </div>
                <div className="h-1 w-20 bg-kpf-red rounded-full mb-6 hidden md:block"></div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {selectedMember.bio[lang]}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold transition-colors"
                  >
                    {lang === "tr" ? "Kapat" : "Schließen"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
