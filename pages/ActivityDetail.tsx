import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Play,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { Language, Activity } from "../types";
import { TEXTS } from "../constants";

interface ActivityDetailProps {
  activity: Activity;
  lang: Language;
  onBack: () => void;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({
  activity,
  lang,
  onBack,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [showVideoModal, setShowVideoModal] = useState(false);

  const t = (key: string) => TEXTS[key][lang];

  const isYouTubeVideo = (url: string): boolean => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]?.split("?")[0]
      : url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const isVimeoVideo = (url: string): boolean => {
    return url.includes("vimeo.com");
  };

  const getVimeoEmbedUrl = (url: string): string => {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-kpf-teal transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>{lang === "tr" ? "Geri Dön" : "Zurück"}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
          <img
            src={activity.imageUrl}
            alt={activity.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="inline-block px-4 py-1.5 bg-kpf-teal rounded-full text-sm font-bold mb-4">
              {t(`activities_filter_${activity.category}`)}
            </div>
            <h1 className="text-4xl font-bold mb-4">{activity.title[lang]}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{activity.date[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{activity.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {lang === "tr" ? "Açıklama" : "Beschreibung"}
          </h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">
            {activity.description[lang]}
          </p>
        </div>

        {/* Detailed Content */}
        {activity.detailedContent && activity.detailedContent[lang] && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {lang === "tr" ? "Detaylı İçerik" : "Detaillierter Inhalt"}
            </h2>
            <div
              className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: activity.detailedContent[lang],
              }}
            />
          </div>
        )}

        {/* Video */}
        {activity.videoUrl && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Play size={24} className="text-kpf-red" />
              {lang === "tr" ? "Video" : "Video"}
            </h2>
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
              {isYouTubeVideo(activity.videoUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(activity.videoUrl)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isVimeoVideo(activity.videoUrl) ? (
                <iframe
                  src={getVimeoEmbedUrl(activity.videoUrl)}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activity.videoUrl}
                  controls
                  className="w-full h-full"
                >
                  {lang === "tr"
                    ? "Tarayıcınız video oynatmayı desteklemiyor."
                    : "Ihr Browser unterstützt die Videowiedergabe nicht."}
                </video>
              )}
            </div>
          </div>
        )}

        {/* Gallery */}
        {activity.galleryImages && activity.galleryImages.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ImageIcon size={24} className="text-kpf-teal" />
              {lang === "tr" ? "Fotoğraf Galerisi" : "Fotogalerie"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activity.galleryImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={imageUrl}
                    alt={`${activity.title[lang]} - ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Gallery Images */}
      {selectedImageIndex !== null && activity.galleryImages && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                selectedImageIndex > 0
                  ? selectedImageIndex - 1
                  : activity.galleryImages!.length - 1
              );
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                selectedImageIndex < activity.galleryImages!.length - 1
                  ? selectedImageIndex + 1
                  : 0
              );
            }}
          >
            ›
          </button>
          <img
            src={activity.galleryImages[selectedImageIndex]}
            alt={`${activity.title[lang]} - ${selectedImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {activity.galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityDetail;
