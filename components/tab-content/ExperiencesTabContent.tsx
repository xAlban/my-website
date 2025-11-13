import React from 'react'
import GenericTabContent from './GenericTabContent'

export default function ExperiencesTabContent() {
    return (
        <GenericTabContent title="EXPERIENCES">
            <div>
                <h3 className="text-2xl text-custom-purple">Full Stack Developer @Veesual</h3>
                <h3 className="text-xl text-custom-purple">November 2021 - August 2025</h3>
            </div>
            <ul className="list-disc list-inside marker:text-custom-green">
                <li>Web development using React, TypeScript, and Redux Toolkit.</li>
                <li>Work with an automated deployment workflow.</li>
                <li>Asynchronous collaboration within a small team. (Full remote)</li>
                <li>Implement processes to support company growth and ensure timely deliveries.</li>
            </ul>
            <div>
                <h3 className="text-2xl text-custom-purple">Software Engineer @Actimage GmbH</h3>
                <h3 className="text-xl text-custom-purple">August 2019 - November 2021</h3>
            </div>
            <ul className="list-disc list-inside marker:text-custom-green">
                <li>Augmented Reality researches with React Native</li>
                <li>Teamworking and task organization</li>
                <li>Cross-platform mobile development</li>
            </ul>

            <p className="text-xl">
                Check out the projects I've worked on in the Project tab
            </p>
        </GenericTabContent>
    )
}
