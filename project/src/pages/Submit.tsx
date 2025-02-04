import React, { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { ArticleTypeSelector } from '../components/ArticleTypeSelector';
import { SubmissionForm } from '../components/SubmissionForm';

export function Submit() {
  const [step, setStep] = useState<'select-type' | 'submission'>('select-type');
  const [selectedType, setSelectedType] = useState('');

  const handleStartSubmission = () => {
    setStep('submission');
  };

  if (step === 'submission') {
    return <SubmissionForm articleType={selectedType} />;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {step === 'select-type' ? (
        <ArticleTypeSelector
          selectedType={selectedType}
          onSelect={setSelectedType}
          onSubmit={handleStartSubmission}
        />
      ) : (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Submit Your Manuscript</h1>

          <div className="bg-white border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Submission Process</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">1. Prepare Your Manuscript</h3>
                  <p className="text-gray-600">
                    Ensure your manuscript follows our formatting guidelines and includes all required
                    sections
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">2. Submit Online</h3>
                  <p className="text-gray-600">
                    Use our online submission system to upload your manuscript and provide required
                    information
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">3. Track Progress</h3>
                  <p className="text-gray-600">
                    Monitor the status of your submission through our online system
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Submission Requirements</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Original research not published elsewhere</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Manuscript formatted according to journal guidelines</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>All figures and tables in high resolution</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cover letter explaining significance of research</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-800">Important Notice</h3>
                <p className="text-orange-700 mt-1">
                  Please ensure you have read our Author Guidelines and Publication Ethics before
                  submitting your manuscript. Submissions that do not follow our guidelines may be
                  returned without review.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep('select-type')}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Start New Submission
            </button>
          </div>
        </div>
      )}
    </main>
  );
}