import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const bumbleQuestions = [
  "I guarantee you that...",
  "I'm a great +1 because...",
  "What makes a relationship great is...",
  "I quote too much from...",
  "I'm still not over...",
  "My personal hell is...",
  "If I could eat only one meal for the rest of my life it would be...",
  "I'm a real nerd about...",
  "If I could have a superpower it'd be...",
  "A non-negotiable...",
  "I will never shut up about...",
  "The world would be a better place with more...",
  "If you laugh at this, we'll get along...",
  "Two truths and a lie...",
  "A review by a friend:",
  "A fun fact I'm obsessed with...",
  "If I had three wishes, I'd wish for...",
  "We'll get on if...",
  "If you saw the targeted ads I get, you'd think I'm...",
  "The quickest way to my heart is...",
  "My Year 5 teacher described me as...",
  "When no one's watching I...",
  "As a child, I was really into...",
  "Something I learnt way later than I should have...",
  "My most useless skill is...",
  "My real life superpower is...",
  "Favourite quality in a person...",
  "After work you can find me...",
  "______ seeking _____",
  "A pro and con of dating me...",
  "I'm hoping you...",
  "It's meant to be if...",
  "I promise I won't judge you if...",
  "Never have I ever...",
  "I get way too excited about...",
  "If I were president...",
  "I'm known for...",
  "Swipe right if...",
  "Perfect first date..."
];

const tinderQuestions = [
  "My life goal is...",
  "My biggest fear is...",
  "My favorite travel story...",
  "I'm looking for...",
  "The one thing I'd like to know about you is...",
  "My ideal date night...",
  "My hidden talent...",
  "My guilty pleasure...",
  "My most controversial opinion...",
  "My favorite way to waste time...",
  "The way to win me over is...",
  "My love language is...",
  "My ideal weekend includes...",
  "My dream job would be...",
  "My favorite childhood memory...",
  "My go-to karaoke song...",
  "My biggest pet peeve...",
  "My favorite book/movie/TV show...",
  "My most embarrassing moment...",
  "My idea of a perfect day..."
];

const interests = [
  "traveling", "photography", "yoga", "cooking", "reading",
  "hiking", "painting", "dancing", "music", "fashion",
  "fitness", "writing", "gardening", "volunteering", "meditation",
  "film", "technology", "animals", "art", "sports"
];

const occupations = [
  "student", "teacher", "nurse", "artist", "entrepreneur",
  "marketing specialist", "software developer", "designer", "writer", "fitness instructor"
];

