import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import collegeInterior from 'figma:asset/bd9baf3ce44f74073eeab8f2171f03beeb9dd729.png';
import campusBackground from 'figma:asset/622040f8ab38ec1d5bd4d97452219a578b57da8e.png';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ImageSliderProps {
  slides?: Slide[];
  autoPlayInterval?: number;
}

export function ImageSlider({ slides, autoPlayInterval = 5000 }: ImageSliderProps) {
  const defaultSlides: Slide[] = [
    {
      id: 1,
      image: campusBackground,
      title: 'Campus Overview',
      description: 'State-of-the-art infrastructure for comprehensive education',
      link: '#campus-life'
    },
    {
      id: 2,
      image: collegeInterior,
      title: 'Library Services',
      description: 'Manage your issued books, reissues, and fine payments online',
      link: 'library'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYzNTE5NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Academic Services',
      description: 'Apply for marksheet and degree certificates with ease',
      link: 'academic-services'
    }
  ];

  const displaySlides = slides || defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [displaySlides.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displaySlides.length) % displaySlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {displaySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-white mb-2">{slide.title}</h3>
              <p className="text-gray-200 text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {displaySlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}