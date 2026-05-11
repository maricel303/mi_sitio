const content = {
  es: {
    aboutTitle: "Sobre mí",
    aboutText: "Cuento con más de quince años de experiencia trabajando en soporte técnico, administración de sistemas y atención a usuarios, tanto en redes como en mantenimiento y seguridad informática. A lo largo de mi trayectoria he trabajado resolviendo incidencias, ayudando a usuarios en su día a día y manteniendo el correcto funcionamiento de sistemas y equipos informáticos..",
    cvTitle: "Currículum",
    cvText: "Especialista informático en la Oficina del historiador de la Habana",
    studiesTitle: "Estudios",
    studiesText: "Soy graduada de Física por la Universidad de Bielorusia y numerosos postgrados de IT.",
    interestsTitle: "Intereses",
    interestsText: "Tecnología, aprendizaje continuo y desarrollo profesional."
  },

  en: {
    aboutTitle: "About me",
    aboutText: "I have over fifteen years of experience working in technical support, systems administration, and user support, both in networks and in IT maintenance and security. Throughout my career, I have worked resolving incidents, assisting users with their daily tasks, and maintaining the proper functioning of computer systems and equipment..",
    cvTitle: "Resume",
    cvText: "Computer specialist at the Office of the Historian of Havana",
    studiesTitle: "Education",
    studiesText: "I am a Physics graduate from the University of Belarus and have numerous postgraduate degrees in IT.",
    interestsTitle: "Interests",
    interestsText: "Technology, continuous learning, and professional development."
  },

  ru: {
    aboutTitle: "Обо мне",
    aboutText: "У меня более пятнадцати лет опыта работы в сфере технической поддержки, системного администрирования и поддержки пользователей, как в сетях, так и в сфере обслуживания и безопасности ИТ-систем. На протяжении своей карьеры я занимался устранением инцидентов, помогал пользователям в выполнении повседневных задач и обеспечивал надлежащее функционирование компьютерных систем и оборудования.",
    cvTitle: "Резюме",
    cvText: "Специалист по информационным технологиям в Управлении историка Гаваны.",
    studiesTitle: "Образование",
    studiesText: "Я окончил физический факультет Белорусского университета и имею несколько степеней магистра в области информационных технологий..",
    interestsTitle: "Интересы",
    interestsText: "Технологии, обучение и профессиональное развитие."
  }
};

function setLang(lang) {
  document.getElementById("about-title").innerText = content[lang].aboutTitle;
  document.getElementById("about-text").innerText = content[lang].aboutText;

  document.getElementById("cv-title").innerText = content[lang].cvTitle;
  document.getElementById("cv-text").innerText = content[lang].cvText;

  document.getElementById("studies-title").innerText = content[lang].studiesTitle;
  document.getElementById("studies-text").innerText = content[lang].studiesText;

  document.getElementById("interests-title").innerText = content[lang].interestsTitle;
  document.getElementById("interests-text").innerText = content[lang].interestsText;
}

// idioma por defecto
setLang("es");