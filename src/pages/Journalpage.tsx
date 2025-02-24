import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function JournalPage() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6">
            {/* Header Section */}
            <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center md:space-x-16">
                <img
                    src="https://th.bing.com/th?id=OIP.MiB7vH7QNnKHHmd949LnkwHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Journal Cover"
                    className="w-40 h-40 object-cover rounded-lg"
                />
                <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Journal of Advanced Research
                    </h1>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                        Submit Your Manuscript
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="w-full max-w-5xl bg-white shadow-md rounded-lg mt-6 p-4">
                <ul className="flex justify-around text-lg font-semibold">
                    {[
                        {
                            name: "About This Journal",
                            links: [
                                { path: "/aim-scope", label: "Aim & Scope" },
                                { path: "/editorial-board", label: "Editorial Board" },
                                { path: "/editorial-policies", label: "Editorial Policies" },
                                { path: "/rights-permissions", label: "Rights & Permissions" },
                                { path: "/ethics-disclosure", label: "Ethics & Disclosure" },
                                { path: "/contact-us", label: "Contact Us" }
                            ]
                        },
                        {
                            name: "Articles",
                            links: [
                                { path: "/collections", label: "Collections" },
                                { path: "/volume-issues", label: "Volume & Issues" }
                            ]
                        },
                        {
                            name: "For Authors",
                            links: [
                                { path: "/presubmission-checklist", label: "Presubmission Checklist" },
                                { path: "/submission-guidelines", label: "Submission Guidelines" },
                                { path: "/how-to-publish", label: "How to Publish with Us" },
                                { path: "/peer-review-policies", label: "Peer Review Policies" },
                                { path: "/submit-manuscript", label: "Submit Your Manuscript" }
                            ]
                        }
                    ].map((menu, index) => (
                        <li key={index} className="relative group">
                            <button
                                className="text-gray-800"
                                onClick={() => toggleDropdown(menu.name)}
                            >
                                {menu.name} ▼
                            </button>
                            <ul
                                className={`absolute left-0 w-56 bg-white shadow-lg rounded-lg z-10 ${openDropdown === menu.name ? "block" : "hidden"
                                    } group-hover:block`}
                            >
                                {menu.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.path}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
