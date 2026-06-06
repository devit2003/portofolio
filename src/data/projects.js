// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: 'NutriBot — Food Detection & Nutrition AI',
    description:
      'Sistem asisten virtual deteksi makanan dan konsultasi gizi berbasis AI untuk program Makan Bergizi Gratis (MBG). Melatih YOLOv8-S untuk mendeteksi 47 kelas makanan dengan Precision 70.89% dan mAP50 63.29%. Terintegrasi dengan RAG / LLM dan vector database.',
    thumbnail: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    tech: ['Python', 'YOLOv8', 'FastAPI', 'RAG', 'ChromaDB', 'Roboflow'],
    category: 'Computer Vision',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Skin Disease Detection',
    description:
      'Aplikasi deteksi penyakit kulit dengan CNN untuk gambar dan TF-IDF + NLTK untuk gejala teks. Mengklasifikasikan 8 jenis penyakit kulit dengan evaluasi Precision, Recall, F1-score. Dilengkapi fitur otomatisasi pengambilan informasi dari jurnal ilmiah (PDF).',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
    tech: ['Python', 'CNN', 'TensorFlow', 'TF-IDF', 'NLTK', 'OpenCV'],
    category: 'Computer Vision',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: 'https://youtu.be/yD3algpmHJM?si=2jeFbg3aQP5NNpvo',
    featured: true,
  },
  {
    id: 3,
    title: 'Speech Command Recognition (Custom HMM)',
    description:
      'Sistem pengenalan suara berbasis HMM yang dibangun dari nol tanpa hmmlearn. Mengontrol pemutar musik melalui 6 perintah suara: play, pause, next, close, up, down. Backend Flask dengan dataset audio format .mp3.',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
    tech: ['Python', 'HMM', 'Flask', 'NumPy', 'Web Speech API'],
    category: 'NLP / Speech',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Daily Assistant — Expert System & AI',
    description:
      'Aplikasi asisten harian berbasis sistem pakar untuk rekomendasi aktivitas dan pola makan sehat berbasis rule. Dilengkapi fitur suara (TTS & STT), antarmuka Flask, dan visualisasi statistik produktivitas harian dengan Chart.js.',
    thumbnail: 'https://images.unsplash.com/photo-1558403194-611308249627?w=600&q=80',
    tech: ['Python', 'Flask', 'Expert System', 'TTS', 'STT', 'Chart.js'],
    category: 'AI System',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: 'https://youtu.be/tSzgMa7zyy4?si=5lnfw3YRIZJZMvLx',
    featured: false,
  },
  {
    id: 5,
    title: 'Text Emotion Classification',
    description:
      'Proyek NLP klasifikasi emosi teks menggunakan TF-IDF, Hashing, dan berbagai model ML (SVM, Naive Bayes, Random Forest). Preprocessing lengkap: cleaning, stopword removal, stemming. Evaluasi dan perbandingan performa antar model.',
    thumbnail: 'https://images.unsplash.com/photo-1673255745677-9e67a80ecae9?w=600&q=80',
    tech: ['Python', 'TF-IDF', 'SVM', 'Scikit-learn', 'NLTK'],
    category: 'NLP / Speech',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'MLP Tabular Classification',
    description:
      'Model Multilayer Perceptron untuk klasifikasi data tabular: obesitas, kepribadian, dan cuaca. Preprocessing encoding & normalisasi, desain arsitektur MLP ringan dan dalam. Evaluasi dengan accuracy, classification report, dan confusion matrix.',
    thumbnail: 'https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?w=600&q=80',
    tech: ['Python', 'MLP', 'Scikit-learn', 'TensorFlow', 'Keras'],
    category: 'Machine Learning',
    github: 'https://github.com/devit2003',
    demo: '#',
    youtube: '#',
    featured: false,
  },
]
