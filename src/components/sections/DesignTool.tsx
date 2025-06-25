"use client";

import { useState, useRef, type FormEvent } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getSuggestionForImage, getSuggestionForText } from '@/lib/actions';

import AnimatedSection from '../AnimatedSection';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Lightbulb, Loader2, PartyPopper, Upload, Wand2 } from 'lucide-react';
import Image from 'next/image';

function SubmitButton({ idleText, submittingText }: { idleText: string; submittingText: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {submittingText}
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          {idleText}
        </>
      )}
    </Button>
  );
}

const AiToolImageForm = () => {
  const [state, formAction] = useFormState(getSuggestionForImage, null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if(preview) {
        formData.set('photoDataUri', preview);
    }
    formAction(formData);
  }

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
       <div className="space-y-2">
        <Label htmlFor="photo">Upload a Photo</Label>
        <Input 
          id="photo" 
          name="photo" 
          type="file" 
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="file:text-foreground"
        />
        {preview && (
            <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-md border">
                <Image src={preview} alt="Room preview" layout="fill" objectFit="cover" />
            </div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Design Notes (Optional)</Label>
        <Textarea id="description" name="description" placeholder="e.g., 'I'm looking for a modern, minimalist style.'" />
      </div>
      <SubmitButton idleText="Get Design Ideas" submittingText="Analyzing space..." />
      {state?.data && <SuggestionResult result={state.data.designSuggestion} />}
      {state?.error && typeof state.error === 'string' && <ErrorResult message={state.error} />}
    </form>
  );
};

const AiToolTextForm = () => {
  const [state, formAction] = useFormState(getSuggestionForText, null);
  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="roomDescription">Describe Your Room</Label>
        <Textarea
          id="roomDescription"
          name="roomDescription"
          placeholder="e.g., 'A small bathroom with a large window, white walls, and silver fixtures. I want a coastal, spa-like feel.'"
          rows={6}
          required
        />
      </div>
      <SubmitButton idleText="Generate Suggestions" submittingText="Envisioning design..." />
      {state?.data && <SuggestionResult result={state.data.designSuggestion} />}
      {state?.error && typeof state.error === 'string' && <ErrorResult message={state.error} />}
    </form>
  );
}

const SuggestionResult = ({ result }: { result: string }) => (
  <Alert className="bg-primary/10 border-primary/20">
    <PartyPopper className="h-4 w-4 text-primary" />
    <AlertTitle className="font-headline text-primary">Design Suggestion</AlertTitle>
    <AlertDescription className="text-primary/90 whitespace-pre-wrap">{result}</AlertDescription>
  </Alert>
);

const ErrorResult = ({ message }: { message: string }) => (
    <Alert variant="destructive">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
    </Alert>
);

const DesignTool = () => {
  return (
    <AnimatedSection id="design-tool" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    AI-Powered Design Assistant
                </h2>
                <p className="text-muted-foreground text-lg">
                    Struggling to visualize your perfect space? Let our AI designer help. Provide a photo of your room or a simple description, and get instant design suggestions featuring our exquisite products.
                </p>
                <Card className="bg-background/50 border-dashed">
                    <CardContent className="p-6 flex items-start gap-4">
                        <Lightbulb className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-headline font-semibold">How it Works</h4>
                            <p className="text-sm text-muted-foreground">
                            Our AI analyzes your input and leverages interior design principles to recommend complementary mosaics, tiles, and furnishings from our collections, tailored to your style.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Create Your Vision</CardTitle>
                        <CardDescription>Choose your method to get started.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="image" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="image"><Upload className="mr-2 h-4 w-4"/>With an Image</TabsTrigger>
                                <TabsTrigger value="text"><Wand2 className="mr-2 h-4 w-4"/>With Text</TabsTrigger>
                            </TabsList>
                            <TabsContent value="image" className="pt-6">
                                <AiToolImageForm />
                            </TabsContent>
                            <TabsContent value="text" className="pt-6">
                                <AiToolTextForm />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DesignTool;
