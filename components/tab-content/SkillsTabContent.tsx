import React from 'react'
import GenericTabContent from './GenericTabContent'

export default function SkillsTabContent() {
    const techSkills = [
        { name: "React", level: 5 }
    ]

    const languageSkills = [
        { name: "French", level: 5 }
    ]
    return (
        <GenericTabContent title="SKILLS">
            <div>
                <div>
                    {
                        techSkills.map((techSkill) => (
                            <>
                                <div>
                                    {techSkill.name}
                                </div>
                                <div>
                                    {
                                        new Array(5).map((_, i) => (
                                            <div key={i} className={`${i < techSkill.level ? "bg-custom-green" : undefined} w-full`}>

                                            </div>
                                        ))
                                    }
                                </div>
                            </>

                        ))
                    }
                </div>
            </div>
        </GenericTabContent>
    )
}
