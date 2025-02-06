import React from 'react';
import { FileText, List, Image, Mail } from 'lucide-react';

export function AuthorGuidelines() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Author Guidelines</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Manuscript Preparation</h2>
            <div className="bg-white border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">File Format</h3>
                    <p className="text-gray-600">Submit manuscripts in Microsoft Word (.doc/.docx) or LaTeX format</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <List className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Structure</h3>
                    <p className="text-gray-600">Include title, abstract, keywords, introduction, methods, results, discussion, and references</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Image className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Figures and Tables</h3>
                    <p className="text-gray-600">Submit high-resolution images (300 dpi or higher) in TIFF, JPEG, or PNG format</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Formatting Guidelines</h2>
            <div className="bg-white border rounded-lg p-6">
              <ul className="space-y-4 text-gray-600">
                <li>
                  <h3 className="font-medium text-gray-900">Page Layout</h3>
                  <p>A4 size with 2.5 cm margins on all sides</p>
                </li>
                <li>
                  <h3 className="font-medium text-gray-900">Font</h3>
                  <p>Times New Roman, 12 point size</p>
                </li>
                <li>
                  <h3 className="font-medium text-gray-900">Line Spacing</h3>
                  <p>Double-spaced throughout</p>
                </li>
                <li>
                  <h3 className="font-medium text-gray-900">Page Numbers</h3>
                  <p>Include page numbers in the bottom right corner</p>
                </li>
                <li>
                  <h3 className="font-medium text-gray-900">References</h3>
                  <p>Follow IEEE citation style</p>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article Types</h2>
            <div className="bg-white border rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Original Research Articles</h3>
                  <p className="text-gray-600">Maximum 8,000 words, including abstract and references</p>
                </div>
                <div>
                  <h3 className="font-medium">Review Articles</h3>
                  <p className="text-gray-600">Maximum 12,000 words, including abstract and references</p>
                </div>
                <div>
                  <h3 className="font-medium">Technical Notes</h3>
                  <p className="text-gray-600">Maximum 4,000 words, including abstract and references</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">
                    For questions about manuscript submission or preparation, please contact the editorial office at:
                    <br />
                    <a href="mailto:editorial@wirelessnetworks.com" className="text-orange-600 hover:underline">
                      editorial@theresearchhub.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}