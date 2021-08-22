import { useState, useEffect } from 'react';
import './App.css';

const arrRandom = arr => {
  return arr.sort(() => Math.random() - 0.5);
}

const rawData = '凤凰,真空,椅子,高雅,哪吒,彩虹,暗号,囚徒,谎言,双截棍,七里香,摇滚,小燕子,寿司,日本,椰子,海南,寺庙,纽扣,脊椎,矮人,嘻哈,黑寡妇,爆竹,报刊,天安门,大力水手,学位,春天,菠菜,悬崖,水牛,节拍,生命,茶,甲板,水龙头,指南针,羊驼,手掌,米饭,勇气,大理,湖南,北京,冬瓜,律师,哆啦A梦,泰山,岳飞,皮卡丘,镭射,别针,半人马,俱乐部,麻瓜,护照,马蹄铁,超级英雄,心,鸭嘴兽,银行,苍蝇,罗马,鲸鱼,鼻子,服务员,小说,游戏机,鱼,蝙蝠,战士,火山,雷电,胡椒粉,忍者,溜冰鞋,导弹,星星,广场,电线,电影,粉末,床单,船,影子,胡须,熊,代码,叶子,稻草,记者,手,向导,西瓜,企鹅,数字,病毒,电脑,棉,垃圾,火,海盗,华盛顿,桌子,病,刷子,喇叭,培根,邮票,小牛,蜘蛛,音乐会,激光,灯泡,直升机,天使,玩偶,经理,河流,教堂,飞机,新娘,袋鼠,好莱坞,望远镜,杯子,管子,石头,天堂,瀑布,鹿,网,香蕉,围栏,松鼠,披风,射线,盐,插座,笛子,冰淇淋,雪人,发动机,球,富豪,漫画,印度,玻璃,潜水艇,汽车,蜜蜂,鲨鱼,兔子,狮子,澳大利亚,夜晚,池塘,高尔夫球,蛞蝓,显微镜,乌鸦,绿洲,床,摩天大楼,轨道,刀,戒指,小鸡,喜马拉雅山,拇指,昆虫,卫星,水星,东京,马,鼠标,革命,果酱,武力,死亡,拐杖,阁楼,外星人,救护车,火鸡,螺丝,手表,嘴,中国,手枪,公园,电池,天空,魔法,薄荷,帽子,炸弹,针,秋千,机器人,医生,学校,旅馆,降落伞,手臂,烹饪,狗,十字架,绿色,海滩,鹰,草,中锋,球拍,车票,铁,大理石,酒吧,马拉松,金星,魔术师,火柴,叉子,田,希腊,天才,松树,线,鼹鼠,表,院子,圆,秋天,桥,靴子,井,巧克力,间谍,吉他,合同,树根,港口,龙,衣服,碗,王冠,英镑,法国,矿井,猛犸象,小孩,标签,黄金,莎士比亚,灵魂,实验室,太阳,眼睛,骑士,树懒,德国,木星,女孩,红色,领带,夏天,正方形,圆规,恶作剧,啤酒,蝴蝶结,精神,首领,盔甲,隐藏,愿望,军医,步枪,纹身,旗帜,洋娃娃,蚂蚁,蝗虫,海象,短跑,吸血鬼,化妆,僵尸,午餐,老板娘,劳动改造,猫眼,幽灵,羁绊,恋爱,平底锅,森林,封面,盗贼,阴影,牙齿,可乐,山洞,太极,鞭子,鼓,牛仔,功夫,沙拉,听诊器,粉笔,泡沫,牙刷,剃须刀,洗发水,发烧,雾,肩膀,宝贝,睡觉,梦,车轮,端午节,饼干,体操运动员,钢笔,法老王,青蛙,帐篷,枕头,酸味,路,钟';

const color = ['#f50', '#2db7f5', '#ffe58f', '#aaa'];

function Card(props) {
  const { show, word, index, type, onFlip, flip } = props;
  if (flip) return <div className="card" style={{ background: color[type]}}>{word}</div>
  return (
    <div
      className="card"
      style={show ? { background: color[type], opacity: 0.5} : {}}
      onClick={() => onFlip(index)}
    >
      {word}
    </div>
  )
}

function App() {
  const [show, setShow] = useState(false);
  const [flips, setFlips] = useState([ ...Array(25)].map(i => false));
  const [allTypes, setAllTypes] = useState([]);
  const [allCardsData, setAllCardsData] = useState([]);
  useEffect(() => {
    setAllTypes(arrRandom([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4]));
    setAllCardsData(arrRandom(rawData.split(',')).slice(0, 25));
  }, []);

  return (
    <div className="App">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        allCardsData.map((word, i) => <Card key={word} word={word} show={show} type={allTypes[i]-1} flip={flips[i]} index={i} onFlip={i => {
          const newFs = [ ...flips ];
          newFs[i] = true;
          console.log(newFs);
          setFlips(newFs);
        }} />)
      }
      </div>
      <div style={{ textAlign: 'center', marginTop: '16px'}}>
        <button style={{ width: '160px', height: '42px'}} onClick={()=>setShow(!show)}>{show ? 'Hidden' : 'Show'}</button>
      </div>
      
    </div>
  );
}

export default App;
