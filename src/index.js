import { GanElement5, GenerateElement, Element5, GanScore, ZhiScore } from "./config.js";

/**
 * 获取日主五行属性
 * @param { String } - dayGan
*/
export const getMainEle = (element5) => {
  const char8 = element5.char8;
  const dayGan = char8[4];
  element5.main = GanElement5[dayGan];
}

/**
 * 获取同类属性
 * @param { Object } - element5
*/
export const getTongLei = (element5) => {
  const mainElement = element5.main;
  const tonglei = GenerateElement[mainElement]
  element5.similars = [mainElement, tonglei];
}


/**
 * 获取异类属性
 * @param { Object } - element5
*/
export const getYiLei = (element5) => {
  let eles = element5.similars;
  let results = [];
  Element5.forEach(item => {
    if(!eles.includes(item)) {
      results.push(item)
    }
  })
  element5.differents = results;
}

export const calcScore = (element5, element, score) => {
  const ele = GanElement5[element];
  const preScore = element5?.['score']?.[ele] || 0;
  element5['score'][ele] = preScore + score;
}

/**
 * 获取分数
 * @param { Object } - element5
*/
export const getScore = (element5) => {
  const char8 = element5.char8;
  const monthZhi = char8[3];
  char8.forEach((ele, index) => {
    // 如果是天干
    if(index % 2 === 0) {
      const score = GanScore?.[ele]?.[monthZhi];
      calcScore(element5, ele, score);
    }
    // 否则是地支
    else {
      const zhiObj = ZhiScore[ele];
      Object.keys(zhiObj).forEach(gan => {
        const score = zhiObj[gan][monthZhi];
        calcScore(element5, gan, score);
      })
    }
  })

  // 获取同类异类总分数
  const getAllScore = (element5, arr) => {
    let sum = 0;
    arr.forEach(ele => {
      sum = sum + (element5["score"][ele] || 0);
    })
    return sum;
  }
  const {  similars, differents } = element5;
  element5.similarScore = getAllScore(element5, similars);
  element5.differentScore = getAllScore(element5, differents);
}

/**
 * 获取五行缺啥
 * @param { Object } - element5
*/
export const getShort = (element5) => {
  const { score } = element5 ?? {};
  let shorts = [];
  Object.keys(item => {
    if(score[item] === 0) {
      shorts.push(item);
    }
  })
  element5.shorts = shorts;
}

/**
 * 获取五行应该补什么
 * @param { Object } - element5
*/
export const getSupply = (element5) => {
  const { similarScore, differentScore, similars, differents  } = element5 ?? {};
  const calc = similarScore - differentScore;
  const absVal = Math.abs(calc);
  const getMinScore = (element5, arr, result) => {
    const { score = {} } = element5 ?? {};
    arr.forEach(item => {
      if(!result) result = item;
      const preScore = score[result] || 0;
      const curScore = score[item] || 0;
      if(preScore > curScore) {
        result = item;
      }
    })
    return result;
  }
  let supplyOf = "";
  if(absVal > 0.8) {
    // 缺异类
    if (calc > 0) {
      supplyOf = getMinScore(element5, differents);
    }
    // 缺同类
    else {
      supplyOf = getMinScore(element5, similars);
    }
  }
  element5.supplyOf = supplyOf;
}


/**
 * 根据八字获取五行信息
 * @param { Array } - char8
*/
export default (char8) => {
  let element5 = {
    char8: char8,
    // 日主五行属性
    main: "",
    // 同类
    similars: [],
    // 异类
    differents: [],
    // 金木水火土的分数
    score: {},
    similarScore: 0,
    differentScore: 0,
  };
  if(!(Array.isArray(char8) && char8.length === 8)) return element5;
  getMainEle(element5);
  getTongLei(element5);
  getYiLei(element5);
  getScore(element5);
  getShort(element5);
  getSupply(element5);
  return element5;
}



