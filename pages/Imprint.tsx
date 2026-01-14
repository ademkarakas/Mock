import React from "react";
import {
  FileText,
  MapPin,
  Mail,
  Phone,
  Building2,
  AlertCircle,
} from "lucide-react";
import { Language } from "../types";

interface ImprintProps {
  lang: Language;
}

const Imprint: React.FC<ImprintProps> = ({ lang }) => {
  const isGerman = lang === "de";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-kpf-teal to-teal-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <FileText size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Building2 className="text-white" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {isGerman ? "Impressum" : "Künye"}
            </h1>
          </div>
          <div className="w-24 h-1.5 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Organization Info */}
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <Building2 size={24} className="text-kpf-red" />
              {isGerman ? "Informationen zum Betreiber" : "Kuruluş Bilgileri"}
            </h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-bold text-lg mb-2">
                  KulturPlattform Freiburg e.V.
                </p>
                <p className="text-sm text-slate-600">
                  {isGerman ? "Eingetragener Verein" : "Kayıtlı Dernek"}
                </p>
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section>
            <h2 className="text-2xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <MapPin size={24} className="text-kpf-teal" />
              {isGerman ? "Adresse" : "Adres"}
            </h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-kpf-teal/20 space-y-4">
              <div className="text-slate-700">
                <p className="font-bold mb-2">KulturPlattform Freiburg e.V.</p>
                <p>Böcklerstraße 3</p>
                <p>79110 Freiburg im Breisgau</p>
                <p>{isGerman ? "Deutschland" : "Almanya"}</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <Mail size={24} className="text-kpf-red" />
              {isGerman ? "Kontaktinformation" : "İletişim Bilgileri"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-kpf-teal/20">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Mail size={18} className="text-kpf-red" />
                  E-Mail
                </h3>
                <a
                  href="mailto:info@kulturplattform.org"
                  className="text-kpf-teal hover:text-kpf-teal/80 font-medium"
                >
                  info@kulturplattform.org
                </a>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-kpf-red/20">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Phone size={18} className="text-kpf-red" />
                  {isGerman ? "Telefon" : "Telefon"}
                </h3>
                <a
                  href="tel:+497611234567"
                  className="text-kpf-teal hover:text-kpf-teal/80 font-medium"
                >
                  +49 176 235 97 392
                </a>
              </div>
            </div>
          </section>

          {/* Responsible Persons */}
          <section>
            <h2 className="text-2xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Verantwortliche Personen" : "Sorumlu Kişiler"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-kpf-teal/10 p-6 rounded-2xl border border-kpf-teal/20">
                <p className="font-bold text-lg text-slate-800 mb-2">
                  {isGerman ? "Vorsitzender:" : "Başkan:"}
                </p>
                <p className="text-slate-700">Ünal Çakır</p>
              </div>
              <div className="bg-kpf-teal/10 p-6 rounded-2xl border border-kpf-teal/20">
                <p className="font-bold text-lg text-slate-800 mb-2">
                  {isGerman ? "Ko-Vorsitzender:" : "Ko-Başkan:"}
                </p>
                <p className="text-slate-700">Yusuf Atçı</p>
              </div>
            </div>
          </section>

          {/* Legal Structure */}
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Rechtsform und Zweck" : "Yasal Yapı ve Amaç"}
            </h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-bold mb-2">
                  {isGerman ? "Rechtsform:" : "Yasal Yapı:"}
                </p>
                <p>
                  {isGerman
                    ? "Eingetragener Verein (e.V.)"
                    : "Kayıtlı Dernek (e.V.)"}
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">
                  {isGerman ? "Gemeinnütziger Zweck:" : "Kamu Yararına Amaç:"}
                </p>
                <p>
                  {isGerman
                    ? "Förderung von Kultur, Bildung und interkulturellem Dialog zwischen Deutschland und der Türkei."
                    : "Almanya ve Türkiye arasında kültür, eğitim ve kültürlerarası diyaloğun teşviki."}
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">
                  {isGerman
                    ? "Gemeinnütziger Status:"
                    : "Vergi Muafiyeti Durumu:"}
                </p>
                <p>
                  {isGerman
                    ? "Anerkennt als gemeinnützige Organisation"
                    : "Kamu yararına kuruluş olarak tanınır"}
                </p>
              </div>
            </div>
          </section>

          {/* Content Responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <AlertCircle size={24} className="text-kpf-red" />
              {isGerman ? "Verantwortung für Inhalte" : "İçerik Sorumluluğu"}
            </h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-kpf-red/20 space-y-4 text-slate-700">
              <p>
                {isGerman
                  ? "Als Diensteanbieterin bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
                  : "İçerik sağlayıcı olarak, bu sayfalar üzerindeki kendi içeriklerinden genel yasalara uygun şekilde sorumlu olacağız. Ancak, iletilen veya saklanan üçüncü taraf bilgilerini izlemek veya yasa dışı faaliyet gösteren koşulları araştırmakla yükümlü değiliz."}
              </p>
              <p>
                {isGerman
                  ? "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt und gelten ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung."
                  : "Bilgilerin kaldırılması veya kullanımının engellenmesine ilişkin yükümlülükler bu durumdan etkilenmez ve somut bir yasalık ihlali hakkında bilgi sahibi olunduktan itibaren geçerli olur."}
              </p>
            </div>
          </section>

          {/* Liability for Links */}
          <section>
            <h2 className="text-2xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Haftung für Links" : "Bağlantılar İçin Sorumluluk"}
            </h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 space-y-4 text-slate-700">
              <p>
                {isGerman
                  ? "Unsere Website enthält Links zu externen Websites. Wir haben keine Kontrolle über die Inhalte dieser externen Seiten und können daher keine Verantwortung für diese übernehmen. Die Verantwortung für den Inhalt der verlinkten Seiten liegt ausschließlich bei deren Betreibern."
                  : "Web sitesi, harici web sitelerine bağlantılar içerebilir. Bu harici sayfaların içeriği üzerinde hiçbir kontrolümüz yoktur ve bu nedenle bunlar için sorumluluk alamayız. Bağlantılı sayfaların içeriğine ilişkin sorumluluk tamamen işletmecilerine aittir."}
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="bg-kpf-teal/10 p-8 rounded-2xl border border-kpf-teal/20">
            <h2 className="text-2xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Urheberrecht" : "Telif Hakkı"}
            </h2>
            <p className="text-slate-700">
              {isGerman
                ? "Die Inhalte und Werke auf diesen Seiten sind urheberrechtlich geschützt. Jede Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedarf der schriftlichen Zustimmung des Autors bzw. Erstellers."
                : "Bu sayfaların içeriği ve eserleri telif hakkı korumasındadır. Telif hakkı sınırları dışında herhangi bir çoğaltma, değiştirilme, dağıtılma ve her türlü kullanım, yazarın veya oluşturucunun yazılı izni gerektirir."}
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center text-slate-500 text-sm pt-8 border-t border-slate-200">
            <p>
              {isGerman ? "Zuletzt aktualisiert:" : "Son Güncelleme:"}{" "}
              {new Date().toLocaleDateString(isGerman ? "de-DE" : "tr-TR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
