import { type ReactNode } from "react"
import { type CourseGoal as CGoal } from "../App"
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox"

type CourseGoalListProp = {
    goals: CGoal[]
    onDelete: (id: number) => void
}

export default function CourseGoalList({ goals, onDelete }: CourseGoalListProp) {

    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. start adding some!
            </InfoBox>)
    }

    let warningBox: ReactNode

    if (goals.length > 4) {
        warningBox = <InfoBox mode="warning" severity="medium">You'r collecting alot of goals Don't put to much in your plate</InfoBox>
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) =>
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>)
                }
            </ul >
        </>
    )
}
