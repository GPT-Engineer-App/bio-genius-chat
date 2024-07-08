import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    interests: "",
    occupation: "",
    location: "",
  });

  const [generatedBios, setGeneratedBios] = useState([]);
  const [generatedAnswers, setGeneratedAnswers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const generateBios = () => {
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
    ];
    setGeneratedAnswers(fakeAnswers);
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
      </form>

      <Button onClick={generateBios} className="w-full mb-6">Generate Bios</Button>

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
            <CardTitle>Answers to Bumble and Tinder Questions</CardTitle>
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