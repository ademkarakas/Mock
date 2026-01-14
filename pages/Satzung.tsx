import React from "react";
import { FileText, BookOpen, Users, Shield } from "lucide-react";
import { Language } from "../types";

interface SatzungProps {
  lang: Language;
}

const Satzung: React.FC<SatzungProps> = ({ lang }) => {
  const isGerman = lang === "de";

  const t = {
    title: isGerman ? "Satzung" : "Tüzük",
    name_and_seat: isGerman ? "Name und Sitz" : "Ad ve Merkezi",
    name_of_association: isGerman ? "1) Name des Vereins" : "1) Derneğin Adı",
    name_desc: isGerman
      ? 'Der Verein trägt den Namen "Kulturplattform Freiburg e.V."'
      : 'Dernek "Kulturplattform Freiburg e.V." adını taşır.',
    seat: isGerman ? "2) Sitz des Vereins" : "2) Derneğin Merkezi",
    seat_desc: isGerman
      ? "Sitz des Vereins ist Freiburg im Breisgau."
      : "Derneğin merkezi Freiburg im Breisgau'dur.",
    fiscal_year: isGerman ? "3) Geschäftsjahr" : "3) Mali Yıl",
    fiscal_year_desc: isGerman
      ? "Das Geschäftsjahr entspricht dem Kalenderjahr."
      : "Mali yıl takvim yılıyla eşleşir.",
    purpose_of_association: isGerman ? "Zweck des Vereins" : "Derneğin Amacı",
    purposes: [
      {
        letter: "a)",
        de: "Die Förderung des bürgerschaftlichen Engagements zugunsten gemeinnütziger, mildtätiger und kirchlicher Zwecke",
        tr: "Kamuya yararlı, hayırsever ve kilise amaçları için vatandaş katılımının teşviki",
      },
      {
        letter: "b)",
        de: "Die Förderung internationaler Gesinnung, der Toleranz, des Friedens auf allen Gebieten der Kultur und des Völkerverständigungsgedankens",
        tr: "Uluslararası ruh, tolerans, kültürün tüm alanlarında barış ve halklarla anlaşma fikrini teşvik etme",
      },
      {
        letter: "c)",
        de: "Die Förderung der Gleichberechtigung von Frauen und Männern",
        tr: "Kadınlar ve erkekler arasında eşitliğin teşviki",
      },
      {
        letter: "d)",
        de: "Die Förderung der Kinder- und Jugendhilfe",
        tr: "Çocuk ve gençlik yardımının teşviki",
      },
      {
        letter: "e)",
        de: "Die Förderung von Kunst und Kultur",
        tr: "Sanat ve kültürün teşviki",
      },
      {
        letter: "f)",
        de: "Die Förderung von Erziehung, schulischer und vorschulischer Bildung, Volks- und Berufsbildung einschließlich der Studentenhilfe",
        tr: "Eğitim, okul öncesi ve okul eğitimi, halk ve meslek eğitimi ve öğrenci yardımı dahil olmak üzere eğitimin teşviki",
      },
      {
        letter: "g)",
        de: "Die Förderung der Hilfe für politisch, rassistisch oder religiös Verfolgte, für Flüchtlinge, Vertriebene, Aussiedler, Spätaussiedler, Zivilbeschädigte und Behinderte sowie Hilfe für Opfer von Straftaten",
        tr: "Siyasi, ırkçı veya dini nedenlerle zulüm görenler, mülteciler, yerinden edilenler, yerleşimciler, geç yerleşimciler, sivil hasarlar gören ve engelliler için yardım sağlama ve suç kurbanları için yardım",
      },
    ],
    realization: isGerman
      ? "Der Satzungszweck wird verwirklicht insbesondere durch:"
      : "Tüzük amacı özellikle şu yollarla gerçekleştirilir:",
    common_engagement: isGerman
      ? "Förderung des bürgerschaftlichen Engagements"
      : "Vatandaş Katılımının Teşviki",
    international_understanding: isGerman
      ? "Förderung internationaler Gesinnung und Völkerverständnis"
      : "Uluslararası Ruh ve Halk Anlayışının Teşviki",
    gender_equality: isGerman
      ? "Förderung der Gleichberechtigung"
      : "Eşitliğin Teşviki",
    youth_support: isGerman
      ? "Förderung der Kinder- und Jugendhilfe"
      : "Çocuk ve Gençlik Yardımının Teşviki",
    art_culture: isGerman
      ? "Förderung von Kunst und Kultur"
      : "Sanat ve Kültürün Teşviki",
    education: isGerman ? "Förderung von Bildung" : "Eğitimin Teşviki",
    help_persecuted: isGerman
      ? "Förderung der Hilfe für Verfolgte und Flüchtlinge"
      : "Zulüm Görenler ve Mültecilere Yardım",
    non_profit: isGerman ? "Gemeinnützigkeit" : "Kamu Yararına",
    political_neutrality: isGerman
      ? "Politische Neutralität"
      : "Siyasi Tarafsızlık",
    membership: isGerman ? "Mitgliedschaft" : "Üyelik",
    acquisition: isGerman ? "Erwerb der Mitgliedschaft" : "Üyelik Kazanımı",
    duties: isGerman ? "Pflichten der Mitglieder" : "Üyelerin Yükümlülükleri",
    termination: isGerman
      ? "Beendigung der Mitgliedschaft"
      : "Üyeliğin Sonlandırılması",
    updated: isGerman ? "Zuletzt aktualisiert:" : "Son Güncelleme:",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-kpf-teal to-teal-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <BookOpen size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-white" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {t.title}
            </h1>
          </div>
          <p className="text-teal-100">Kulturplattform Freiburg e.V.</p>
          <div className="w-24 h-1.5 bg-white/30 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Section 1: Name und Sitz */}
          <section className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-kpf-teal">
            <h2 className="text-3xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <Shield size={28} className="text-kpf-teal" />
              {t.name_and_seat}
            </h2>
            <div className="space-y-6 text-slate-700">
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-800">
                  {t.name_of_association}
                </h3>
                <p className="leading-relaxed">{t.name_desc}</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-800">{t.seat}</h3>
                <p className="leading-relaxed">{t.seat_desc}</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-800">
                  {t.fiscal_year}
                </h3>
                <p className="leading-relaxed">{t.fiscal_year_desc}</p>
              </div>
            </div>
          </section>

          {/* Section 2: Zweck des Vereins */}
          <section className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-kpf-red">
            <h2 className="text-3xl font-bold text-kpf-dark mb-6 flex items-center gap-3">
              <Users size={28} className="text-kpf-red" />
              {t.purpose_of_association}
            </h2>
            <div className="space-y-6 text-slate-700">
              <ul className="space-y-4">
                {t.purposes.map((p, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-kpf-teal font-bold flex-shrink-0">
                      {p.letter}
                    </span>
                    <span>{isGerman ? p.de : p.tr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: Gemeinnützigkeit */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-l-4 border-green-500">
            <h2 className="text-3xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Gemeinnützigkeit" : "Kamu Yararına"}
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                {isGerman
                  ? 'Der eingetragene Verein "Kulturplattform Freiburg e.V." verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des § 51 der Abgabenordnung.'
                  : 'Kaydı yapılan dernek "Kulturplattform Freiburg e.V." münhasıran ve doğrudan Vergilendirilme Kanunu\'nun § 51 anlamında kamuya yararlı amaçları takip etmektedir.'}
              </p>
              <p>
                {isGerman
                  ? 'Der Verein "Kulturplattform Freiburg e.V." ist selbstlos tätig und verfolgt keine eigenwirtschaftlichen Zwecke. Mittel der Körperschaft dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln der Körperschaft.'
                  : 'Dernek "Kulturplattform Freiburg e.V." fedakârca çalışmakta ve kendi ekonomik amaçlarını takip etmemektedir. Kuruluşun kaynakları yalnızca tüzük amaçları için kullanılabilir. Üyeler kuruluşun kaynağından herhangi bir yardım almazlar.'}
              </p>
            </div>
          </section>

          {/* Section 4: Politische Neutralität */}
          <section className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-l-4 border-slate-400">
            <h2 className="text-2xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Politische Neutralität" : "Siyasi Tarafsızlık"}
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-3">
              <p>
                {isGerman
                  ? "Der Verein verfolgt keine politischen Absichten. Er ist politisch neutral."
                  : "Dernek siyasi amaçları takip etmemektedir. Siyasi açıdan tarafsızdır."}
              </p>
              <p>
                {isGerman
                  ? "Rechtsgrundlage ist die deutsche Gesetzgebung und Rechtsprechung."
                  : "Yasal dayanak Alman mevzuatı ve hukuk uygulamasıdır."}
              </p>
            </div>
          </section>

          {/* Section 5: Mitgliedschaft */}
          <section className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200">
            <h2 className="text-3xl font-bold text-kpf-dark mb-6">
              {isGerman ? "Mitgliedschaft" : "Üyelik"}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-4">
                  {isGerman
                    ? "Der Verein besteht aus:"
                    : "Dernek şunlardan oluşur:"}
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-kpf-teal rounded-full"></span>
                    {isGerman ? "Ordentlichen Mitgliedern" : "Adi Üyeler"}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-kpf-teal rounded-full"></span>
                    {isGerman
                      ? "Außerordentlichen Mitgliedern"
                      : "İstisna Üyeler"}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-kpf-teal rounded-full"></span>
                    {isGerman ? "Fördermitgliedern" : "Destek Üyeleri"}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-kpf-teal rounded-full"></span>
                    {isGerman ? "Ehrenmitgliedern" : "Fahri Üyeler"}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-kpf-teal rounded-full"></span>
                    {isGerman ? "Beiratsmitgliedern" : "Danışma Kurulu Üyeleri"}
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-800">
                  {isGerman
                    ? "Erwerb der Mitgliedschaft"
                    : "Üyeliğin Kazanılması"}
                </h3>
                <ul className="list-decimal list-inside space-y-2 text-slate-700 ml-2">
                  <li>
                    {isGerman
                      ? "Mitglied kann jede natürliche Person werden, die die Ziele des Vereins anerkennt"
                      : "Derneğin amaçlarını kabul eden herhangi bir kişi üye olabilir"}
                  </li>
                  <li>
                    {isGerman
                      ? "Der Antrag muss auf einem Antragsformular schriftlich beim Vorstand eingereicht werden"
                      : "Başvuru, başvuru formunda yazılı olarak yönetim kuruluna sunulmalıdır"}
                  </li>
                  <li>
                    {isGerman
                      ? "Nicht vollgeschäftsfähige Personen müssen die Zustimmung ihrer/ihres gesetzlichen Vertreter/s nachweisen"
                      : "Tam ehliyeti olmayan kişiler yasal temsilcilerinin onayını göstermelidir"}
                  </li>
                  <li>
                    {isGerman
                      ? "Der Vorstand entscheidet über die Aufnahme nach freiem Ermessen"
                      : "Yönetim kurulu kabul üzerine kendi takdirine göre karar verir"}
                  </li>
                  <li>
                    {isGerman
                      ? "Eine Begründung für Ablehnung ist nicht erforderlich"
                      : "Red için gerekçe gösterilmesi gerekmez"}
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-800">
                  {isGerman
                    ? "Pflichten der Mitglieder"
                    : "Üyelerin Yükümlülükleri"}
                </h3>
                <ul className="list-decimal list-inside space-y-2 text-slate-700 ml-2">
                  <li>
                    {isGerman
                      ? "Befolgen der Satzung und Beschlüsse der Vereinsorgane"
                      : "Tüzük ve dernek organlarının kararlarına uyulması"}
                  </li>
                  <li>
                    {isGerman
                      ? "Zahlung der Mitgliedsbeiträge nach geltender Beitragsordnung"
                      : "Geçerli katılım ücretine göre üyelik aidatının ödenmesi"}
                  </li>
                  <li>
                    {isGerman
                      ? "Vertrauliche Behandlung von Vereinsinformationen"
                      : "Dernek bilgilerinin gizli tutulması"}
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-800">
                  {isGerman
                    ? "Beendigung der Mitgliedschaft"
                    : "Üyeliğin Sonlandırılması"}
                </h3>
                <p className="text-slate-700">
                  {isGerman
                    ? "Die Mitgliedschaft endet durch:"
                    : "Üyelik aşağıdakilerle sona erer:"}
                </p>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>
                    •{" "}
                    {isGerman
                      ? "Austritt (mit 3 Monaten Kündigungsfrist)"
                      : "Çıkış (3 ay bildirim süresine tabi)"}
                  </li>
                  <li>
                    •{" "}
                    {isGerman
                      ? "Streichung von der Mitgliederliste (bei Beitragsrückstand)"
                      : "Üyelik listesinden silme (aidat geri kalanında)"}
                  </li>
                  <li>• {isGerman ? "Tod des Mitglieds" : "Üyenin ölümü"}</li>
                  <li>
                    • {isGerman ? "Auflösung des Vereins" : "Derneğin feshi"}
                  </li>
                  <li>
                    •{" "}
                    {isGerman
                      ? "Ausschluss bei grundlegenden Verstößen gegen die Satzung"
                      : "Tüzüğe karşı temel ihlallerde dışlanma"}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-slate-500 text-sm pt-8 border-t border-slate-200">
            <p>
              {t.updated}{" "}
              {new Date().toLocaleDateString(isGerman ? "de-DE" : "tr-TR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satzung;
