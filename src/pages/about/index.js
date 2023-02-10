import styles from "./about.module.scss";

export const About = () => {
    return(
        
        <div className="container">
            <div className={styles.about}>
            <section>
              <img src="images/photo.png" alt="照片" />
              <div className={styles.flexItem}> 
              <h3>Hey, I’m Lulu. Nice to meet you!</h3>
                <p>嗨! 我是季涵，個性友善、真誠，做事認真專注，有很強的責任心，學習能力與適應能力強，十分重視團隊精神，在能力範圍內會把每一件事做到最好! 
                </p>
                  <p>我有顯著的南部特質對人熱情且親切，同時兼具內斂，渴望在事業上實現自我和突破。興趣是旅遊，大學時曾騎車環島兩週，目前規劃為玩遍外島，日後規劃出國旅遊。
                    求學期間，一直處於半工半讀的狀態，嘗試培養獨立精神以及提前的社會經驗，學習如何有效的人際互動，從過往所累積的工作經歷，無形中培養自己潛在的實力。
                 </p> 
                 </div> 
            </section>
            <hr />
             <article>
            <h3>Software I love to use</h3>
            <p>經常所使用的工具。</p>
             <div className={styles.grid}>
             <img src="./images/Figma.png" alt="Figma"/>
             <img src="./images/Visual.png" alt="Visual Studio code"/>
             <img src="./images/Github.png" alt="Github"/>
             <img src="./images/chrome.png" alt="chrome"/>            
            </div>
            <hr />
            </article>
            <h3>Work experience</h3>
            <figure>
            <div className={styles.figureimg}>
            <img src="./images/workimage.png" alt="workimage"/>
            </div>
            <div className={styles.item}>
            <h4>中天電視股份有限公司</h4>
            <h5>電子商務 (2021 02 - Present)</h5>
            <ul>
              <li>協助電商平台的營運</li>
              <li>財務帳務相關處理</li>
              <li>銷售報表製作</li>
              <li>行銷活動宣傳</li>
            </ul>
            </div>
            </figure>
            <figure>
            <div className={styles.figureimg}>
            <img src="./images/vino.jpeg" alt="workimage"/>
            </div>
            <div className={styles.item}>
            <h4>唯諾國際有限公司</h4>
            <h5>行銷設計 (2018/10 - 2020/10)</h5>
            <ul>
              <li>行銷設計(EDM、通路文宣或海報與頸標製作)</li>
              <li>企劃文案撰寫</li>
              <li>活動安排</li>
              <li>船務安排事宜</li>
            </ul>
            </div>
            </figure>
            <figure>
            <div className={styles.figureimg}>
            <img src="./images/coffee.jpeg" alt="workimage"/>
            </div>
            <div className={styles.item}>
            <h4>多一點有限公司</h4>
            <h5>儲備幹部 (2017/08 - 2018/08)</h5>
            <ul>
              <li>制訂作業標準流程等事宜</li>
              <li>文案設計及菜單擬定</li>
              <li>服務顧客維護顧客關係，客訴及危機處理</li>
              <li>公司策略執行與推動</li>
            </ul>
            </div>
            </figure>
            <hr />
            <article>
            <h3>What I like to do</h3>
            <p>平時喜歡旅遊拍照，大學時期很喜歡跑馬拉松，最近開始喜歡上爬山。</p>
             <div className={styles.grid}>
             <img src="./images/instagram_01.png" alt="instagram photo"/>
             <img src="./images/instagram_02.png" alt="instagram photo"/>
             <img src="./images/instagram_03.png" alt="instagram photo"/>
             <img src="./images/instagram_04.png" alt="instagram photo"/>            
            </div>
            </article>
            </div>           
        </div>
    )

}