const Index = () => {
  const [platform, setPlatform] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [generatedBio, setGeneratedBio] = useState("");
  const [generatedAnswer, setGeneratedAnswer] = useState("");

  const generateRandomInterests = () => {
    const shuffled = interests.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const generateRandomOccupation = () => {
    return occupations[Math.floor(Math.random() * occupations.length)];
  };

  const generateContent = () => {
    const randomInterests = generateRandomInterests();
    const randomOccupation = generateRandomOccupation();

    const bios = [
      `👋 Hey there! I'm your friendly neighborhood ${randomOccupation}, 21 years young and always up for a good time. When I'm not busy ${randomInterests[0]}, you'll catch me ${randomInterests[1]} like there's no tomorrow. Fair warning: my ${randomInterests[2]} skills are so epic, they might just blow your mind. Swipe right if you're ready for an adventure that's part stand-up comedy, part TED talk, and 100% unforgettable!`,
      
      `🚀 Buckle up, buttercup! ${randomOccupation} by day, ${randomInterests[0]} enthusiast by night. I'm on a mission to find someone who can keep up with my ${randomInterests[1]} obsession and doesn't mind my terrible ${randomInterests[2]} puns. Bonus points if you can teach me a new skill – I promise to be the world's most enthusiastic (and probably hilarious) student!`,
      
      `🌈 Yo! Calling all ${randomInterests[0]} fans and ${randomInterests[1]} newbies! Your friendly 21-year-old ${randomOccupation} is here to shake things up. I'm 50% ${randomInterests[2]} nerd, 50% wannabe comedian, and 100% ready to make you laugh until you snort. Let's create some stories that'll make our future grandkids go "No way, that actually happened?"`,
      
      `🎉 What's cookin', good lookin'? I'm a 21-year-old ${randomOccupation} with a knack for ${randomInterests[0]} and a weakness for cheesy ${randomInterests[1]} jokes. When I'm not pretending to be a pro at ${randomInterests[2]}, I'm probably planning my next wild adventure or perfecting my coffee art (spoiler: it always ends up looking like a blob). Warning: Swiping right may cause spontaneous laughter and an irresistible urge to try new, possibly ridiculous things!`
    ];

    setGeneratedBio(bios[Math.floor(Math.random() * bios.length)]);

    const answers = {
      "I guarantee you that...": [
        `I guarantee you that I'll turn even the most boring hangout into an epic adventure. Grocery shopping? Let's make it a scavenger hunt with bonus points for finding the weirdest snacks. Waiting in line? Impromptu dance party, anyone? I'm basically a walking, talking fun machine – no batteries required, just add snacks!`,
        `I guarantee you that you'll never have a dull moment with me. Whether we're ${randomInterests[0]} or attempting to master ${randomInterests[1]}, I'll keep you laughing (even if it's at my own expense). Bonus: I make a grilled cheese so good, it's been known to cure everything from bad days to minor apocalypses. Just sayin'.`,
        `I guarantee you that I'll always be up for trying something new, no matter how wild it sounds. Wanna start a ${randomInterests[2]} club for total beginners? I'm in. Fancy learning to yodel while ${randomInterests[0]}? Let's do it! Life's too short for boring stories, and I'm here to collect the craziest ones with you!`
      ],
      "I'm a great +1 because...": [
        `I'm a great +1 because I'm basically a Swiss Army knife of fun, but way less pointy. Need someone to charm your boss at the company picnic? I've got you. Want a buddy for a spontaneous road trip? I'll have snacks packed before you can say "shotgun". Plus, as a ${randomOccupation}, I've got an endless supply of random facts and a talent for turning awkward silences into hilarious memories.`,
        `I'm a great +1 because I come with my own built-in entertainment system. Boring wedding? I'll start a conga line so epic, even grandma will join in. Stuffy dinner party? My impressions will save the day (or at least give us something to laugh about later). Long wait at the DMV? I'll turn it into an impromptu ${randomInterests[1]} lesson. With me by your side, every outing becomes a potential story for the grandkids (or at least your Instagram).`,
        `I'm a great +1 because I'm fluent in both sarcasm and sincerity, with a minor in dad jokes. Whether we're ${randomInterests[0]} or just grabbing coffee, I'll keep you laughing and maybe even teach you a thing or two about ${randomInterests[2]} (disclaimer: I'm still learning too). Warning: Side effects may include sore cheeks from smiling too much and a sudden urge to go on more adventures.`
      ],
      "What makes a relationship great is...": [
        `What makes a relationship great is a perfect mix of laughter, adventure, and the ability to be total goofballs together. It's about finding someone who's down to binge-watch weird documentaries about ${randomInterests[0]} one day and go on a spontaneous ${randomInterests[1]} expedition the next. Throw in some witty banter, mutual respect, and a shared love for terrible puns, and boom – you've got the recipe for something awesome.`,
        `What makes a relationship great is having a partner in crime who's just as pumped about life's big moments as they are about its silly little joys. It's about cheering each other on (even if one of us decides to become a professional ${randomInterests[2]} instructor) and creating inside jokes that make absolutely no sense to anyone else. Add a dash of romance, a sprinkle of shared ${randomInterests[0]} sessions, and voilà – relationship goals!`,
        `What makes a relationship great is finding someone who turns the ordinary into something extraordinary. It's about making grocery shopping feel like an epic quest, turning lazy Sundays into ${randomInterests[1]} masterclasses, and seeing bad days as opportunities for growth (or at least really good takeout). The secret sauce? A big ol' dollop of laughter, mixed with genuine care and the mutual understanding that life's too short not to enjoy every moment together.`
      ],
    };

    const defaultAnswers = [
      `Whoa, ${selectedQuestion.toLowerCase()} is a loaded question! As a 21-year-old ${randomOccupation}, I'd say it's all about embracing the chaos with a big grin. Whether I'm totally messing up at ${randomInterests[0]} or pretending to be a pro at ${randomInterests[1]}, life's too short not to laugh at yourself, right? So, let's grab a coffee, swap our most embarrassing stories, and see if we can turn this deep question into our next hilarious adventure!`,
      `Now that's a question to make a ${randomOccupation}'s head spin! At the ripe old age of 21, I've figured out that ${selectedQuestion.toLowerCase()} is best tackled with a mix of curiosity, humor, and a willingness to look totally ridiculous. Whether we're bonding over our shared obsession with ${randomInterests[2]} or debating the finer points of ${randomInterests[0]}, I'm all about creating memories that'll make us snort-laugh years down the line.`,
      `As a 21-year-old ${randomOccupation} with a thing for ${randomInterests[1]}, I'd say ${selectedQuestion.toLowerCase()} is the perfect recipe for growth, giggles, and maybe a few graceful (or not so graceful) face-plants along the way. I'm still figuring it all out, but I know it involves a lot of self-discovery, fun, and probably a bunch of embarrassing stories we'll laugh about later. Wanna join me on this hilarious journey of trial and error?`
    ];

    const questionAnswers = answers[selectedQuestion] || defaultAnswers;
    setGeneratedAnswer(questionAnswers[Math.floor(Math.random() * questionAnswers.length)]);
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AI Bio Generator for Bumble and Tinder</h1>
      
      <form className="space-y-4 mb-6">
        <div>
          <Label>Select Platform</Label>
          <RadioGroup value={platform} onValueChange={setPlatform} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bumble" id="bumble" />
              <Label htmlFor="bumble">Bumble</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tinder" id="tinder" />
              <Label htmlFor="tinder">Tinder</Label>
            </div>
          </RadioGroup>
        </div>
        {platform && (
          <div>
            <Label htmlFor="profileQuestion">Select a profile question</Label>
            <Select onValueChange={setSelectedQuestion} value={selectedQuestion}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a question" />
              </SelectTrigger>
              <SelectContent>
                {(platform === 'bumble' ? bumbleQuestions : tinderQuestions).map((question, index) => (
                  <SelectItem key={index} value={question}>
                    {question}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </form>

      <Button onClick={generateContent} className="w-full mb-6" disabled={!platform || !selectedQuestion}>Generate Content</Button>

      {generatedBio && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Generated Bio for {platform.charAt(0).toUpperCase() + platform.slice(1)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{generatedBio}</p>
          </CardContent>
        </Card>
      )}

      {generatedAnswer && (
        <Card>
          <CardHeader>
            <CardTitle>Answer to Profile Question</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">{selectedQuestion}</h3>
            <p>{generatedAnswer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;