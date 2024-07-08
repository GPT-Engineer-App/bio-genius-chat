import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const profileQuestions = [
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
  const [selectedQuestion, setSelectedQuestion] = useState(profileQuestions[0]);
  const [generatedBio, setGeneratedBio] = useState("");
  const [generatedAnswer, setGeneratedAnswer] = useState("");

  const generateRandomInterests = () => {
    const shuffled = interests.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3).join(", ");
  };

  const generateRandomOccupation = () => {
    return occupations[Math.floor(Math.random() * occupations.length)];
  };

  const generateContent = () => {
    const randomInterests = generateRandomInterests();
    const randomOccupation = generateRandomOccupation();

    const bios = [
      `${name}, 21 - ${randomOccupation}. Passionate about ${randomInterests}.`,
      `21-year-old ${randomOccupation} seeking adventure. Let's bond over ${randomInterests}!`,
      `${name} here! 21 and living my best life. When I'm not ${randomOccupation}, you'll find me ${randomInterests.split(", ")[0]}.`,
      `${randomOccupation}, 21. Looking for someone to share my love for ${randomInterests} with.`,
    ];

    setGeneratedBio(bios[Math.floor(Math.random() * bios.length)]);

    const answers = {
      "I guarantee you that...": [
        `I guarantee you that I'll always be up for a spontaneous adventure, whether it's trying a new ${randomInterests.split(", ")[0]} class or exploring hidden gems in our area.`,
        `I guarantee you that I'll never stop learning and growing. Being a 21-year-old ${randomOccupation} is just the beginning of my journey!`,
        `I guarantee you that I'll bring positive energy and a great playlist to any situation. Life's too short for bad vibes and boring music!`
      ],
      "I'm a great +1 because...": [
        `I'm a great +1 because I'm always ready to try new things. From ${randomInterests} to your favorite hobbies, I'm in!`,
        `I'm a great +1 because I can turn any outing into an adventure. Plus, being a ${randomOccupation} means I've got some interesting stories to share!`,
        `I'm a great +1 because I'm equally comfortable getting dressed up for a night out or having a cozy night in with takeout and movies.`
      ],
      "What makes a relationship great is...": [
        `What makes a relationship great is shared adventures and individual growth. Let's explore the world together while supporting each other's dreams!`,
        `What makes a relationship great is open communication, lots of laughter, and a willingness to try each other's interests. Ready to teach me about your passions?`,
        `What makes a relationship great is mutual respect, shared values, and the ability to be silly together. Life's too short for boring relationships!`
      ],
    };

    const defaultAnswers = [
      `As a 21-year-old ${randomOccupation}, ${selectedQuestion.toLowerCase()} is something I think about often. I believe it's all about embracing new experiences and staying true to yourself.`,
      `That's a great question! At 21, I'm still figuring things out, but I know that ${selectedQuestion.toLowerCase()} involves a lot of self-discovery and fun. Want to explore that together?`,
      `Being a 21-year-old ${randomOccupation}, I'd say ${selectedQuestion.toLowerCase()} is about balancing ambition with enjoyment. Whether it's through ${randomInterests} or new adventures, I'm always up for growth!`
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
          <Label htmlFor="profileQuestion">Select a profile question</Label>
          <Select onValueChange={setSelectedQuestion} defaultValue={selectedQuestion}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a question" />
            </SelectTrigger>
            <SelectContent>
              {profileQuestions.map((question, index) => (
                <SelectItem key={index} value={question}>
                  {question}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </form>

      <Button onClick={generateContent} className="w-full mb-6">Generate Content</Button>

      {generatedBio && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Generated Bio</CardTitle>
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