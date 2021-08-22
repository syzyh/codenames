import { useState, useEffect } from 'react';
import './App.css';

const arrRandom = arr => {
  return arr.sort(() => Math.random() - 0.5);
}

const rawData = '鼓，新娘，鼻子，秦始皇，锚，牛仔，肩膀，统治者，精神，电线，书，剃刀，踢，雾，老板，发热，绳，街道，雪崩，北京，床单，拿破仑，西装，地球，洗发水，奶酪，青蛙，牙医，牛奶，车轮，歹徒，蝴蝶，酸味，僵尸，脚步声，武则天，木乃伊，铁匠，功夫，闹钟，婚礼，哥仑布，牛头怪，大爆炸，睡觉，故宫，糖，经理，诡计，尼龙，玩偶，神经，电灯泡，长凳，裂口，饼干，雷，午餐，火山，锦衣卫，姐妹，羊，麻袋，骑兵，农场，法官，滑冰鞋，火枪手，浪花，端午节，路，胡椒粉，冰川，工艺，英里，蒙娜丽莎，口哨，杂志，铜，啤酒，帐篷，座位，粉，木偶，粉笔，体操运动员，磨坊，卷，钢笔，宝贝，夏威夷，沙拉，故事，猪，法老王，水母，听诊器，黄油，狼人，小提琴，米，比赛，泡沫，链子，枕头，梦，医生，洗澡';

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
    setAllCardsData(arrRandom(rawData.split('，')).slice(0, 25));
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
