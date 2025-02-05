import React, { useState } from "react";

const DecForm = () => {
  const [competingInterest, setCompetingInterest] = useState("");
  const [dualPublication, setDualPublication] = useState("");
  const [thirdPartyMaterial, setThirdPartyMaterial] = useState("");
  const [dataAvailability, setDataAvailability] = useState("");
  const [formData, setFormData] = useState({
    researchData: "no",
    researchDetails: "",
    acknowledgements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSubmit = {
      competingInterest,
      dualPublication,
      thirdPartyMaterial,
      dataAvailability,
      researchData: formData.researchData,
      researchDetails: formData.researchData === "yes" ? formData.researchDetails : null,
      acknowledgements: formData.acknowledgements,
    };
    console.log("Form Data Submitted:", formDataToSubmit);
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Manuscript Submission Form</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Publishing Policy Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Publishing policy</h2>
          <p className="text-gray-700 mb-2">
            Wireless Personal Communications is a hybrid journal{" "}
            <a href="#" className="text-blue-600 underline">
              (opens in a new window)
            </a>
            .
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>
              If you publish via <b>immediate gold open access</b>, you will agree
              to pay the article processing charges (APCs).
            </li>
            <li>
              If you publish via the <b>subscription publishing route</b>, you
              will agree to the journal's licensing terms.
            </li>
          </ul>
          <div className="flex items-center">
            <input type="checkbox" id="publishing-policy" className="mr-2" required />
            <label htmlFor="publishing-policy" className="text-gray-700">
              I have read and understood the publishing policy.
            </label>
          </div>
        </div>

        {/* Competing Interests Policy Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Competing interests policy</h2>
          <p className="text-gray-700 mb-4">
            Springer requires authors to declare any competing financial and/or
            non-financial interests.
          </p>
          <label className="block text-gray-700 font-medium mb-2">
            Do you have any competing financial and/or non-financial interests?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="competingInterest"
                value="No"
                className="mr-2"
                onChange={(e) => setCompetingInterest(e.target.value)}
              />
              No, I declare that the authors have no competing interests.
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="competingInterest"
                value="Yes"
                className="mr-2"
                onChange={(e) => setCompetingInterest(e.target.value)}
              />
              Yes, the authors have competing interests.
            </label>
          </div>
        </div>

        {/* Dual Publication Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Dual publication</h2>
          <p className="text-gray-700 mb-4">
            Have the results/data/figures in this manuscript been published or
            are they under consideration for publication elsewhere?
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="dualPublication"
                value="No"
                className="mr-2"
                onChange={(e) => setDualPublication(e.target.value)}
              />
              No, the results/data/figures in this manuscript have not been
              published elsewhere.
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="dualPublication"
                value="Yes"
                className="mr-2"
                onChange={(e) => setDualPublication(e.target.value)}
              />
              Yes, some portion of the results/data/figures in this manuscript
              have been published or are under consideration.
            </label>
          </div>
        </div>

        {/* Authorship Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Authorship</h2>
          <p className="text-gray-700 mb-4">
            You must ensure you have read{" "}
            <a href="#" className="text-blue-600 underline">
              Springer journal policies on author responsibilities (opens in a new window)
            </a>
            .
          </p>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="authorship"
              className="mr-2"
              required
            />
            <label htmlFor="authorship" className="text-gray-700">
              I confirm the corresponding author has read the journal policies and
              submit this manuscript in accordance with those policies.
            </label>
          </div>
        </div>

        {/* Third Party Material Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Third party material</h2>
          <p className="text-gray-700 mb-4">
            Any material in your manuscript that is not the original work of the
            authors may be protected by copyright and may require permission to
            publish. This includes:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Figures</li>
            <li>Images</li>
            <li>Supplementary material</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Does your manuscript contain any material from third parties?
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="thirdPartyMaterial"
                value="No"
                className="mr-2"
                onChange={(e) => setThirdPartyMaterial(e.target.value)}
              />
              No, all material is owned by the authors.
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="thirdPartyMaterial"
                value="Yes"
                className="mr-2"
                onChange={(e) => setThirdPartyMaterial(e.target.value)}
              />
              Yes, the manuscript contains third-party material.
            </label>
          </div>
        </div>

        {/* Data Availability Section */}
        {/* <div>
          <h2 className="text-xl font-bold mb-4">Data availability</h2>
          <p className="text-gray-700 mb-4">
            Describe how and where we can access the research data supporting the
            results of your manuscript.
          </p>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Provide details about data availability..."
            onChange={(e) => setDataAvailability(e.target.value)}
          />
        </div> */}

        {/* Research Data Declarations Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Data availability</h2>
          <p className="text-sm text-gray-600 mb-4">
            Describe how and where we can access the research data supporting the
            results of your manuscript. Include (where applicable) links to the
            data set or accession number. Use only full URL strings, not
            embedded links.
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="researchData"
                value="no"
                checked={formData.researchData === "no"}
                onChange={(e) => setFormData({ ...formData, researchData: e.target.value })}
                className="mr-2"
              />
              No/Not applicable (this manuscript does not report data generation or analysis).
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="researchData"
                value="yes"
                checked={formData.researchData === "yes"}
                onChange={(e) => setFormData({ ...formData, researchData: e.target.value })}
                className="mr-2"
              />
              Yes, I have research data to declare.
            </label>
          </div>
          {formData.researchData === "yes" && (
            <textarea
              name="researchDetails"
              placeholder="Provide details about your research data here..."
              value={formData.researchDetails}
              onChange={(e) => setFormData({ ...formData, researchDetails: e.target.value })}
              className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          )}
        </div>

        {/* Acknowledgements Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Acknowledgements (Optional)</h2>
          <p className="text-sm text-gray-600 mb-4">
            Acknowledge anyone who contributed towards the article that does not
            meet the criteria for authorship, including anyone who gave
            professional writing services or materials.
          </p>
          <textarea
            name="acknowledgements"
            placeholder="Enter acknowledgements here..."
            value={formData.acknowledgements}
            onChange={(e) => setFormData({ ...formData, acknowledgements: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DecForm;
