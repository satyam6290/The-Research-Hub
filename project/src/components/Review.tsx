import React from "react";

const Review = ({ previousData = {} }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Files Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Files</h2>
          <p className="text-gray-600 mb-2">{previousData.filesAdded || "0 FILES ADDED"}</p>
          <button className="text-blue-500 hover:underline">Provide a manuscript file</button>
        </div>

        {/* Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
          <div className="space-y-4">
            <div>
              <span className="block text-gray-700">Article type</span>
              <p className="text-gray-600">{previousData.articleType || "Brief Report"}</p>
            </div>
            <div>
              <span className="block text-gray-700">Title</span>
              <button className="text-blue-500 hover:underline">{previousData.title || "Enter a title"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Abstract</span>
              <button className="text-blue-500 hover:underline">{previousData.abstract || "Enter an abstract"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Cover letter</span>
              <button className="text-blue-500 hover:underline">{previousData.coverLetter || "Provide a cover letter"}</button>
            </div>
          </div>
        </div>

        {/* Authors Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Authors</h2>
          <div className="space-y-4">
            <div>
              <button className="text-blue-500 hover:underline">{previousData.authorsInfo || "Complete authors' info"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Author Contributions Statement</span>
              <button className="text-blue-500 hover:underline">{previousData.contributionsStatement || "Enter the authors contributions statement"}</button>
            </div>
          </div>
        </div>

        {/* Declarations Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Declarations</h2>
          <div className="space-y-4">
            <div>
              <span className="block text-gray-700">Hybrid</span>
              <button className="text-blue-500 hover:underline">{previousData.hybridPolicy || "Declare your acceptance of the publishing policy"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Competing Interests</span>
              <button className="text-blue-500 hover:underline">{previousData.competingInterests || "Declare whether you have any competing financial and/or non-financial interests"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Dual Publication</span>
              <button className="text-blue-500 hover:underline">{previousData.dualPublication || "Identify results/data/figures taken from other published/pending manuscripts and explain why this does not constitute dual publication"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Authorship</span>
              <button className="text-blue-500 hover:underline">{previousData.authorship || "Declare your compliance with the Nature Portfolio journal policies"}</button>
            </div>
            <div>
              <span className="block text-gray-700">Third Party Material</span>
              <p className="text-gray-600">{previousData.thirdPartyMaterial || "The manuscript contains third party material and obtained permissions are available on request by the Publisher."}</p>
            </div>
            <div>
              <span className="block text-gray-700">Data Availability</span>
              <p className="text-gray-600">{previousData.dataAvailability || "No, I do not have any research data outside the submitted manuscript file."}</p>
            </div>
          </div>
        </div>

        {/* Preprint Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Share your work as a preprint (optional)</h2>
          <p className="text-gray-600 mb-4">
            Springer Nature and Research Square are partnering to provide a free preprinting service to all authors. {" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about In Review
            </a>
            .
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Preprints are assigned a DOI and posted openly online on Research Square.</li>
            <li>
              This process establishes the priority of your findings over competing findings that have not yet been publicly shared.
            </li>
            <li>
              Preprints are posted right away and remain permanently available, enabling collaboration, citation, and community feedback.
            </li>
            <li>
              Your preprint will show where your manuscript is under consideration and allow others to track its status.
            </li>
            <li>
              If your submission is subsequently published, the preprint will link to the final journal article.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            By opting in you agree:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Your manuscript and associated personal data will be shared with our partner Research Square for posting as a preprint.
            </li>
            <li>
              To grant Research Square the right to post your manuscript publicly and permanently as a preprint under a CC-BY License Agreement 4.0.
            </li>
            <li>
              That all authors are aware and have agreed to posting the submission as a preprint.
            </li>
            <li>To Research Square's terms of service.</li>
          </ul>
          <div className="space-y-2">
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preprintOption"
                  className="mr-2"
                  value="yes"
                />
                Yes, all authors agree to post this work as a preprint on Research Square
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preprintOption"
                  className="mr-2"
                  value="no"
                />
                No, we don't want to post our work as a preprint at this time
              </label>
            </div>
          </div>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Submit manuscript
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
