// ==================== بنك الجمل (إن وأخواتها) ====================

const bank100Inna = [
  // القيم الأخلاقية
  {
    sentence: "الصدقُ أساسُ الثقةِ",
    subjectChoices: ["الصدقُ", "أساسُ", "الثقةِ"],
    correctSubject: "الصدقُ",
    predicateChoices: ["أساسُ", "الثقةِ", "جميلٌ"],
    correctPredicate: "أساسُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ الصدقَ", "إنَّ الثقةَ", "إنَّ الصادقَ"],
    correctInnaName: "إنَّ الصدقَ",
    innaPredicateChoices: ["أساسٌ", "أساسَ", "أساسُ"],
    correctInnaPredicate: "أساسَ"
  },
  {
    sentence: "الأمانةُ دليلُ الإيمانِ",
    subjectChoices: ["الأمانةُ", "دليلُ", "الإيمانِ"],
    correctSubject: "الأمانةُ",
    predicateChoices: ["دليلُ", "نورٌ", "الإيمانِ"],
    correctPredicate: "دليلُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ الأمانةَ", "إنَّ الإيمانَ", "إنَّ الصدقَ"],
    correctInnaName: "إنَّ الأمانةَ",
    innaPredicateChoices: ["دليلٌ", "دليلَ", "دليلُ"],
    correctInnaPredicate: "دليلَ"
  },
  {
    sentence: "العلمُ نورُ الحياةِ",
    subjectChoices: ["العلمُ", "نورُ", "الحياةِ"],
    correctSubject: "العلمُ",
    predicateChoices: ["نورُ", "ضوءُ", "جميلٌ"],
    correctPredicate: "نورُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ العلمَ", "إنَّ الحياةَ", "إنَّ النورَ"],
    correctInnaName: "إنَّ العلمَ",
    innaPredicateChoices: ["نورٌ", "نورَ", "نورُ"],
    correctInnaPredicate: "نورَ"
  },
  {
    sentence: "الصدقُ منجاةُ المؤمنِ",
    subjectChoices: ["الصدقُ", "منجاةُ", "المؤمنِ"],
    correctSubject: "الصدقُ",
    predicateChoices: ["منجاةُ", "طريقُ", "جميلٌ"],
    correctPredicate: "منجاةُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ الصدقَ", "إنَّ المؤمنَ", "إنَّ الأمانةَ"],
    correctInnaName: "إنَّ الصدقَ",
    innaPredicateChoices: ["منجاةٌ", "منجاةَ", "منجاةُ"],
    correctInnaPredicate: "منجاةَ"
  },
  {
    sentence: "العدلُ أساسُ الحكمِ",
    subjectChoices: ["العدلُ", "أساسُ", "الحكمِ"],
    correctSubject: "العدلُ",
    predicateChoices: ["أساسُ", "نورُ", "قيمَةٌ"],
    correctPredicate: "أساسُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ العدلَ", "إنَّ الحكمَ", "إنَّ الصدقَ"],
    correctInnaName: "إنَّ العدلَ",
    innaPredicateChoices: ["أساسٌ", "أساسَ", "أساسُ"],
    correctInnaPredicate: "أساسَ"
  },

  // جمل وطنية
  {
    sentence: "الوطنُ بيتُ العزِّ",
    subjectChoices: ["الوطنُ", "بيتُ", "العزِّ"],
    correctSubject: "الوطنُ",
    predicateChoices: ["بيتُ", "درعُ", "العزِّ"],
    correctPredicate: "بيتُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "كأنَّ",
    innaNameChoices: ["كأنَّ الوطنَ", "كأنَّ العزَّ", "كأنَّ البيتَ"],
    correctInnaName: "كأنَّ الوطنَ",
    innaPredicateChoices: ["بيتٌ", "بيتَ", "بيتُ"],
    correctInnaPredicate: "بيتَ"
  },
  {
    sentence: "الجنودُ حماةُ الوطنِ",
    subjectChoices: ["الجنودُ", "حماةُ", "الوطنِ"],
    correctSubject: "الجنودُ",
    predicateChoices: ["حماةُ", "درعُ", "سورُ"],
    correctPredicate: "حماةُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ الجنودَ", "إنَّ الوطنَ", "إنَّ الجيشَ"],
    correctInnaName: "إنَّ الجنودَ",
    innaPredicateChoices: ["حماةٌ", "حماةَ", "حماةُ"],
    correctInnaPredicate: "حماةَ"
  },
  {
    sentence: "الملكُ رمزُ القيادةِ",
    subjectChoices: ["الملكُ", "رمزُ", "القيادةِ"],
    correctSubject: "الملكُ",
    predicateChoices: ["رمزُ", "قائدُ", "العزةِ"],
    correctPredicate: "رمزُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "كأنَّ",
    innaNameChoices: ["كأنَّ الملكَ", "كأنَّ القيادةَ", "كأنَّ الرمزَ"],
    correctInnaName: "كأنَّ الملكَ",
    innaPredicateChoices: ["رمزٌ", "رمزَ", "رمزُ"],
    correctInnaPredicate: "رمزَ"
  },
  {
    sentence: "المملكةُ قلبُ العالمِ",
    subjectChoices: ["المملكةُ", "قلبُ", "العالمِ"],
    correctSubject: "المملكةُ",
    predicateChoices: ["قلبُ", "مركزُ", "روحُ"],
    correctPredicate: "قلبُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "كأنَّ",
    innaNameChoices: ["كأنَّ المملكةَ", "كأنَّ العالمَ", "كأنَّ القلبَ"],
    correctInnaName: "كأنَّ المملكةَ",
    innaPredicateChoices: ["قلبٌ", "قلبَ", "قلبُ"],
    correctInnaPredicate: "قلبَ"
  },

  // دراسية
  {
    sentence: "الرياضياتُ لغةُ العقلِ",
    subjectChoices: ["الرياضياتُ", "لغةُ", "العقلِ"],
    correctSubject: "الرياضياتُ",
    predicateChoices: ["لغةُ", "فنٌّ", "جميلةٌ"],
    correctPredicate: "لغةُ",
    particleChoices: ["إنَّ", "ليتَ", "لعلَّ", "كأنَّ"],
    correctParticle: "إنَّ",
    innaNameChoices: ["إنَّ الرياضياتَ", "إنَّ العقلَ", "إنَّ الفنَّ"],
    correctInnaName: "إنَّ الرياضياتَ",
    innaPredicateChoices: ["لغةٌ", "لغةَ", "لغةُ"],
    correctInnaPredicate: "لغةَ"
  }
];

// يمكن تكرار النمط أعلاه لإكمال الـ 100 جملة
