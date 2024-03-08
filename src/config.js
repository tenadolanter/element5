export const GanElement5 = {
  "甲": "木",
  "乙": "木",
  "丙": "火",
  "丁": "火",
  "戊": "土",
  "己": "土",
  "庚": "金",
  "辛": "金",
  "壬": "水",
  "癸": "水",
};

export const ZhiElement5 = {
  "子": "水",
  "丑": "土",
  "寅": "木",
  "卯": "木",
  "辰": "火",
  "巳": "火",
  "午": "火",
  "未": "土",
  "申": "金",
  "酉": "金",
  "戌": "金",
  "亥": "水",
};

export const Element5 = ["金", "木", "水", "火", "土"];

/**
 * 五行生成顺序，金生水，水生木，木生火，火生土，土生金
 *
*/
export const GenerateElement = {
  "金": "土",
  "木": "水",
  "水": "金",
  "火": "木",
  "土": "火",
}

/**
 * 五行克制顺序，木克土、土克水、水克火、火克金、金克木
 *
*/
export const ControlElement = {
  "金": "火",
  "木": "金",
  "水": "土",
  "火": "水",
  "土": "木",
}

export const DayElement = {
  "金": "性格急躁而刚直，主刚锐果断，为人豪爽有气魄，具有侠义心肠，个性过于好胜而从不屈服于人，虚荣心强，爱好权势，但金过旺，此人主奸诈不实。性直，不曲不饶，性刚不求人，这种人一旦遇到重大挫折难以自救。",
  "木": "正直、性格朴实、善计谋，个性坚强、有骨气、心地仁慈，但有向周围发展的野心，内心占有欲强，但弱者主无主心骨、善变、难成大事。",
  "水": "智慧性格圆滑、任性、有心机、不爱与人争斗，富有丰富的想象力，比较外向，善于掌握机会，但水弱者主沉静、温柔、内向。",
  "火": "性格易急燥、发挥性强、感情丰富、好客、自尊心强、对事气短易怒、冲动鲁莽、无心机。其性急躁，易发怒，缺乏忍耐心，一旦进入官杀运有制化时，其性情会变温和柔，起码比以前改变了许多。",
  "土": "性格憨直、诚实忠厚，具有很好的耐性，猜疑心强，重名誉，但日主土弱者主做事迟缓。",
}

/**
 * 天干五行分数，{ 天干: 月支: 分数 }
 * 
*/
export const GanScore = {
  "甲": {
    "子": 1.2,
    "丑": 1.06,
    "寅": 1.14,
    "卯": 1.2,
    "辰": 1.1,
    "巳": 1.0,
    "午": 1.0,
    "未": 1.04,
    "申": 1.06,
    "酉": 1.0,
    "戌": 1.0,
    "亥": 1.2,
  },
  "乙": {
    "子": 1.2,
    "丑": 1.06,
    "寅": 1.14,
    "卯": 1.2,
    "辰": 1.1,
    "巳": 1.0,
    "午": 1.0,
    "未": 1.04,
    "申": 1.06,
    "酉": 1.0,
    "戌": 1.0,
    "亥": 1.2,
  },
  "丙": {
    "子": 1.0,
    "丑": 1.0,
    "寅": 1.2,
    "卯": 1.2,
    "辰": 1.06,
    "巳": 1.14,
    "午": 1.2,
    "未": 1.1,
    "申": 1.0,
    "酉": 1.0,
    "戌": 1.04,
    "亥": 1.0,
  },
  "丁": {
    "子": 1.0,
    "丑": 1.0,
    "寅": 1.2,
    "卯": 1.2,
    "辰": 1.06,
    "巳": 1.14,
    "午": 1.2,
    "未": 1.1,
    "申": 1.0,
    "酉": 1.0,
    "戌": 1.04,
    "亥": 1.0,
  },
  "戊": {
    "子": 1.0,
    "丑": 1.1,
    "寅": 1.06,
    "卯": 1.0,
    "辰": 1.1,
    "巳": 1.14,
    "午": 1.2,
    "未": 1.16,
    "申": 1.0,
    "酉": 1.0,
    "戌": 1.14,
    "亥": 1.0,
  },
  "己": {
    "子": 1.0,
    "丑": 1.1,
    "寅": 1.06,
    "卯": 1.0,
    "辰": 1.1,
    "巳": 1.14,
    "午": 1.2,
    "未": 1.16,
    "申": 1.0,
    "酉": 1.0,
    "戌": 1.14,
    "亥": 1.0,
  },
  "庚": {
    "子": 1.0,
    "丑": 1.14,
    "寅": 1.0,
    "卯": 1.0,
    "辰": 1.1,
    "巳": 1.06,
    "午": 1.0,
    "未": 1.1,
    "申": 1.14,
    "酉": 1.2,
    "戌": 1.16,
    "亥": 1.0,
  },
  "辛": {
    "子": 1.0,
    "丑": 1.14,
    "寅": 1.0,
    "卯": 1.0,
    "辰": 1.1,
    "巳": 1.06,
    "午": 1.0,
    "未": 1.1,
    "申": 1.14,
    "酉": 1.2,
    "戌": 1.16,
    "亥": 1.0,
  },
  "壬": {
    "子": 1.2,
    "丑": 1.1,
    "寅": 1.0,
    "卯": 1.0,
    "辰": 1.04,
    "巳": 1.06,
    "午": 1.0,
    "未": 1.0,
    "申": 1.2,
    "酉": 1.2,
    "戌": 1.06,
    "亥": 1.14,
  },
  "癸": {
    "子": 1.2,
    "丑": 1.1,
    "寅": 1.0,
    "卯": 1.0,
    "辰": 1.04,
    "巳": 1.06,
    "午": 1.0,
    "未": 1.0,
    "申": 1.2,
    "酉": 1.2,
    "戌": 1.06,
    "亥": 1.14,
  },
}

