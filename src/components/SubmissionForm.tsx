import React, { useState } from 'react';
import { Upload, Users, FileText, CheckSquare, Eye } from 'lucide-react';
import { Button, Card, CardContent, Textarea, Input, Label } from "./ui";
import  DecForm from './DecForm.tsx';
import Review from './Review.tsx';
interface Author {
  givenName: string;
  familyName: string;
  email: string;
  primaryAffiliation: string;
  otherAffiliation: string;
  funders: boolean;
}

interface SubmissionFormProps {
  articleType: string;
}

export function SubmissionForm({ articleType }: SubmissionFormProps) {
  const [activeTab, setActiveTab] = useState('files');
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [authors, setAuthors] = useState<Author[]>([
    { givenName: "", familyName: "", email: "", primaryAffiliation: "", otherAffiliation: "", funders: false },
  ]);

  const tabs = [
    { id: 'files', label: 'Files', icon: Upload },
    { id: 'details', label: 'Details', icon: FileText },
    { id: 'authors', label: 'Authors', icon: Users },
    { id: 'declarations', label: 'Declarations', icon: CheckSquare },
    { id: 'review', label: 'Review', icon: Eye }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    setLastSaved(new Date());
  };

  const handleCoverLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCoverLetter(event.target.files[0]);
      setLastSaved(new Date());
    }
  };

  const handleAddAuthor = () => {
    setAuthors([
      ...authors,
      { givenName: "", familyName: "", email: "", primaryAffiliation: "", otherAffiliation: "", funders: false },
    ]);
    setLastSaved(new Date());
  };

  const handleAuthorChange = (index: number, field: keyof Author, value: string | boolean) => {
    const newAuthors = [...authors];
    newAuthors[index] = { ...newAuthors[index], [field]: value };
    setAuthors(newAuthors);
    setLastSaved(new Date());
  };
  

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
          <div className="flex-1 border-b-2 border-transparent">
            <div className="flex justify-end py-4 pr-4 text-sm text-gray-500">
              Saved {lastSaved.toLocaleTimeString()}
            </div>
          </div>
        </nav>
      </div>

      {/* Content Sections */}
      <div className="mt-8">
        {activeTab === 'files' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Manuscript file</h2>
              <p className="text-gray-600 mb-4">
                Check that your manuscript has been prepared according to the{' '}
                <a
                  href="/author-guidelines"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  journal guidelines
                </a>{' '}
                or your submission may not meet our technical checks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-gray-600 mb-4">
                It's best if your manuscript — including all text, figures and tables — is in one file.
              </p>
              <p className="text-gray-600 mb-4">
                Upload your manuscript in an editable format for peer review (maximum 2GB). This will be either:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>a Word document with figures and tables placed in the body of the text where they are referenced</li>
                <li>LaTeX documents with figures and tables compressed into a .zip format. We will compile these into a PDF for peer review.</li>
              </ul>
              <p className="text-gray-600 mb-6">
                We will try to fill in some form fields using the information you provide in your manuscript.
              </p>
            </div>

            <div>
              <input
                type="file"
                id="manuscript"
                onChange={handleFileUpload}
                className="hidden"
                accept=".doc,.docx,.zip"
              />
              <label
                htmlFor="manuscript"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer"
              >
                <Upload className="h-5 w-5 mr-2" />
                Upload manuscript
              </label>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="max-w-2xl mx-auto p-6 space-y-6">
            <Card>
              <CardContent className="space-y-2">
                <Label htmlFor="title" className="font-semibold text-lg">Title</Label>
                <p className="text-sm text-gray-500">
                  This is the title seen by potential reviewers. It must match the title as it appears in your manuscript file.
                </p>
                <Textarea
                  id="title"
                  placeholder="Enter title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-2">
                <Label htmlFor="abstract" className="font-semibold text-lg">Abstract</Label>
                <p className="text-sm text-gray-500">
                  This is the abstract seen by potential reviewers. It must match the abstract as it appears in your manuscript file.
                </p>
                <Textarea
                  id="abstract"
                  placeholder="Enter abstract..."
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  className="w-full border rounded-md p-2"
                />
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Label className="font-semibold text-lg">Cover letter</Label>
              <p className="text-sm text-gray-500">
                Provide a cover letter outlining your research. The cover letter should briefly discuss the context and importance of the submitted work and why it is appropriate for the journal.
              </p>
              <label className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-700">
                <Upload className="w-4 h-4" />
                Upload cover letter
                <Input type="file" className="hidden" onChange={handleCoverLetterChange} />
              </label>
              {coverLetter && <p className="text-sm text-gray-700">{coverLetter.name}</p>}
            </div>

            <div className="flex justify-between">
              <Button variant="outline">← Previous</Button>
              <Button variant="outline">Next →</Button>
            </div>
          </div>
        )}

        {activeTab === 'authors' && (
          <div className="p-6 max-w-4xl mx-auto">
            {/* Affiliated Institutions */}
            <div className="mb-8">
              <h2 className="text-lg font-bold">Affiliated Institutions</h2>
              <p className="text-sm text-gray-500">
                Add the institutions that your manuscript's authors are affiliated with.
              </p>
              <label className="block mt-4">
                <span className="text-sm text-gray-700">Institution name (e.g. University of Oxford)</span>
                <Input
                  type="text"
                  placeholder="Institution name"
                  className="mt-2"
                />
              </label>
            </div>

            {/* Funding */}
            <div className="mb-8">
              <h2 className="text-lg font-bold">Funding (optional)</h2>
              <p className="text-sm text-gray-500">
                Please add the funder(s) of the research described in this manuscript.
              </p>
              <label className="block mt-4">
                <span className="text-sm text-gray-700">Funder name (e.g. UK Space Agency)</span>
                <Input
                  type="text"
                  placeholder="Funder name"
                  className="mt-2"
                />
              </label>
              <label className="block mt-4">
                <span className="text-sm text-gray-700">Grant ID</span>
                <Input
                  type="text"
                  placeholder="Grant ID"
                  className="mt-2"
                />
              </label>
              <Button className="mt-4">
                Add funder
              </Button>
            </div>

            {/* Authors Information */}
            <div className="mb-8">
              <h2 className="text-lg font-bold">Authors' Information</h2>
              <p className="text-sm text-gray-500">
                Add all author names in the order they should appear in the manuscript.
              </p>

              {authors.map((author, index) => (
                <Card key={index} className="my-4">
                  <CardContent>
                    <h3 className="text-sm font-bold mb-4">Author {index + 1}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`givenName-${index}`}>Given names</Label>
                        <Input
                          id={`givenName-${index}`}
                          type="text"
                          placeholder="Given names"
                          value={author.givenName}
                          onChange={(e) => handleAuthorChange(index, 'givenName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`familyName-${index}`}>Family name</Label>
                        <Input
                          id={`familyName-${index}`}
                          type="text"
                          placeholder="Family name"
                          value={author.familyName}
                          onChange={(e) => handleAuthorChange(index, 'familyName', e.target.value)}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor={`email-${index}`}>Email</Label>
                        <Input
                          id={`email-${index}`}
                          type="email"
                          placeholder="Email"
                          value={author.email}
                          onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor={`primaryAffiliation-${index}`}>Primary affiliation</Label>
                        <select
                          id={`primaryAffiliation-${index}`}
                          value={author.primaryAffiliation}
                          onChange={(e) => handleAuthorChange(index, 'primaryAffiliation', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select primary affiliation</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor={`otherAffiliation-${index}`}>Other affiliation</Label>
                        <select
                          id={`otherAffiliation-${index}`}
                          value={author.otherAffiliation}
                          onChange={(e) => handleAuthorChange(index, 'otherAffiliation', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select other affiliation</option>
                        </select>
                      </div>
                    </div>

                    <label className="mt-4 flex items-center">
                      <input
                        type="checkbox"
                        checked={author.funders}
                        onChange={(e) => handleAuthorChange(index, 'funders', e.target.checked)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">No funding</span>
                    </label>
                  </CardContent>
                </Card>
              ))}

              <Button
                onClick={handleAddAuthor}
                className="mt-4"
              >
                Add another author
              </Button>
            </div>

            {/* Corresponding Authors Section */}
            <div className="mb-8">
              <h2 className="text-lg font-bold">Corresponding authors</h2>
              <p className="text-sm text-gray-500">
                Choose a primary corresponding author. We will contact this person
                during the submission and publication process.
              </p>
              <label className="block mt-4">
                <span className="text-sm text-gray-700">Select from your author list below</span>
                <select
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select author</option>
                  {authors.map((author, index) => (
                    <option key={index} value={index}>
                      {author.givenName} {author.familyName}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Author Contributions Statement */}
            <div className="mb-8">
              <h2 className="text-lg font-bold">Author Contributions Statement</h2>
              <p className="text-sm text-gray-500">
                Use this section to specify how authors contributed to the manuscript.
              </p>
              <Textarea
                rows={6}
                className="mt-4"
                placeholder="Write your contributions statement here..."
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button variant="outline">← Previous</Button>
              <Button variant="outline">Next →</Button>
            </div>
          </div>
        )}

        {activeTab === 'declarations' && (
          <div>
            <h2 className="text-xl font-bold mb-6">Declarations</h2>
           <DecForm/>
           
          </div>
        )}

        {activeTab === 'review' && (
          <div>
            <h2 className="text-xl font-bold mb-6">Review Submission</h2>
            {/* Add submission review */}
            <Review/>
          </div>
        )}
      </div>
    </div>
  );
}