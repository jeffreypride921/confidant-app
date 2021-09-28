import React from "react";
import { motion } from 'framer-motion';

class Faith extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Faith</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>We’re just getting started. (♪♪)</td>
                        <td>Go easy on me.</td>
                        <td style={{border: "2px solid red"}}>I’m so done with this. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Next time, then. (♪♪)</td>
                        <td>You doing okay?</td>
                        <td>Lucky for me...</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I see.</td>
                        <td>So now...?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>No problem.</td>
                        <td>You sure?</td>
                        <td>Uh, romantically?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Leave it to me.</td>
                        <td>Let’s give it a try.</td>
                        <td>Then follow my lead.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Impressive. (♪♪)</td>
                        <td>Gotta push through it.</td>
                        <td>You did eat eventually, right?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Making bento? (♪♪♪)</td>
                        <td>Potluck parties?</td>
                        <td>“This” being...?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I’m touched! (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It looks delicious. (♪♪)</td>
                        <td>Let’s see if it’s good...</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>Is that all for you? (♪♪♪)</td>
                        <td>That seems a little much. (♪♪)</td>
                        <td>What IS that?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>This tastes like...</td>
                        <td style={{border: "2px solid red"}}>It’s definitely unique. (♪♪)</td>
                        <td>It’s... greeeaaat...</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Not exactly.</td>
                        <td>Is there a third option...?</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Calm down.</td>
                        <td>You’re going to get it now?</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>This works fine as is.</td>
                        <td>I’m enjoying this.</td>
                        <td>Let’s just eat.</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>You could try again sometime? (♪♪♪)</td>
                        <td>It happens. (♪♪♪)</td>
                        <td>Just keep at it. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>That sounds right.</td>
                        <td>Maybe...</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You have bad eyesight?</td>
                        <td style={{border: "2px solid red"}}>You’re looking to buy? (♪♪)</td>
                        <td>I have enough glasses.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>A pretty modern look. (♪♪♪)</td>
                        <td>Not my style.</td>
                        <td>I look so aloof in these. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Do they suit your dad, though?</td>
                        <td>I’m not so sure...</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>Of course. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Let’s keep going. (♪♪)</td>
                        <td>Sure, whatever.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Trust your instincts.</td>
                        <td>Don’t overthink it.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>Good choice. (♪♪)</td>
                        <td>I’m sure he’ll love it.</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>It’s part of our deal.</td>
                        <td>Not a problem at all.</td>
                        <td>I expect compensation.</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td style={{border: "2px solid red"}} >Everyone deals with that. (♪♪)</td>
                        <td>That’s your slump talking.</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>Good luck.</td>
                        <td style={{border: "2px solid red"}}>We’ll work at it together. (♪♪)</td>
                        <td>No rush, though.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’m glad to hear that. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You should  be more confident. (♪♪)</td>
                        <td>Of course he is.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>It’s a surprise, yea. (♪♪)</td>
                        <td>Not at all.</td>
                        <td>What are you scheming?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>This seems kind of sudden.</td>
                        <td>If I’m just watching...</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>It’s a good idea. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Go ahead. I’ll watch. (♪♪♪)</td>
                        <td>Maybe stick to gymnastics.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Don’t give up.</td>
                        <td>Just don’t lose hope.</td>
                        <td>You can beat this, right?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td style={{border: "2px solid red"}}>Congratulations. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I saw! (♪♪♪)</td>
                        <td>How’s that feel? (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>That’s important. (♪♪♪)</td>
                        <td>Don’t forget how that feels. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Nicely done.</td>
                        <td>It’s not over yet.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Swimming. (♪♪♪)</td>
                        <td>Running. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Gymnastics. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It wasn’t on purpose.</td>
                        <td>What could you have done?</td>
                        <td>At least you realize it now.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Don’t beat yourself up.</td>
                        <td>What’ll you do now?</td>
                        <td>Calm down.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You two were close, then.</td>
                        <td>Those must be good memories.</td>
                        <td>All for ice cream, huh?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>... That IS genius.</td>
                        <td>How old was she again?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>She cared about you.</td>
                        <td>Sounds like tough training.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Why?</td>
                        <td>I can imagine.</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>It must have been hard.</td>
                        <td>What about Kasumi’s feelings?</td>
                        <td>Sounds like running away.</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>You have to accept it.</td>
                        <td>Try not to think about it.</td>
                        <td>So what happens now?</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>I will.</td>
                        <td>I can manage that.</td>
                        <td>If it’s part of the deal.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Do you want to run away?</td>
                        <td style={{border: "2px solid red"}}>You have to face it. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>So what if it is? (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Maybe.</td>
                        <td>Who Knows?</td>
                        <td>Were you frustrated?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Is she scary?</td>
                        <td>Is she strict?</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>You okay? (♪♪♪)</td>
                        <td>That was a big sigh.</td>
                        <td>She’s a real taskmaster.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>That isn’t true. (♪♪♪)</td>
                        <td>You need more confidence.</td>
                        <td>That’s just a mental block.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>It’ll be like a duet.</td>
                        <td>You’ll become stronger.</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Of course. (♪♪♪)</td>
                        <td>I could watch you forever. (♪♪♪)</td>
                        <td>Another love confession? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I was internally screaming.</td>
                        <td>Yeah, it was a breeze.</td>
                        <td style={{border: "2px solid red"}}>I love a good challenge. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>Walk up to Sumire. (♪♪♪)</td>
                        <td>Watch her from a distance.</td>
                        <td>Slowly walk away.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Look at yourself.</td>
                        <td>You’re just standing out.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Try to stay positive. (♪♪♪)</td>
                        <td>I’m here for you. (♪♪♪)</td>
                        <td>It’ll work out. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>What is it?</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You started it.</td>
                        <td>What, I can’t look at you?</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>It looks great. (♪♪♪)</td>
                        <td>You look really cute. (♪♪♪)</td>
                        <td>I’m in love. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Did I help?</td>
                        <td>You found your answer?</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>I see...</td>
                        <td>So that’s how it was.</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>That’s how it should be. (♪♪♪)</td>
                        <td>Sounds like progress. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>The airsoft shop.</td>
                        <td style={{border: "2px solid red"}}>The resale shop. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Online. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>It’s no problem. (♪♪♪)</td>
                        <td>We’ll call it holiday hours. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Definitely. (♪♪♪)</td>
                        <td>Of course. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>Of course I do. (♪♪♪)</td>
                        <td>Vaguely...</td>
                        <td>What about it?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I know you did. (♪♪♪)</td>
                        <td>You’re not worthless. (♪♪♪)</td>
                        <td>This is a new beginning. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>What’s going on?</td>
                        <td>There’s something else?</td>
                        <td style={{border: "2px solid red"}}>Go ahead. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>What?</td>
                        <td>In luh?</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>Let’s stay friends, okay?</td>
                        <td>I love you too. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Response 8</th>
                        <td>Calm down. (♪♪♪)</td>
                        <td>Take your time. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 9</th>
                        <td>So? Any different? (♪♪♪)</td>
                        <td>You are so red right now. (♪♪♪)</td>
                        <td>You’re so cute. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Get used to it. (♪♪♪)</td>
                        <td>Should I hang up...?</td>
                        <td>That’s just how it is.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You look radiant today.</td>
                        <td>Now I’m getting nervous.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It’s all Sumire.</td>
                        <td>Just watch.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Calm down.</td>
                        <td>Don’t rush it.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You must be happy.</td>
                        <td>I’m so relieved.</td>
                        <td>It’s only natural, Sumire.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>And that is...? (♪♪♪)</td>
                        <td>What do you mean? (♪♪♪)</td>
                        <td>Is it someone you love? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>And there’s more to come.</td>
                        <td>You were amazing out there.</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>I’ll stop if you want.</td>
                        <td>I feel the same way.</td>
                        <td>I don’t want to let you go. </td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I’m counting on you. (♪♪♪)</td>
                        <td>Don’t get ahead of yourself. (♪♪♪)</td>
                        <td>We’re our world’s champions. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Faith