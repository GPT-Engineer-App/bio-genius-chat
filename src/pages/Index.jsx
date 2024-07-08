import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [name, setName] = useState("");
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
      `🎭 ${name} here, your 21-year-old ${randomOccupation} with a twist! When I'm not busy ${randomInterests[0]}, you'll find me ${randomInterests[1]} like it's an Olympic sport. Fair warning: my ${randomInterests[2]} skills are so good, they should be illegal. Swipe right if you're ready for an adventure that's part comedy show, part TED talk, and 100% unforgettable!`,
      
      `🚀 Buckle up, buttercup! ${name}, 21, ${randomOccupation} by day, ${randomInterests[0]} enthusiast by night. I'm on a mission to find someone who can keep up with my ${randomInterests[1]} obsession and doesn't mind my terrible ${randomInterests[2]} puns. Bonus points if you can teach me a new skill – I promise to be a hilariously eager student!`,
      
      `🌈 Attention all ${randomInterests[0]} aficionados and ${randomInterests[1]} newbies! ${name}, your friendly neighborhood 21-year-old ${randomOccupation}, is here to shake things up. I'm 50% ${randomInterests[2]} expert, 50% amateur comedian, and 100% ready to make you laugh until you snort. Let's create some stories worth embellishing on our future grandkids!`,
      
      `🎉 Hey there! I'm ${name}, a 21-year-old ${randomOccupation} with a knack for ${randomInterests[0]} and a weakness for bad ${randomInterests[1]} jokes. When I'm not busy pretending to be a pro at ${randomInterests[2]}, I'm probably planning my next big adventure or perfecting my coffee art. Warning: Swiping right may result in spontaneous laughter and an irresistible urge to try new things!`
    ];

    setGeneratedBio(bios[Math.floor(Math.random() * bios.length)]);

    const answers = {
      "I guarantee you that...": [
        `I guarantee you that I'll turn even the most mundane date into an epic adventure. Grocery shopping? Let's make it a scavenger hunt. Waiting in line? Impromptu dance party. I'm basically a walking, talking fun amplifier – batteries included!`,
        `I guarantee you that you'll never have a dull moment with me. Whether we're ${randomInterests[0]} or attempting to master ${randomInterests[1]}, I'll keep you laughing (even if it's at my own expense). Bonus: I make a mean grilled cheese that's been known to cure everything from bad days to minor apocalypses.`,
        `I guarantee you that I'll always be up for trying something new, no matter how ridiculous it sounds. Want to start a ${randomInterests[2]} club for beginners? I'm in. Fancy learning to yodel while ${randomInterests[0]}? Let's do it. Life's too short for boring stories, and I'm here to collect the wildest ones with you!`
      ],
      "I'm a great +1 because...": [
        `I'm a great +1 because I'm basically a Swiss Army knife of fun. Need someone to charm your boss at the company picnic? I've got you. Want a partner for a spontaneous road trip? I'll have snacks packed before you finish the sentence. Plus, as a ${randomOccupation}, I've got an endless supply of conversation starters and a talent for turning awkward silences into hilarious memories.`,
        `I'm a great +1 because I come with a built-in entertainment system. Boring wedding? I'll start a conga line. Stuffy dinner party? My impressions will save the day. Long wait at the DMV? I'll turn it into an impromptu ${randomInterests[1]} lesson. With me by your side, every outing becomes a potential story for the grandkids (or at least your Instagram).`,
        `I'm a great +1 because I'm fluent in both sarcasm and sincerity, with a minor in dad jokes. Whether we're ${randomInterests[0]} or just grabbing coffee, I'll keep you laughing and maybe even teach you a thing or two about ${randomInterests[2]}. Warning: Side effects may include sore cheeks from smiling too much and a sudden urge to go on more adventures.`
      ],
      "What makes a relationship great is...": [
        `What makes a relationship great is a perfect blend of laughter, adventure, and the ability to be absolute goofballs together. It's about finding someone who's down to binge-watch obscure documentaries about ${randomInterests[0]} one day and go on a spontaneous ${randomInterests[1]} expedition the next. Throw in some witty banter, mutual respect, and a shared love for terrible puns, and you've got the recipe for something magical.`,
        `What makes a relationship great is having a partner in crime who's equally excited about life's big moments and its silly little joys. It's about supporting each other's dreams (even if one of us decides to become a professional ${randomInterests[2]} instructor) and creating inside jokes that make absolutely no sense to anyone else. Add a dash of romance, a sprinkle of shared ${randomInterests[0]} sessions, and voilà – relationship goals!`,
        `What makes a relationship great is finding someone who makes the ordinary extraordinary. It's about turning grocery shopping into an epic quest, lazy Sundays into ${randomInterests[1]} masterclasses, and bad days into opportunities for growth (or at least really good takeout). The secret ingredient? A hefty dose of laughter, mixed with genuine care and the mutual understanding that life's too short not to enjoy every moment together.`
      ],
    };

    const defaultAnswers = [
      `Oh boy, ${selectedQuestion.toLowerCase()} is a loaded question! As a 21-year-old ${randomOccupation}, I'd say it's all about embracing the chaos with a smile. Whether I'm fumbling through ${randomInterests[0]} or pretending to be an expert at ${randomInterests[1]}, life's too short not to laugh at yourself. So, let's grab a coffee, swap embarrassing stories, and see if we can turn this question into our next great adventure!`,
      `Now that's a question to make a ${randomOccupation} scratch their head! At the ripe old age of 21, I've discovered that ${selectedQuestion.toLowerCase()} is best approached with a mix of curiosity, humor, and a willingness to look silly. Whether we're bonding over our shared love of ${randomInterests[2]} or debating the finer points of ${randomInterests[0]}, I'm all about creating memories that'll make us chuckle years down the line.`,
      `As a 21-year-old ${randomOccupation} with a penchant for ${randomInterests[1]}, I'd say ${selectedQuestion.toLowerCase()} is the perfect recipe for growth, giggles, and maybe a few graceful (or not so graceful) stumbles along the way. I'm still figuring it out, but I know it involves a lot of self-discovery, fun, and probably a few embarrassing stories we'll laugh about later. Care to join me on this hilarious journey of trial and error?`
    ];

    const questionAnswers = answers[selectedQuestion] || defaultAnswers;
    setGeneratedAnswer(questionAnswers[Math.floor(Math.random() * questionAnswers.length)]);
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AI Bio Generator for Bumble and Tinder</h1>
      
      <form className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
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

      <Button onClick={generateContent} className="w-full mb-6" disabled={!name || !platform || !selectedQuestion}>Generate Content</Button>

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