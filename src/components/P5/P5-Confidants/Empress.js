import React from "react";
import { motion } from 'framer-motion';
import "./Confidants.css"

class Empress extends React.Component{
    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Empress</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 1</h2>
                <table>
                    <tr>
                        <th>Followup</th>
                        <td>Sounds good. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>That was your deal. (♪♪♪)</td>
                        <td>Thanks. I'm counting on you. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You like coffee? (♪♪♪)</td>
                        <td>Are you opening a café? (♪♪♪)</td>
                        <td>Are you starting a farm? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>What do you mean?</td>
                        <td>So you won’t accept his offer?</td>
                        <td style={{border: "2px solid red"}}>He sounds suspicious. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>This is a complex issue. (♪♪♪)</td>
                        <td>You might be wrong. (♪♪♪)</td>
                        <td>Maybe you should fire him. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Moonlight Carrot. (♪♪♪)</td>
                        <td>Sun Tomato. (♪♪♪)</td>
                        <td>Jewel Melon. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>A phantom thief wouldn’t worry. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>They won’t find out. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’ll be OK, I promise. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>“I don’t want to go with you.” (♪♪♪)</td>
                        <td>“I’m afraid of flying.”</td>
                        <td>“We should break up.”</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I have. (♪♪♪)</td>
                        <td>Not yet. (♪♪♪)</td>
                        <td>Too many times to count. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Smart response. (♪♪♪)</td>
                        <td>Sounds like a hassle.</td>
                        <td>Which friend?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>That’s pricey. (♪♪♪)</td>
                        <td>What a rip-off.</td>
                        <td style={{border: "2px solid red"}}>It must be amazing. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I can’t let you do that. (♪♪♪)</td>
                        <td>Let me cover the bill. (♪♪♪)</td>
                        <td>Kthx. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You mean… poop!? (♪♪♪)</td>
                        <td>I can taste the elephant. (♪♪♪)</td>
                        <td>Excuse me while I vomit. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>Hands off my cat.</td>
                        <td>I’d rather not think about it.</td>
                        <td style={{border: "2px solid red"}}>Let’s ask him. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>He seemed nice enough.</td>
                        <td>He was a little sketchy.</td>
                        <td style={{border: "2px solid red"}}>I’m not really sure. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>I don’t mind.</td>
                        <td>It was rather intriguing.</td>
                        <td style={{border: "2px solid red"}}>Let’s get coffee again sometime. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Trust who you want to trust.</td>
                        <td style={{border: "2px solid red"}}>Somebody’s telling the truth. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Trust no one. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>Are you really considering it?</td>
                        <td>You can’t give in.</td>
                        <td style={{border: "2px solid red"}}>There has to be another way. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>That doesn’t matter now. (♪♪♪)</td>
                        <td>You didn’t have a choice.</td>
                        <td style={{border: "2px solid red"}}>I don’t think so. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Are you okay?</td>
                        <td>We’re all here for you.</td>
                        <td style={{border: "2px solid red"}}>Pinch yourself. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>That’s fascinating. (♪♪♪)</td>
                        <td>You’re so studious. (♪♪♪)</td>
                        <td>Can you make some for me? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I had no idea. (♪♪♪)</td>
                        <td>That’s a surprise.</td>
                        <td>I could’ve guessed that.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>You might be right.</td>
                        <td style={{border: "2px solid red"}}>That would be bad. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Black like coffee? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>You don’t need to apologize.</td>
                        <td>That guy is horrible.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>You’re not powerless.</td>
                        <td style={{border: "2px solid red"}}>Be strong, Haru. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>You can talk to me anytime. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>Let him say what he wants. (♪♪♪)</td>
                        <td>Wanna run away together?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You look exhausted.</td>
                        <td>Don’t overwork yourself.</td>
                        <td>Let’s go see the nurse.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>That sounds really tough... (♪♪♪)</td>
                        <td>You should ask some employees.</td>
                        <td style={{border: "2px solid red"}}>What do you want to do? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>What does Takakura-san think? (♪♪♪)</td>
                        <td>There has to be a way. (♪♪♪)</td>
                        <td>You should tell him that. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>That’s the spirit. (♪♪♪)</td>
                        <td>You can do it, Haru. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>Don’t relax yet.</td>
                        <td style={{border: "2px solid red"}}>I’ll always have your back. (♪♪♪)</td>
                        <td>So what’s this “magic item”?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>The soil? (♪♪♪)</td>
                        <td>The planters?</td>
                        <td>That beetle over there?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It’ll help him understand you. (♪♪♪)</td>
                        <td>He’s going to love it. (♪♪♪)</td>
                        <td>He might not like it. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I’ll be cheering for you. (♪♪♪)</td>
                        <td>You’re amazing, Haru. (♪♪♪)</td>
                        <td>Are you sure you can do it? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>You can understand them?</td>
                        <td style={{border: "2px solid red"}}>It’s in your nature to nurture. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I want some too. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Don’t forget to breathe.</td>
                        <td>Believe in yourself.</td>
                        <td>I’m here for you, Haru.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I’m sure you’ll do great. (♪♪♪)</td>
                        <td>It’ll be fine. (♪♪♪)</td>
                        <td>Give it all you’ve got, Haru. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>You’re very welcome. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>You did amazing. (♪♪♪)</td>
                        <td>Do I get a reward?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>He saw us as good friends.</td>
                        <td>I like you too, Haru. (Romance)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td>What’re you up to?</td>
                        <td style={{border: "2px solid red"}}>I wanted to hear your voice. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>I miss you. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank MAX</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Will things be OK?</td>
                        <td style={{border: "2px solid red"}}>That’s good to hear. (♪♪♪)</td>
                        <td style={{border: "2px solid red"}}>You’ve done great, Haru. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>I’m sure you’ll succeed. (♪♪♪)</td>
                        <td>This won’t be easy. (♪♪♪)</td>
                        <td>It all comes down to flavor. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>If you want.</td>
                        <td>Probably not.</td>
                        <td>It’s hard work, you know.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I’m glad too. (♪♪♪)</td>
                        <td>Don’t deny yourself. (♪♪♪)</td>
                        <td>Just my teammate? (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Empress