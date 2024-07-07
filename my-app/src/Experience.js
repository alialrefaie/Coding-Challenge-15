// src/Experience.js
import React from 'react';

function Experience() {
    const experiences = [
        { title: "IT Analyst", company: "Rooms To Go", duration: "2024-Present" },
    ];

    return (
        <div className="experience-section">
            {experiences.map(exp => (
                <div key={exp.title}>
                    <h3>{exp.title}</h3>
                    <p>{exp.company}</p>
                    <p>{exp.duration}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;