// src/Skills.js
import React from 'react';

function Skill ({ name, level }) {
    return <li>{`${name}: ${level}`}</li>;
}

function Skills() {
    const skills = [
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
    ];

    return (
        <ul className="skills-list">
            {skills.map(skill => <Skill key={skill.name} name={skill.name} level={skill.level} />)}
        </ul>
    );
}

export default Skills;