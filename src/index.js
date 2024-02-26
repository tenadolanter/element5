import { GanElement5, GenerateElement, Element5, Element5StrMap,  GanScore, ZhiScore } from "./config.js";

/**
 * 获取日主五行属性
 * @param { String } - dayGan
*/
export const getMainEle = (element5) => {
  const char8 = element5.char8;
  const dayGan = char8[4];
  element5.mainElement = GanElement5[dayGan];
}

/**
 * 获取同类属性
 * @param { Object } - element5
*/
export const getTongLei = (element5) => {
  const mainElement = element5.mainElement;
  const tonglei = GenerateElement[mainElement]
  element5.tongLeiElement = [mainElement, tonglei];
}


/**
 * 获取异类属性
 * @param { Object } - element5
*/
export const getYiLei = (element5) => {
  let eles = element5.tongLeiElement;
  let results = [];
  Element5.forEach(item => {
    if(!eles.includes(item)) {
      results.push(item)
    }
  })
  element5.yiLeiElement = results;
}

export const calcScore = (element5, element, score) => {
  const ele = GanElement5[element];
  const str = Element5StrMap[ele];
  const keyName = `${str}Score`
  element5[keyName] = element5[keyName] + score;
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
      const score = GanScore[ele][monthZhi];
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
      const str = Element5StrMap[ele];
      const keyName = `${str}Score`
      sum = sum + element5[keyName];
    })
    return sum;
  }
  const {  tongLeiElement, yiLeiElement } = element5;
  element5.tongLeiScore = getAllScore(element5, tongLeiElement);
  element5.yiLeiScore = getAllScore(element5, yiLeiElement);
}


/**
 * 根据八字获取五行信息
 * @param { Array } - char8
*/
export default (char8) => {
  let element5 = {
    char8: char8,
    // 日主五行属性
    mainElement: "",
    // 同类
    tongLeiElement: [],
    // 异类
    yiLeiElement: [],
    // 金木水火土的分数
    jinScore: 0,
    muScore: 0,
    shuiScore: 0,
    huoScore: 0,
    tuScore: 0,
    tongLeiScore: 0,
    yiLeiScore: 0,
  };
  if(!(Array.isArray(char8) && char8.length === 8)) return element5;
  getMainEle(element5);
  getTongLei(element5);
  getYiLei(element5);
  getScore(element5);
  return element5;
}



