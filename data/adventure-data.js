//objects inside of objects, and then the choices are an array inside 
const adventures = {
    firstShow: {
        id: 'firstShow',
        title: `Sittin' in at the Jazz Jam with the older Cats`,
        location: 'Some rough bar downtown',
        image: 'insert a photo here of a crazy bar from the early 1900s',
        storyline: 'You pull up to the bar and are feeling pretty nervous to play, you notice some of the older players who are well known and skilled. What should you do first?',
        //
        options: [{
            id: 'greet',
            details: 'Go up right away to the older cats, and introduce yourself',
            result: `
                You go up nervoulsy and try to introduce your self and interrupt a conversation between 2 of the best players in town, they stare at you blankly while you stumble on your own words.  Nothing comes out of your mouth.  You start sweating prefously.  Finally you get your name and the older cats just mildly smile back.  You then go back to sit down by yourself at a seat at the bar.`,
            confidence: -25,
            creativeness: -10
        }, {
            id: 'smoke',
            details: `Have a ciggerette outside by yourself`,
            result: `
                You decide to have a nice ol' smoke of tobacco and take your mind off the fact that your gonna be on stage with some of the best players in town.  You end up calming down and getting a little peace and quiet before the gig.  You finish your smoke and calmly walk into the pub.`,
            confidence: 5,
            creativeness: 0
        }]   
    }   
};
        
        
// const adventures = [
//     gigs.firstShow
// ];

export default adventures;




        
        
        
        // IDEAS: possibly just set up one gig and have a bunch of choices that follow each option and eventually get into the actual playing of the song and have choices what you do there, maybe even regarding what chord it is and what scale you play over it, and just one successive story line that unfolds differently and maybe you have an 'ambission health meter, or confidence meter or something like that 
        
        //details: 'Youve been practicing your instrument for sometime now but this is the first time youll be on the stage.  Not to mention theres some pretty heavy hitters also playing tonight in the jam-session.  Your sweating pretty good and nervous not to make a wrong move and get a bad rep. //'


