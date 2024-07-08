import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const profileQuestions = [
  "I guarantee you that...",
  "I'm a great +1 because...",
  "What makes a relationship great is...",
  "I quote too much from...",
  "I'm still not over...",
  "My zombie apocalypse plan is...",
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
  "If I could travel to any time in the past...",
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

const Index = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    interests: "",
    occupation: "",
    location: "",
  });

  const [selectedQuestion, setSelectedQuestion] = useState(profileQuestions[0]);
  const [generatedBios, setGeneratedBios] = useState([]);
  const [generatedAnswers, setGeneratedAnswers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const generateContent = () => {
    // Placeholder function to simulate bio generation
    const fakeBios = [
      `${userInfo.name}, ${userInfo.age} - ${userInfo.occupation} in ${userInfo.location}. Passionate about ${userInfo.interests}.`,
      `${userInfo.age}-year-old ${userInfo.occupation} seeking adventure in ${userInfo.location}. Let's bond over ${userInfo.interests}!`,
    ];
    setGeneratedBios(fakeBios);

    // Placeholder function to simulate answer generation
    const fakeAnswers = [
      { question: "What's your ideal first date?", answer: `A day exploring ${userInfo.location} and discussing ${userInfo.interests}.` },
      { question: "What's your favorite travel destination?", answer: `Any place where I can practice my ${userInfo.interests}.` },
      { question: selectedQuestion, answer: generateAnswerForQuestion(selectedQuestion) },
    ];
    setGeneratedAnswers(fakeAnswers);
  };

  const generateAnswerForQuestion = (question) => {
    // This is a placeholder function. In a real implementation, you'd use AI or more sophisticated logic.
    const answers = {
      "I guarantee you that...": `I guarantee you that I'll always be up for ${userInfo.interests}.`,
      "I'm a great +1 because...": `I'm a great +1 because I'm always ready to talk about ${userInfo.interests} or explore ${userInfo.location}.`,
      "What makes a relationship great is...": `What makes a relationship great is shared interests like ${userInfo.interests} and mutual respect.`,
      // Add more predefined answers for other questions here
    };
    return answers[question] || `As a ${userInfo.age}-year-old ${userInfo.occupation}, ${question.toLowerCase()} is something I think about often.`;
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AI Bio Generator for Bumble and Tinder</h1>
      
      <form className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={userInfo.name} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input id="age" name="age" type="number" value={userInfo.age} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="interests">Interests</Label>
          <Textarea id="interests" name="interests" value={userInfo.interests} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="occupation">Occupation</Label>
          <Input id="occupation" name="occupation" value={userInfo.occupation} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={userInfo.location} onChange={handleInputChange} />
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

      {generatedBios.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Generated Bios</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedBios.map((bio, index) => (
              <p key={index} className="mb-2">{bio}</p>
            ))}
          </CardContent>
        </Card>
      )}

      {generatedAnswers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Answers to Profile Questions</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedAnswers.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;