/**
 * 地支五行分数，{ 地支: 天干: 月支: 分数 }
 * 
*/
export const ZhiScore = {
  "子": {
    "癸": {
      "子": 1.2,
      "丑": 1.1,
      "寅": 1.0,
      "卯": 1.0,
      "辰": 1.04,
      "巳": 1.06,
      "午": 1.0,
      "未": 1.0,
      "申": 1.2,
      "酉": 1.2,
      "戌": 1.06,
      "亥": 1.14,
    },
  },
  "丑": {
    "癸": {
      "子": 0.36,
      "丑": 0.33,
      "寅": 0.3,
      "卯": 0.3,
      "辰": 0.312,
      "巳": 0.318,
      "午": 0.3,
      "未": 0.3,
      "申": 0.36,
      "酉": 0.36,
      "戌": 0.318,
      "亥": 0.342,
    },
    "辛": {
      "子": 0.2,
      "丑": 0.228,
      "寅": 0.2,
      "卯": 0.2,
      "辰": 0.23,
      "巳": 0.212,
      "午": 0.2,
      "未": 0.22,
      "申": 0.228,
      "酉": 0.248,
      "戌": 0.232,
      "亥": 0.2,
    },
    "己": {
      "子": 0.5,
      "丑": 0.55,
      "寅": 0.53,
      "卯": 0.5,
      "辰": 0.55,
      "巳": 0.57,
      "午": 0.6,
      "未": 0.58,
      "申": 0.5,
      "酉": 0.5,
      "戌": 0.57,
      "亥": 0.5,
    },
  },
  "寅": {
    "丙": {
      "子": 0.3,
      "丑": 0.3,
      "寅": 0.36,
      "卯": 0.36,
      "辰": 0.318,
      "巳": 0.342,
      "午": 0.36,
      "未": 0.33,
      "申": 0.3,
      "酉": 0.3,
      "戌": 0.342,
      "亥": 0.318,
    },
    "甲": {
      "子": 0.84,
      "丑": 0.742,
      "寅": 0.798,
      "卯": 0.84,
      "辰": 0.77,
      "巳": 0.7,
      "午": 0.7,
      "未": 0.728,
      "申": 0.742,
      "酉": 0.7,
      "戌": 0.7,
      "亥": 0.84,
    },
  },
  "卯": {
    "乙": {
      "子": 1.2,
      "丑": 1.06,
      "寅": 1.14,
      "卯": 1.2,
      "辰": 1.1,
      "巳": 1.0,
      "午": 1.0,
      "未": 1.04,
      "申": 1.06,
      "酉": 1.0,
      "戌": 1.0,
      "亥": 1.2,
    },
  },
  "辰": {
    "乙": {
      "子": 0.36,
      "丑": 0.318,
      "寅": 0.342,
      "卯": 0.36,
      "辰": 0.33,
      "巳": 0.3,
      "午": 0.3,
      "未": 0.312,
      "申": 0.318,
      "酉": 0.3,
      "戌": 0.3,
      "亥": 0.36,
    },
    "癸": {
      "子": 0.24,
      "丑": 0.22,
      "寅": 0.2,
      "卯": 0.2,
      "辰": 0.208,
      "巳": 0.2,
      "午": 0.2,
      "未": 0.2,
      "申": 0.24,
      "酉": 0.24,
      "戌": 0.212,
      "亥": 0.228,
    },
    "戊": {
      "子": 0.5,
      "丑": 0.55,
      "寅": 0.53,
      "卯": 0.5,
      "辰": 0.55,
      "巳": 0.6,
      "午": 0.6,
      "未": 0.58,
      "申": 0.5,
      "酉": 0.5,
      "戌": 0.57,
      "亥": 0.5,
    },
  },
  "巳": {
    "庚": {
      "子": 0.3,
      "丑": 0.324,
      "寅": 0.3,
      "卯": 0.3,
      "辰": 0.33,
      "巳": 0.3,
      "午": 0.3,
      "未": 0.33,
      "申": 0.342,
      "酉": 0.36,
      "戌": 0.348,
      "亥": 0.3,
    },
    "丙": {
      "子": 0.7,
      "丑": 0.7,
      "寅": 0.84,
      "卯": 0.84,
      "辰": 0.742,
      "巳": 0.84,
      "午": 0.84,
      "未": 0.798,
      "申": 0.7,
      "酉": 0.7,
      "戌": 0.728,
      "亥": 0.742,
    },
  },
  "午": {
    "丁": {
      "子": 1.0,
      "丑": 1.0,
      "寅": 1.2,
      "卯": 1.2,
      "辰": 1.06,
      "巳": 1.14,
      "午": 1.2,
      "未": 1.1,
      "申": 1.0,
      "酉": 1.0,
      "戌": 1.04,
      "亥": 1.06,
    },
  },
  "未": {
    "丁": {
      "子": 0.3,
      "丑": 0.3,
      "寅": 0.36,
      "卯": 0.36,
      "辰": 0.318,
      "巳": 0.342,
      "午": 0.36,
      "未": 0.33,
      "申": 0.3,
      "酉": 0.3,
      "戌": 0.312,
      "亥": 0.318,
    },
    "乙": {
      "子": 0.24,
      "丑": 0.212,
      "寅": 0.228,
      "卯": 0.24,
      "辰": 0.22,
      "巳": 0.2,
      "午": 0.2,
      "未": 0.208,
      "申": 0.212,
      "酉": 0.2,
      "戌": 0.2,
      "亥": 0.24,
    },
    "己": {
      "子": 0.5,
      "丑": 0.55,
      "寅": 0.53,
      "卯": 0.5,
      "辰": 0.55,
      "巳": 0.57,
      "午": 0.6,
      "未": 0.58,
      "申": 0.5,
      "酉": 0.5,
      "戌": 0.57,
      "亥": 0.5,
    },
  },
  "申": {
    "壬": {
      "子": 0.36,
      "丑": 0.33,
      "寅": 0.3,
      "卯": 0.3,
      "辰": 0.312,
      "巳": 0.318,
      "午": 0.3,
      "未": 0.3,
      "申": 0.36,
      "酉": 0.36,
      "戌": 0.318,
      "亥": 0.342,
    },
    "庚": {
      "子": 0.7,
      "丑": 0.798,
      "寅": 0.7,
      "卯": 0.7,
      "辰": 0.77,
      "巳": 0.742,
      "午": 0.7,
      "未": 0.77,
      "申": 0.798,
      "酉": 0.84,
      "戌": 0.812,
      "亥": 0.7,
    },
  },
  "酉": {
    "辛": {
      "子": 1.0,
      "丑": 1.14,
      "寅": 1.0,
      "卯": 1.0,
      "辰": 1.1,
      "巳": 1.06,
      "午": 1.0,
      "未": 1.1,
      "申": 1.14,
      "酉": 1.2,
      "戌": 1.16,
      "亥": 1.0,
    }
  },
  "戌": {
    "辛": {
      "子": 0.3,
      "丑": 0.342,
      "寅": 0.3,
      "卯": 0.3,
      "辰": 0.33,
      "巳": 0.318,
      "午": 0.3,
      "未": 0.33,
      "申": 0.342,
      "酉": 0.36,
      "戌": 0.348,
      "亥": 0.3,
    },
    "丁": {
      "子": 0.2,
      "丑": 0.2,
      "寅": 0.24,
      "卯": 0.24,
      "辰": 0.212,
      "巳": 0.228,
      "午": 0.24,
      "未": 0.22,
      "申": 0.2,
      "酉": 0.2,
      "戌": 0.208,
      "亥": 0.212,
    },
    "戊": {
      "子": 0.5,
      "丑": 0.55,
      "寅": 0.53,
      "卯": 0.5,
      "辰": 0.55,
      "巳": 0.57,
      "午": 0.6,
      "未": 0.58,
      "申": 0.5,
      "酉": 0.5,
      "戌": 0.57,
      "亥": 0.5,
    },
  },
  "亥": {
    "甲": {
      "子": 0.36,
      "丑": 0.318,
      "寅": 0.342,
      "卯": 0.36,
      "辰": 0.33,
      "巳": 0.3,
      "午": 0.3,
      "未": 0.312,
      "申": 0.318,
      "酉": 0.3,
      "戌": 0.3,
      "亥": 0.36,
    },
    "壬": {
      "子": 0.84,
      "丑": 0.77,
      "寅": 0.7,
      "卯": 0.728,
      "辰": 0.742,
      "巳": 0.7,
      "午": 0.7,
      "未": 0.84,
      "申": 0.84,
      "酉": 0.84,
      "戌": 0.724,
      "亥": 0.798,
    },
  },
}
