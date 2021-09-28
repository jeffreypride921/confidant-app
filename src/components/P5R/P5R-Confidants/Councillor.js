import React from "react";
import { motion } from 'framer-motion';

class Councillor extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="ConfidantItems">
                <h1 className="conf-header">Councillor</h1>
                <motion.div initial={{scaleY: 0, originY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 2</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Didn’t have much choice.</td>
                        <td style={{border: "2px solid red"}}>We made a deal. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>I’m a little nervous. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>It’s in the past.</td>
                        <td>I’m doing okay now.</td>
                        <td>So much for privacy.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>But it sounds right. (♪♪♪)</td>
                        <td>Yep. (♪♪)</td>
                        <td>Kinda creeping me out here.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>So... what?</td>
                        <td>I’ll need more details.</td>
                        <td>Uh...</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td style={{border: "2px solid red"}}>Well, okay. (♪♪)</td>
                        <td>Better make it worth it.</td>
                        <td>Why me, though?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 3</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>So they have, huh? (♪♪)</td>
                        <td>You worry too much.</td>
                        <td style={{border: "2px solid red"}}>Thanks to you, probably. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Of course. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Yeah, for our deal. (♪♪)</td>
                        <td>I forgot.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>When someone betrays me.</td>
                        <td>When I lie.</td>
                        <td>When I get punched.</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>That one seems necessary. (♪♪)</td>
                        <td>We’d be better off without it.</td>
                        <td style={{border: "2px solid red"}}>It’s a seed for new loves. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Did that help? (♪♪)</td>
                        <td>Don’t worry about it. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Good work over there. (♪♪)</td>
                        <td>So you’re actually working?</td>
                        <td>Getting to your research now?</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 4</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Where’s this coming from?</td>
                        <td>What are you talking about?</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I know, right...? (♪♪♪)</td>
                        <td>It’s not the worst.</td>
                        <td>Talk about a reward. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>That’d be great. (♪♪)</td>
                        <td>Is that possible?</td>
                        <td style={{border: "2px solid red"}}>Is that what you’re researching? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>...</td>
                        <td>Are you okay?</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>That’s a grand plan. (♪♪)</td>
                        <td>You’re so kind. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td style={{border: "2px solid red"}}>That sounds fun. (♪♪♪)</td>
                        <td>I’m not the “free labor” type.</td>
                        <td>Nope.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I’m completely fine. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>It’s part of our deal, so... (♪♪)</td>
                        <td>I’m struggling, to be honest.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 5</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td style={{border: "2px solid red"}}>This looks great! (♪♪♪)</td>
                        <td>How old do you think I am?</td>
                        <td>I could just take cash... (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>The one-cookie container.</td>
                        <td>The ten-cookie container.</td>
                        <td>It was a tie.</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>I never considered that.</td>
                        <td>They’re getting played. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>You know, you’re right. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td style={{border: "2px solid red"}}>My senses lied to me! (♪♪)</td>
                        <td style={{border: "2px solid red"}}>Hey, as long as it tastes good. (♪♪)</td>
                        <td>It’s a little scary.</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Not “truth” exactly...</td>
                        <td style={{border: "2px solid red"}}>I guess so. (♪♪)</td>
                        <td>I don't know.</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>I really don’t mind. (♪♪)</td>
                        <td>Come on, man.</td>
                        <td style={{border: "2px solid red"}}>It was thought-provoking. (♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 6</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You wanted to talk?</td>
                        <td style={{border: "2px solid red"}}>Another cup? (♪♪)</td>
                        <td style={{border: "2px solid red"}}>We’ve got curry, too. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>I can do that. (♪♪♪)</td>
                        <td>t’s a deal. (♪♪)</td>
                        <td>I’m not up for this...</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>Isn’t that enough?</td>
                        <td>You need more than that?</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>So what CAN we do?</td>
                        <td>It’s a hard question...</td>
                        <td style={{border: "2px solid red"}}>So give up. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>All hearts share some things.</td>
                        <td>What if they’re connected?</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>Calm down.</td>
                        <td>Where’s this coming from?</td>
                        <td>Cognitive pscience?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>Calm down. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>What’s going on? (♪♪)</td>
                        <td>Heavy breathing? Pervert.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 7</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>You really are dedicated. (♪♪♪)</td>
                        <td>Are they even relevant? (♪♪♪)</td>
                        <td>Are you a fan? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td>No idea. (♪♪♪)</td>
                        <td>As in, removing them? (♪♪♪)</td>
                        <td>How about you Maruki? (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td>The change of heart...? (♪♪♪)</td>
                        <td>... (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I have no clue. (♪♪♪)</td>
                        <td>Sounds pretty far-fetched. (♪♪♪)</td>
                        <td>It’s intriguing. (♪♪♪)</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 8</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>I’m good on cookies, thanks. (♪♪)</td>
                        <td style={{border: "2px solid red"}}>What do you mean? (♪♪♪)</td>
                        <td>Thanks, but I should get going.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Ooh, really? (♪♪♪)</td>
                        <td>Can you afford that? (♪♪)</td>
                        <td>Sorry, I prefer sushi. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 3</th>
                        <td style={{border: "2px solid red"}}>Thanks for the food! (♪♪♪)</td>
                        <td>Self-control much?</td>
                        <td>This is quite the spread. (♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 4</th>
                        <td>I’m his pupil. (♪♪)</td>
                        <td>It’s complicated.</td>
                        <td style={{border: "2px solid red"}}>We’ve made a deal. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 5</th>
                        <td>Congratulations. (♪♪♪)</td>
                        <td>Way to go. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 6</th>
                        <td>I sure do. (♪♪♪)</td>
                        <td>Let’s celebrate. (♪♪♪)</td>
                    </tr>
                    <tr>
                        <th>Response 7</th>
                        <td>She’s a girlfriend of yours?</td>
                        <td>Who’s Rumi?</td>
                        <td>Should I leave you two to talk?</td>
                    </tr>
                    <tr>
                        <th>Followup</th>
                        <td style={{border: "2px solid red"}}>He’s a good friend. (♪♪)</td>
                        <td>Learn some independence.</td>
                        <td>You’ll get the tab next time.</td>
                    </tr>
                </table>
                </div>
                <div className="conf-rank">
                <h2 className="conf-rank-header">Rank 9</h2>
                <table>
                    <tr>
                        <th>Response 1</th>
                        <td>Yeah.</td>
                        <td>Kind of.</td>
                    </tr>
                    <tr>
                        <th>Response 2</th>
                        <td style={{border: "2px solid red"}}>Kind of sad... (♪♪♪)</td>
                        <td>Is our deal over? (♪♪)</td>
                        <td>Well... take care of yourself. (♪♪)</td>
                    </tr>
                </table>
                </div>
                </motion.div>
            </div>
            </motion.div>
        )
    }
}

export default Councillor