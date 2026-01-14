import React from "react";
import { Heart, Users, Zap, Sprout, Mail, MapPin, Share2 } from "lucide-react";
import { Language, PageView } from "../types";

interface VolunteerProps {
  lang: Language;
  setPage?: (page: PageView) => void;
}

const Volunteer: React.FC<VolunteerProps> = ({ lang, setPage }) => {
  const isGerman = lang === "de";

  const t = {
    title: isGerman ? "Freiwilliger werden" : "Gönüllü Ol",
    subtitle: isGerman
      ? "Freiwilligenmitgliedschaft: Zusammen sind wir stärker"
      : "Gönüllü Üyelik: Birlikte Daha Güçlüyüz",
    intro: isGerman
      ? "Jeder Verein bezieht seine Kraft von seinen Mitgliedern und Freiwilligen. Wenn wir zusammen handeln, können wir größere Dinge erreichen und einen nachhaltigen Nutzen für die Gesellschaft bringen. Deshalb ist die Freiwilligenmitgliedschaft nicht nur für unseren Verein, sondern auch für die Zukunft unserer Gesellschaft von unschätzbarem Wert."
      : "Her dernek, gücünü üyelerinden ve gönüllülerinden alır. Birlikte hareket ettiğimizde daha büyük işler başarabilir, toplum için kalıcı faydalar sağlayabiliriz. İşte bu yüzden gönüllü üyelik, yalnızca derneğimiz için değil, toplumun geleceği için de çok kıymetlidir.",

    section_what: isGerman
      ? "Was ist Freiwilligenmitgliedschaft?"
      : "Gönüllü Üyelik Nedir?",
    what_desc: isGerman
      ? "Freiwilligenmitgliedschaft bedeutet, Wissen, Kraft und Zeit ohne materielle Gegenleistung für das gesellschaftliche Wohl zu teilen. Freiwillige Mitglieder unseres Vereins:"
      : "Gönüllü üyelik, maddi bir beklenti olmadan; bilgi, emek ve zamanını toplumsal fayda için paylaşmayı ifade eder. Derneğimize gönüllü üye olan kişiler:",

    what_activities: [
      {
        title: isGerman
          ? "Unterstützen die Planung und Durchführung unserer Veranstaltungen"
          : "Etkinliklerimizin planlanmasına ve uygulanmasına destek olur",
      },
      {
        title: isGerman
          ? "Spielen eine aktive Rolle in unseren Projekten"
          : "Projelerimizde aktif rol alır",
      },
      {
        title: isGerman
          ? "Tragen mit Verantwortungsbewusstsein zur Gesellschaft bei"
          : "Sosyal sorumluluk bilinciyle topluma katkı sağlar",
      },
    ],

    section_why: isGerman
      ? "Warum sollten Sie Freiwilliger sein?"
      : "Neden Gönüllü Olmalısınız?",

    benefits: [
      {
        icon: "Heart",
        title: isGerman ? "Beitrag zur Gesellschaft" : "Topluma Katkı",
        desc: isGerman
          ? "Sie können das Leben von Menschen berühren und einen Unterschied machen."
          : "İnsanların hayatına dokunarak fark yaratabilirsiniz.",
      },
      {
        icon: "Zap",
        title: isGerman ? "Persönliche Entwicklung" : "Kişisel Gelişim",
        desc: isGerman
          ? "Sie können neue Fähigkeiten erwerben und verschiedene Menschen kennenlernen."
          : "Yeni beceriler kazanabilir, farklı insanlarla tanışabilirsiniz.",
      },
      {
        icon: "Users",
        title: isGerman ? "Einheit und Solidarität" : "Birlik ve Dayanışma",
        desc: isGerman
          ? "Sie erfahren die Kraft des Zusammenhandelns für gemeinsame Ziele."
          : "Ortak amaçlar uğruna birlikte hareket etmenin gücünü hissedersiniz.",
      },
      {
        icon: "Sprout",
        title: isGerman
          ? "Hinterlasse einen bleibenden Eindruck"
          : "İz Bırakma",
        desc: isGerman
          ? "Sie können zukünftigen Generationen eine lebenswertere Gesellschaft hinterlassen."
          : "Gelecek nesillere daha yaşanabilir bir toplum bırakabilirsiniz.",
      },
    ],

    section_who: isGerman
      ? "Wer kann Freiwilliger werden?"
      : "Kimler Gönüllü Olabilir?",
    who_desc: isGerman
      ? "Unabhängig von Alter, Beruf oder Fähigkeit kann jeder ein Freiwilliger werden. Das Einzige, das wichtig ist, ist der Wunsch, zur Gesellschaft beizutragen und die Motivation, zusammen zu handeln."
      : "Yaş, meslek veya yetenek fark etmeksizin herkes gönüllü olabilir. Önemli olan tek şey, topluma katkı sağlama isteği ve birlikte hareket etme motivasyonudur.",

    section_how: isGerman
      ? "Wie wird man Freiwilliger?"
      : "Nasıl Gönüllü Olunur?",
    how_methods: [
      {
        icon: "Mail",
        title: isGerman
          ? "Füllen Sie das Bewerbungsformular auf unserer Website aus"
          : "Web sitemizdeki 'Üye Ol' formunu doldurarak",
      },
      {
        icon: "MapPin",
        title: isGerman
          ? "Besuchen Sie unser Vereinszentrum"
          : "Dernek merkezimize gelerek",
        desc: isGerman
          ? "Böcklerstraße 3, 79110 Freiburg im Breisgau"
          : "Böcklerstraße 3, 79110 Freiburg im Breisgau",
      },
      {
        icon: "Share2",
        title: isGerman
          ? "Kontaktieren Sie uns über unsere Social-Media-Konten"
          : "Sosyal medya hesaplarımız üzerinden bizimle iletişime geçerek",
      },
    ],

    cta_button: isGerman ? "Lassen Sie uns anfangen" : "Başlayalım",
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart size={32} />;
      case "Zap":
        return <Zap size={32} />;
      case "Users":
        return <Users size={32} />;
      case "Sprout":
        return <Sprout size={32} />;
      case "Mail":
        return <Mail size={24} />;
      case "MapPin":
        return <MapPin size={24} />;
      case "Share2":
        return <Share2 size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-kpf-red to-teal-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Heart size={300} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="text-white" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {t.title}
            </h1>
          </div>
          <p className="text-teal-100 text-lg">{t.subtitle}</p>
          <div className="w-24 h-1.5 bg-white/30 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Intro */}
          <section className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-l-4 border-kpf-teal">
            <p className="text-lg text-slate-700 leading-relaxed">{t.intro}</p>
          </section>

          {/* What is Volunteer Membership */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-kpf-dark">
              {t.section_what}
            </h2>
            <p className="text-slate-700 leading-relaxed">{t.what_desc}</p>
            <div className="space-y-3">
              {t.what_activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-slate-50 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-kpf-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">{activity.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Volunteer */}
          <section>
            <h2 className="text-3xl font-bold text-kpf-dark mb-8">
              {t.section_why}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-l-4 border-kpf-teal hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-kpf-teal flex-shrink-0">
                      {getIcon(benefit.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who Can Volunteer */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-l-4 border-green-500">
            <h2 className="text-3xl font-bold text-kpf-dark mb-6">
              {t.section_who}
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t.who_desc}
            </p>
          </section>

          {/* How to Volunteer */}
          <section>
            <h2 className="text-3xl font-bold text-kpf-dark mb-8">
              {t.section_how}
            </h2>
            <div className="space-y-4">
              {t.how_methods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-l-4 border-kpf-teal hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-kpf-teal flex-shrink-0 mt-1">
                      {getIcon(method.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">
                        {method.title}
                      </h3>
                      {method.desc && (
                        <p className="text-slate-600 text-sm">{method.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-kpf-teal to-teal-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isGerman
                ? "Beginnen Sie jetzt, machen Sie einen Unterschied!"
                : "Hemen Başla, Fark Yarat!"}
            </h2>
            <p className="text-teal-100 mb-6 text-lg">
              {isGerman
                ? "Lassen Sie uns die Zukunft unserer Gesellschaft gemeinsam gestalten."
                : "Toplumun geleceğini birlikte şekillendirelim."}
            </p>
            <button
              onClick={() => {
                if (setPage) setPage("volunteer-form");
              }}
              className="bg-white text-kpf-teal px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors cursor-pointer"
            >
              {t.cta_button}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
